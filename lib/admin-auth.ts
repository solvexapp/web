const encoder = new TextEncoder();

function toBase64Url(bytes: Uint8Array) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(input: string) {
  const base64 = input.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function importKey(secret: string) {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

async function sign(secret: string, data: string) {
  const key = await importKey(secret);
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(data));
  return toBase64Url(new Uint8Array(signature));
}

export async function createAdminToken({
  username,
  secret,
  issuedAt,
}: {
  username: string;
  secret: string;
  issuedAt: number;
}) {
  const payload = JSON.stringify({ username, issuedAt });
  const encodedPayload = toBase64Url(encoder.encode(payload));
  const signature = await sign(secret, encodedPayload);
  return `${encodedPayload}.${signature}`;
}

export async function verifyAdminToken({
  token,
  secret,
  maxAgeSeconds,
}: {
  token: string;
  secret: string;
  maxAgeSeconds: number;
}) {
  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature) {
    return null;
  }

  const expectedSignature = await sign(secret, encodedPayload);
  if (signature !== expectedSignature) {
    return null;
  }

  const payload = JSON.parse(new TextDecoder().decode(fromBase64Url(encodedPayload))) as {
    username: string;
    issuedAt: number;
  };
  if (!payload.issuedAt || !payload.username) {
    return null;
  }

  const now = Date.now();
  if (now - payload.issuedAt > maxAgeSeconds * 1000) {
    return null;
  }

  return payload;
}
