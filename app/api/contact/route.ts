import crypto from "crypto";
import nodemailer from "nodemailer";
import { Client } from "pg";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const CONTACT_SCHEMA = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
  turnstileToken: z.string().trim(),
});

const RATE_LIMIT_MAX = Number(process.env.CONTACT_RATE_LIMIT_MAX ?? "5");
const RATE_LIMIT_WINDOW_SECONDS = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_SECONDS ?? "600");

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }
  return req.headers.get("x-real-ip") || "unknown";
}

async function parseBody(req: Request) {
  const contentType = req.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const body = await req.json();
    return {
      name: body.name,
      email: body.email,
      company: body.company ?? "",
      message: body.message,
      turnstileToken: body.turnstileToken ?? body["cf-turnstile-response"] ?? "",
    };
  }

  const formData = await req.formData();
  return {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    company: String(formData.get("company") || ""),
    message: String(formData.get("message") || ""),
    turnstileToken: String(formData.get("cf-turnstile-response") || ""),
  };
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      return { success: false, error: "TURNSTILE_SECRET_KEY is missing" };
    }
    return { success: true };
  }
  if (!token) {
    return { success: false, error: "missing_token" };
  }

  const formData = new URLSearchParams();
  formData.set("secret", secret);
  formData.set("response", token);
  if (ip && ip !== "unknown") {
    formData.set("remoteip", ip);
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData,
  });
  const data = (await response.json()) as { success: boolean; ["error-codes"]?: string[] };
  if (!data.success) {
    return { success: false, error: data["error-codes"]?.join(",") ?? "verification_failed" };
  }
  return { success: true };
}

async function ensureTables(client: Client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      message TEXT NOT NULL,
      ip TEXT,
      user_agent TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE TABLE IF NOT EXISTS contact_rate_limits (
      ip TEXT PRIMARY KEY,
      window_start TIMESTAMPTZ NOT NULL,
      count INTEGER NOT NULL DEFAULT 0
    );
  `);
}

async function applyRateLimit(client: Client, ip: string) {
  const result = await client.query(
    `
      INSERT INTO contact_rate_limits (ip, window_start, count)
      VALUES ($1, NOW(), 1)
      ON CONFLICT (ip)
      DO UPDATE SET
        count = CASE
          WHEN contact_rate_limits.window_start < NOW() - make_interval(secs => $2)
            THEN 1
          ELSE contact_rate_limits.count + 1
        END,
        window_start = CASE
          WHEN contact_rate_limits.window_start < NOW() - make_interval(secs => $2)
            THEN NOW()
          ELSE contact_rate_limits.window_start
        END
      RETURNING count;
    `,
    [ip, RATE_LIMIT_WINDOW_SECONDS],
  );

  const count = Number(result.rows[0]?.count ?? 0);
  return count <= RATE_LIMIT_MAX;
}

async function sendEmail(payload: z.infer<typeof CONTACT_SCHEMA>) {
  const provider = (process.env.CONTACT_MAIL_PROVIDER ?? "postmark").toLowerCase();
  const from = process.env.CONTACT_FROM;
  const to = process.env.CONTACT_TO ?? "contacto@solvexapp.com";
  if (!from) {
    throw new Error("CONTACT_FROM is required");
  }

  const subject = `Nuevo contacto desde Solvex: ${payload.name}`;
  const textBody = [
    `Nombre: ${payload.name}`,
    `Email: ${payload.email}`,
    `Empresa: ${payload.company || "No informado"}`,
    "",
    payload.message,
  ].join("\n");

  if (provider === "ses") {
    await sendSesEmail({
      from,
      to,
      replyTo: payload.email,
      subject,
      textBody,
    });
    return;
  }

  if (provider === "postmark") {
    const token = process.env.POSTMARK_TOKEN;
    if (!token) {
      throw new Error("POSTMARK_TOKEN is required for Postmark");
    }
    const response = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": token,
      },
      body: JSON.stringify({
        From: from,
        To: to,
        ReplyTo: payload.email,
        Subject: subject,
        TextBody: textBody,
      }),
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Postmark error: ${response.status} ${text}`);
    }
    return;
  }

  if (provider === "smtp") {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "465");
    const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    if (!host || !user || !pass) {
      throw new Error("SMTP_HOST, SMTP_USER, and SMTP_PASS are required for SMTP");
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject,
      text: textBody,
    });
    return;
  }

  throw new Error(`Unsupported mail provider: ${provider}`);
}

