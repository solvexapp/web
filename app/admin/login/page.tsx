export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams?: Promise<{ next?: string; error?: string }>;
}) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const nextPath = resolvedSearchParams.next ?? "/admin";
  const hasError = resolvedSearchParams.error === "1";

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-12 text-[var(--ink)]">
      <div className="rounded-3xl border border-black/10 bg-[var(--paper)] p-8 shadow-soft">
        <h1 className="text-2xl font-semibold tracking-tight">Acceso al CRM</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Ingresá tus credenciales para ver los contactos del sitio.
        </p>

        {hasError ? (
          <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
            Credenciales inválidas. Probá nuevamente.
          </div>
        ) : null}

        <form method="POST" action="/api/admin/login" className="mt-6 space-y-4">
          <input type="hidden" name="next" value={nextPath} />
          <label className="block text-xs font-medium text-[var(--muted)]">
            Usuario
            <input
              name="username"
              className="mt-2 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-black/30"
              autoComplete="username"
              required
            />
          </label>
          <label className="block text-xs font-medium text-[var(--muted)]">
            Contraseña
            <input
              name="password"
              type="password"
              className="mt-2 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-black/30"
              autoComplete="current-password"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-xl bg-[var(--ink)] px-4 py-3 text-sm font-medium text-[var(--paper)] hover:bg-black"
          >
            Ingresar
          </button>
        </form>
      </div>
    </main>
  );
}
