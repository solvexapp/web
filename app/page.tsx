import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "54911XXXXXXXX";
const WHATSAPP_TEXT = encodeURIComponent("Hola! Quiero hablar sobre integraciones/ERP/CRM con Solvex.");

function SectionTitle({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? <p className="text-sm font-medium text-[var(--muted)]">{kicker}</p> : null}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--ink)]">{title}</h2>
      {subtitle ? <p className="mt-3 text-base text-[var(--muted)]">{subtitle}</p> : null}
    </div>
  );
}

export default function Home() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

  return (
    <main className="relative min-h-screen text-[var(--ink)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
        <div className="absolute right-8 top-32 h-64 w-64 rounded-full bg-[var(--mint)]/12 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-amber-200/30 blur-[90px]" />
        <div className="grain absolute inset-0" />
      </div>

      <header className="sticky top-0 z-30 border-b border-black/5 bg-[var(--paper)]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Image
              src="/solvex-logo.svg"
              alt="Solvex"
              width={220}
              height={48}
              className="h-8 w-auto"
              priority
            />
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
            <a href="#servicios" className="hover:text-[var(--ink)]">Servicios</a>
            <a href="#propuesta" className="hover:text-[var(--ink)]">Propuesta</a>
            <a href="#inicio" className="hover:text-[var(--ink)]">Cómo empezamos</a>
            <a href="#productos" className="hover:text-[var(--ink)]">Productos</a>
            <a href="#proceso" className="hover:text-[var(--ink)]">Proceso</a>
            <a href="#resultados" className="hover:text-[var(--ink)]">Resultados</a>
            <a href="#contacto" className="hover:text-[var(--ink)]">Contacto</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href={waHref}
              target="_blank"
              className="rounded-xl border border-black/10 px-3 py-2 text-sm font-medium hover:bg-white/60"
            >
              WhatsApp
            </Link>
            <a
              href="#contacto"
              className="rounded-xl bg-[var(--ink)] px-3 py-2 text-sm font-medium text-[var(--paper)] hover:bg-black"
            >
              Contactar
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="animate-reveal">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-[var(--muted)]">
              Consultoría tecnológica · Integraciones · Operaciones críticas
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Integramos sistemas para que tu negocio opere con claridad, velocidad y control.
            </h1>
            <p className="mt-4 text-base text-[var(--muted)] md:text-lg">
              Alineamos ERP, CRM, eCommerce y logística en un solo flujo. Roadmap claro, riesgos controlados
              y entregas medibles desde la primera iteración.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--ink)] px-4 py-3 text-sm font-medium text-[var(--paper)] hover:bg-black"
              >
                Coordinar diagnóstico
              </a>
              <Link
                href={waHref}
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-medium hover:bg-white"
              >
                Escribinos por WhatsApp
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-[var(--muted)]">
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">Integraciones seguras</span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">SLA y monitoreo</span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">Migraciones sin corte</span>
            </div>
          </div>

          <div className="animate-reveal rounded-[28px] border border-black/10 bg-[var(--paper)] p-6 shadow-soft">
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <p className="text-sm font-medium text-[var(--ink)]">Lo que resolvemos</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                <li>• Conectar ERP ↔ CRM ↔ eCommerce ↔ logística</li>
                <li>• Consolidar data para BI y reporting operativo</li>
                <li>• Automatizar aprobaciones, conciliaciones y alertas</li>
                <li>• Modernizar servicios sin cortar la operación</li>
              </ul>
              <p className="mt-5 text-xs text-[var(--muted)]">Menos planillas. Más visibilidad.</p>
            </div>
            <div className="mt-4 rounded-2xl border border-black/10 bg-white p-5">
              <p className="text-sm font-medium text-[var(--ink)]">Capacidades de entrega</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {[
                  "Arquitectura de APIs",
                  "Mensajería y eventos",
                  "ETL/ELT",
                  "PostgreSQL/BigQuery",
                  "Docker/Kubernetes",
                  "AWS/GCP",
                  "Observabilidad",
                  "Infra como código",
                ].map((t) => (
                  <span key={t} className="rounded-full border border-black/10 px-3 py-1 text-[var(--muted)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                { label: "Tiempo de entrega", value: "2-4 semanas" },
                { label: "Quick wins", value: "En la primera iteración" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-black/10 bg-white p-4 text-sm">
                  <div className="text-xs text-[var(--muted)]">{item.label}</div>
                  <div className="mt-2 text-base font-semibold text-[var(--ink)]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="border-t border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Servicios"
            title="Hacemos que tus sistemas trabajen juntos"
            subtitle="Arquitectura sostenible, ownership claro y operaciones confiables."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { title: "Integraciones críticas", desc: "APIs, ETL, webhooks, colas y eventos con monitoreo." },
              { title: "Plataformas a medida", desc: "Servicios seguros, resilientes y listos para crecer." },
              { title: "ERP / CRM", desc: "Implementación, customizaciones, flujos y entrenamiento." },
              { title: "Automatización", desc: "Workflows, aprobaciones, conciliaciones y QA de datos." },
              { title: "Data & Observabilidad", desc: "Métricas, dashboards, trazas y data contracts." },
              { title: "Diagnóstico", desc: "Auditoría técnica y roadmap priorizado por impacto." },
            ].map((s) => (
              <div key={s.title} className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="propuesta" className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Propuesta"
            title="Una propuesta de valor clara y medible"
            subtitle="Integramos sistemas para que la operación tenga control, visibilidad y ritmo."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold text-[var(--ink)]">Lo que entregamos</p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {[
                  { title: "Mapa de sistemas", desc: "Inventario, dueños y puntos de falla." },
                  { title: "Contratos de datos", desc: "Esquemas claros, versionados y auditables." },
                  { title: "Observabilidad", desc: "Métricas, trazas y alertas accionables." },
                  { title: "Arquitectura escalable", desc: "Servicios listos para crecer sin deuda." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-black/10 bg-[var(--paper)] p-4">
                    <div className="text-sm font-semibold text-[var(--ink)]">{item.title}</div>
                    <div className="mt-2 text-xs text-[var(--muted)]">{item.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-black/10 bg-[var(--paper)] p-4 text-sm text-[var(--muted)]">
                Entrega con documentación viva y handover real: diagramas, runbooks y ownership claro.
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft">
              <p className="text-sm font-semibold text-[var(--ink)]">Valor para el negocio</p>
              <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <li>• Menos retrabajo entre equipos.</li>
                <li>• Flujo de datos confiable y auditado.</li>
                <li>• Operaciones rápidas ante cambios.</li>
                <li>• Plataforma preparada para escalar.</li>
              </ul>
              <div className="mt-6 rounded-2xl border border-black/10 bg-white p-4">
                <p className="text-xs text-[var(--muted)]">Tiempo típico de onboarding</p>
                <p className="mt-2 text-lg font-semibold text-[var(--ink)]">10-15 días</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="inicio" className="border-t border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Cómo empezamos"
            title="Alineamos negocio y tecnología desde el día uno"
            subtitle="Un camino claro para pasar de diagnóstico a entregas sostenibles."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "Etapa 1",
                title: "Diagnóstico & roadmap",
                desc: "Auditamos sistemas, definimos el backlog y priorizamos quick wins con impacto real.",
                items: ["Mapa de sistemas", "Dolores y cuellos", "Plan 90 días"],
              },
              {
                step: "Etapa 2",
                title: "MVP operativo",
                desc: "Construimos la primera integración o flujo crítico con monitoreo y QA.",
                items: ["Primera integración", "Data contracts", "Alertas y trazas"],
              },
              {
                step: "Etapa 3",
                title: "Escalado & producto",
                desc: "Expandimos conectores, automatizaciones y dashboards para sostener el crecimiento.",
                items: ["Nuevos endpoints", "Automatización", "Documentación viva"],
              },
            ].map((stage) => (
              <div key={stage.title} className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft">
                <div className="text-xs font-medium text-[var(--muted)]">{stage.step}</div>
                <div className="mt-2 text-lg font-semibold text-[var(--ink)]">{stage.title}</div>
                <div className="mt-2 text-sm text-[var(--muted)]">{stage.desc}</div>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  {stage.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Diagnóstico puntual",
                desc: "Ideal para alinear objetivos y destrabar un cuello urgente.",
                items: ["1-2 semanas", "Insights accionables", "Roadmap priorizado"],
              },
              {
                title: "Implementación iterativa",
                desc: "Construcción por sprints con entregas visibles cada 2-3 semanas.",
                items: ["Backlog activo", "KPIs de progreso", "Handover real"],
              },
              {
                title: "Acompañamiento continuo",
                desc: "Equipo extendido para evolucionar integraciones y data.",
                items: ["Monitoreo y soporte", "Mejoras continuas", "Métricas operativas"],
              },
            ].map((plan) => (
              <div key={plan.title} className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
                <div className="text-sm font-semibold text-[var(--ink)]">{plan.title}</div>
                <div className="mt-2 text-sm text-[var(--muted)]">{plan.desc}</div>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  {plan.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-black/10 bg-white p-6 shadow-soft md:flex md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--ink)]">Primer paso recomendado</p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Un diagnóstico corto para alinear objetivos, tiempos y riesgos antes de construir.
              </p>
            </div>
            <a
              href="#contacto"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-[var(--ink)] px-4 py-3 text-sm font-medium text-[var(--paper)] hover:bg-black md:mt-0"
            >
              Agendar diagnóstico
            </a>
          </div>
        </div>
      </section>

      <section id="productos" className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Productos"
            title="Herramientas propias para acelerar integraciones"
            subtitle="Componentes listos para operar y adaptarse a tu stack."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Solvex Connect",
                desc: "Conectores prearmados para ERP, eCommerce, pagos y logística.",
                items: ["Catálogo de conectores", "Monitoreo de integraciones", "Versionado de endpoints"],
              },
              {
                title: "Solvex Pulse",
                desc: "Observabilidad operativa para tener SLA claros y alertas accionables.",
                items: ["Dashboards de procesos", "Alertas en tiempo real", "Auditoría y trazas"],
              },
              {
                title: "Solvex Automate",
                desc: "Automatización no-code/low-code con validaciones y aprobaciones.",
                items: ["Workflows con reglas", "Gestión de tareas", "Integraciones seguras"],
              },
            ].map((p) => (
              <div key={p.title} className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{p.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  {p.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="border-t border-black/5">
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
              { n: "04", title: "Go-live & soporte", desc: "Monitoreo, documentación, mejoras continuas." },
            ].map((p) => (
              <div key={p.n} className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6">
                <div className="text-xs font-medium text-[var(--muted)]">{p.n}</div>
                <div className="mt-2 text-base font-semibold">{p.title}</div>
                <div className="mt-2 text-sm text-[var(--muted)]">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resultados" className="border-t border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Resultados"
            title="Impacto medible en operación y data"
            subtitle="Benchmarks típicos tras las primeras 8-12 semanas."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { value: "40%", label: "menos tiempo en tareas manuales" },
              { value: "3x", label: "mejoras en visibilidad de stock y ventas" },
              { value: "99.5%", label: "disponibilidad en procesos críticos" },
            ].map((r) => (
              <div key={r.label} className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6 text-center shadow-soft">
                <div className="text-3xl font-semibold text-[var(--ink)]">{r.value}</div>
                <div className="mt-2 text-sm text-[var(--muted)]">{r.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { title: "Retail & eCommerce", desc: "Ventas, inventario, fulfillment y BI en un solo flujo." },
              { title: "Servicios B2B", desc: "Onboarding, facturación recurrente y soporte conectado." },
              { title: "Manufactura ligera", desc: "Producción, compras y trazabilidad de insumos." },
              { title: "Logística", desc: "Ruteo, tracking y performance en tiempo real." },
            ].map((s) => (
              <div key={s.title} className="rounded-3xl border border-black/10 bg-[var(--paper)] p-5">
                <div className="text-sm font-semibold text-[var(--ink)]">{s.title}</div>
                <div className="mt-2 text-sm text-[var(--muted)]">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="border-t border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Contacto"
            title="Contanos qué querés integrar"
            subtitle="WhatsApp para ir rápido o dejá el formulario."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft">
              <h3 className="text-lg font-semibold">Escribinos</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Sumá tu ERP/CRM actual y qué querés conectar (facturación, stock, ventas, logística).
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={waHref}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-xl bg-[var(--ink)] px-4 py-3 text-sm font-medium text-[var(--paper)] hover:bg-black"
                >
                  Abrir WhatsApp
                </Link>
                <a
                  href="mailto:contacto@solvexapp.com"
                  className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-medium hover:bg-white"
                >
                  contacto@solvexapp.com
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft">
              <h3 className="text-lg font-semibold">Formulario</h3>
              <form method="POST" action="/api/contact" className="mt-4 space-y-3">
                <input
                  name="name"
                  placeholder="Nombre"
                  className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-black/30"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-black/30"
                  required
                />
                <input
                  name="company"
                  placeholder="Empresa (opcional)"
                  className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-black/30"
                />
                <textarea
                  name="message"
                  placeholder="¿Qué querés integrar o mejorar?"
                  className="h-28 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-black/30"
                  required
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[var(--ink)] px-4 py-3 text-sm font-medium text-[var(--paper)] hover:bg-black"
                >
                  Enviar
                </button>
              </form>
              <p className="mt-3 text-xs text-[var(--muted)]">Por ahora guarda el mensaje en logs.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Solvex</div>
          <div className="flex gap-4">
            <a className="hover:text-[var(--ink)]" href="#servicios">Servicios</a>
            <a className="hover:text-[var(--ink)]" href="#propuesta">Propuesta</a>
            <a className="hover:text-[var(--ink)]" href="#inicio">Cómo empezamos</a>
            <a className="hover:text-[var(--ink)]" href="#productos">Productos</a>
            <a className="hover:text-[var(--ink)]" href="#proceso">Proceso</a>
            <a className="hover:text-[var(--ink)]" href="#resultados">Resultados</a>
            <a className="hover:text-[var(--ink)]" href="#contacto">Contacto</a>
          </div>
        </div>
      </footer>

      <Link
        href={waHref}
        target="_blank"
        className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-3 text-sm font-medium text-[var(--paper)] shadow-soft hover:bg-black"
        aria-label="WhatsApp Solvex"
      >
        WhatsApp
      </Link>
    </main>
  );
}
