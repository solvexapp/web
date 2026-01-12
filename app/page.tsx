import Link from "next/link";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "54911XXXXXXXX";
const WHATSAPP_TEXT = encodeURIComponent("Hola! Quiero hablar sobre integraciones/ERP/CRM con Solvex.");

function SectionTitle({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? <p className="text-sm font-medium text-zinc-500">{kicker}</p> : null}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">{title}</h2>
      {subtitle ? <p className="mt-3 text-base text-zinc-600">{subtitle}</p> : null}
    </div>
  );
}

export default function Home() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-30 border-b border-zinc-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-200" />
            <span className="font-semibold tracking-tight">Solvex</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            <a href="#servicios" className="hover:text-zinc-900">Servicios</a>
            <a href="#proceso" className="hover:text-zinc-900">Proceso</a>
            <a href="#contacto" className="hover:text-zinc-900">Contacto</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href={waHref}
              target="_blank"
              className="rounded-xl border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50"
            >
              WhatsApp
            </Link>
            <a
              href="#contacto"
              className="rounded-xl bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Contactar
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600">
              Software factory · Integraciones · Asesoramiento de sistemas
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Implementamos e integramos sistemas para que tu empresa opere sin fricción.
            </h1>
            <p className="mt-4 text-base text-zinc-600 md:text-lg">
              ERP/CRM, integraciones API, automatización y data. Entregas por hitos, documentación y soporte real.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Hablemos hoy
              </a>
              <Link
                href={waHref}
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 px-4 py-3 text-sm font-medium hover:bg-zinc-50"
              >
                Escribinos por WhatsApp
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-100 bg-gradient-to-b from-zinc-50 to-white p-6 shadow-sm">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm font-medium text-zinc-900">Lo que resolvemos</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                <li>• Conectar ERP ↔ CRM ↔ eCommerce ↔ logística</li>
                <li>• Unificar datos y reporting (BI)</li>
                <li>• Automatizar aprobaciones y tareas repetitivas</li>
                <li>• Migraciones y modernización sin cortar la operación</li>
              </ul>
              <p className="mt-5 text-xs text-zinc-500">Menos planillas. Más visibilidad.</p>
            </div>
            <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm font-medium text-zinc-900">Stack típico</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {["Node.js", "Python", "PostgreSQL", "Docker", "AWS", "n8n", "REST/GraphQL", "Queues"].map((t) => (
                  <span key={t} className="rounded-full border border-zinc-200 px-3 py-1 text-zinc-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="border-t border-zinc-100 bg-zinc-50/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Servicios"
            title="Hacemos que tus sistemas trabajen juntos"
            subtitle="Solución simple, mantenible y con trazabilidad."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { title: "Integraciones", desc: "APIs, ETL, webhooks, colas y eventos. Con logs y alertas." },
              { title: "ERP / CRM", desc: "Implementación, customizaciones, flujos, permisos, capacitación." },
              { title: "Automatización", desc: "Workflows, tareas repetitivas, aprobaciones, conciliaciones." },
              { title: "Data & Reporting", desc: "Modelos, dashboards, métricas, calidad de datos." },
              { title: "Desarrollo a medida", desc: "Portales, backoffice, microservicios, integradores." },
              { title: "Diagnóstico", desc: "Auditoría técnica + roadmap priorizado por impacto." },
            ].map((s) => (
              <div key={s.title} className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="border-t border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Proceso"
            title="Delivery por hitos, sin sorpresas"
            subtitle="Alcance claro, seguimiento y handover."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { n: "01", title: "Descubrimiento", desc: "Objetivos, sistemas, restricciones y quick wins." },
              { n: "02", title: "Diseño", desc: "Arquitectura, contratos de datos, plan de entrega." },
              { n: "03", title: "Implementación", desc: "Iteraciones cortas, QA, observabilidad." },
              { n: "04", title: "Go-live & Soporte", desc: "Monitoreo, documentación, mejoras continuas." },
            ].map((p) => (
              <div key={p.n} className="rounded-3xl border border-zinc-100 bg-white p-6">
                <div className="text-xs font-medium text-zinc-500">{p.n}</div>
                <div className="mt-2 text-base font-semibold">{p.title}</div>
                <div className="mt-2 text-sm text-zinc-600">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="border-t border-zinc-100 bg-zinc-50/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Contacto"
            title="Contanos qué querés integrar"
            subtitle="WhatsApp para ir rápido o dejá el formulario."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Escribinos</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Sumá tu ERP/CRM actual y qué querés conectar (facturación, stock, ventas, logística).
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={waHref}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Abrir WhatsApp
                </Link>
                <a
                  href="mailto:contacto@solvexapp.com"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-200 px-4 py-3 text-sm font-medium hover:bg-zinc-50"
                >
                  contacto@solvexapp.com
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Formulario</h3>
              <form method="POST" action="/api/contact" className="mt-4 space-y-3">
                <input
                  name="name"
                  placeholder="Nombre"
                  className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                  required
                />
                <input
                  name="company"
                  placeholder="Empresa (opcional)"
                  className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                />
                <textarea
                  name="message"
                  placeholder="¿Qué querés integrar o mejorar?"
                  className="h-28 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                  required
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Enviar
                </button>
              </form>
              <p className="mt-3 text-xs text-zinc-500">Por ahora guarda el mensaje en logs.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Solvex</div>
          <div className="flex gap-4">
            <a className="hover:text-zinc-900" href="#servicios">Servicios</a>
            <a className="hover:text-zinc-900" href="#proceso">Proceso</a>
            <a className="hover:text-zinc-900" href="#contacto">Contacto</a>
          </div>
        </div>
      </footer>

      <Link
        href={waHref}
        target="_blank"
        className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-zinc-800"
        aria-label="WhatsApp Solvex"
      >
        WhatsApp
      </Link>
    </main>
  );
}