function hmac(key: crypto.BinaryLike, data: string) {
  return crypto.createHmac("sha256", key).update(data, "utf8").digest();
}

function sha256(data: string) {
  return crypto.createHash("sha256").update(data, "utf8").digest("hex");
}

function getSignatureKey(key: string, dateStamp: string, regionName: string, serviceName: string) {
  const kDate = hmac(`AWS4${key}`, dateStamp);
  const kRegion = hmac(kDate, regionName);
  const kService = hmac(kRegion, serviceName);
  return hmac(kService, "aws4_request");
}

async function sendSesEmail({
  from,
  to,
  replyTo,
  subject,
  textBody,
}: {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  textBody: string;
}) {
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  const sessionToken = process.env.AWS_SESSION_TOKEN;
  const region = process.env.AWS_REGION;
  if (!accessKeyId || !secretAccessKey || !region) {
    throw new Error("AWS credentials or region missing for SES");
  }

  const service = "ses";
  const host = `email.${region}.amazonaws.com`;
  const endpoint = `https://${host}/v2/email/outbound-emails`;
  const payload = JSON.stringify({
    FromEmailAddress: from,
    Destination: { ToAddresses: [to] },
    ReplyToAddresses: [replyTo],
    Content: {
      Simple: {
        Subject: { Data: subject },
        Body: { Text: { Data: textBody } },
      },
    },
  });

  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "");
  const dateStamp = amzDate.slice(0, 8);
  const canonicalUri = "/v2/email/outbound-emails";
  const canonicalQuerystring = "";
  const canonicalHeaders = [
    "content-type:application/json",
    `host:${host}`,
    `x-amz-date:${amzDate}`,
    sessionToken ? `x-amz-security-token:${sessionToken}` : null,
  ]
    .filter(Boolean)
    .join("\n");
  const signedHeaders = [
    "content-type",
    "host",
    "x-amz-date",
    sessionToken ? "x-amz-security-token" : null,
  ]
    .filter(Boolean)
    .join(";");
  const payloadHash = sha256(payload);
  const canonicalRequest = [
    "POST",
    canonicalUri,
    canonicalQuerystring,
    `${canonicalHeaders}\n`,
    signedHeaders,
    payloadHash,
  ].join("\n");

  const algorithm = "AWS4-HMAC-SHA256";
  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = [
    algorithm,
    amzDate,
    credentialScope,
    sha256(canonicalRequest),
  ].join("\n");
  const signingKey = getSignatureKey(secretAccessKey, dateStamp, region, service);
  const signature = crypto.createHmac("sha256", signingKey).update(stringToSign, "utf8").digest("hex");

  const authorizationHeader = `${algorithm} Credential=${accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-Amz-Date": amzDate,
    Authorization: authorizationHeader,
  };
  if (sessionToken) {
    headers["X-Amz-Security-Token"] = sessionToken;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: payload,
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`SES error: ${response.status} ${text}`);
  }
}

export async function POST(req: Request) {
  try {
    const payload = CONTACT_SCHEMA.parse(await parseBody(req));
    const ip = getClientIp(req);

    const turnstileResult = await verifyTurnstile(payload.turnstileToken, ip);
    if (!turnstileResult.success) {
      return NextResponse.json({ ok: false, error: "turnstile_failed" }, { status: 400 });
    }

    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      return NextResponse.json({ ok: false, error: "database_unavailable" }, { status: 500 });
    }

    const client = new Client({
      connectionString,
      ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : undefined,
    });
    await client.connect();

    try {
      await ensureTables(client);
      const allowed = await applyRateLimit(client, ip);
      if (!allowed) {
        return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
      }

      await client.query(
        `
          INSERT INTO contact_messages (name, email, company, message, ip, user_agent)
          VALUES ($1, $2, $3, $4, $5, $6);
        `,
        [payload.name, payload.email, payload.company || null, payload.message, ip, req.headers.get("user-agent")],
      );
    } finally {
      await client.end();
    }

    await sendEmail(payload);

    return NextResponse.redirect(new URL("/?sent=1", req.url), { status: 303 });
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
    }
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
