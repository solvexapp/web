import { Client } from "pg";

export const runtime = "nodejs";

type ContactMessage = {
  id: number;
  name: string;
  email: string;
  company: string | null;
  message: string;
  created_at: string;
};

async function fetchContacts() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is required");
  }

  const client = new Client({
    connectionString,
    ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : undefined,
  });
  await client.connect();

  try {
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
    `);

    const result = await client.query<ContactMessage>(
      `
        SELECT id, name, email, company, message, created_at
        FROM contact_messages
        ORDER BY created_at DESC
        LIMIT 100;
      `,
    );
    return result.rows;
  } finally {
    await client.end();
  }
}

export default async function AdminContactsPage() {
  const contacts = await fetchContacts();

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-12 text-[var(--ink)]">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">CRM · Contactos</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Últimos mensajes recibidos desde el formulario del sitio.
          </p>
        </div>
        <form action="/api/admin/logout" method="POST">
          <button
            type="submit"
            className="rounded-full border border-black/10 px-4 py-2 text-xs font-medium text-[var(--muted)] hover:text-[var(--ink)]"
          >
            Cerrar sesión
          </button>
        </form>
      </header>

      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-soft">
        <div className="border-b border-black/5 bg-[var(--paper)] px-4 py-3 text-sm font-medium">
          {contacts.length} mensajes (últimos 100)
        </div>
        <div className="divide-y divide-black/5">
          {contacts.length === 0 ? (
            <div className="px-4 py-8 text-sm text-[var(--muted)]">Todavía no hay mensajes.</div>
          ) : (
            contacts.map((contact) => (
              <article key={contact.id} className="px-4 py-5">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="rounded-full border border-black/10 px-2 py-0.5 text-xs text-[var(--muted)]">
                    #{contact.id}
                  </span>
                  <span className="font-semibold">{contact.name}</span>
                  <span className="text-[var(--muted)]">{contact.email}</span>
                  {contact.company ? (
                    <span className="rounded-full border border-black/10 px-2 py-0.5 text-xs text-[var(--muted)]">
                      {contact.company}
                    </span>
                  ) : null}
                  <span className="ml-auto text-xs text-[var(--muted)]">
                    {new Date(contact.created_at).toLocaleString("es-AR")}
                  </span>
                </div>
                <p className="mt-3 whitespace-pre-line text-sm text-[var(--ink)]">{contact.message}</p>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
