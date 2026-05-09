import Link from "next/link";
import { ScrollEffects } from "./components/ScrollEffects";
import { ContactForm } from "./components/ContactForm";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SectionTitle } from "./components/SectionTitle";
import { WhatsAppFab } from "./components/WhatsAppFab";
import { DEFAULT_WA_TEXT, whatsappLink } from "@/lib/site";

export default function Home() {
  const waHref = whatsappLink(DEFAULT_WA_TEXT);

  return (
    <main className="relative min-h-screen text-[var(--ink)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
        <div className="absolute right-8 top-32 h-64 w-64 rounded-full bg-[var(--mint)]/12 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-amber-200/30 blur-[90px]" />
        <div className="grain absolute inset-0" />
      </div>

      <Header />

      <section id="inicio" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="animate-reveal">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-[var(--muted)]">
              Software propio · Integraciones · Operaciones críticas
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Productos propios e integraciones para que tu negocio opere con claridad y control.
            </h1>
            <p className="mt-4 text-base text-[var(--muted)] md:text-lg">
              Combinamos productos SaaS de Solvex con desarrollo a medida. Roadmap claro,
              riesgos controlados y entregas medibles desde la primera iteración.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#productos"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--ink)] px-4 py-3 text-sm font-medium text-[var(--paper)] hover:bg-black"
              >
                Ver productos
              </Link>
              <Link
                href="/integraciones"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-medium hover:bg-white"
              >
                Servicios de integración
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-[var(--muted)]">
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                Productos SaaS multi-tenant
              </span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                Integraciones críticas
              </span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                SLA y monitoreo
              </span>
            </div>
          </div>

          <div className="animate-reveal rounded-[28px] border border-black/10 bg-[var(--paper)] p-6 shadow-soft">
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <p className="text-sm font-medium text-[var(--ink)]">Lo que resolvemos</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                <li>• Captura y gestión de gastos con AFIP, FX y OCR</li>
                <li>• Operación integral de instituciones educativas</li>
                <li>• Conectar ERP ↔ CRM ↔ eCommerce ↔ logística</li>
                <li>• Modernizar servicios sin cortar la operación</li>
              </ul>
              <p className="mt-5 text-xs text-[var(--muted)]">Productos propios + servicios.</p>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                { label: "Tiempo de entrega", value: "2-4 semanas" },
                { label: "Quick wins", value: "Primera iteración" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-black/10 bg-white p-4 text-sm"
                >
                  <div className="text-xs text-[var(--muted)]">{item.label}</div>
                  <div className="mt-2 text-base font-semibold text-[var(--ink)]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="productos" className="border-t border-black/5 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <SectionTitle
            kicker="Productos"
            title="SaaS propios listos para tu organización"
            subtitle="Productos comerciales de Solvex, multi-tenant y white-label."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Link
              href="/productos/expenseflow"
              className="group rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(37,32,26,0.4)] md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs text-[var(--muted)]">
                  Producto
                </span>
                <span className="text-sm text-[var(--muted)] transition group-hover:translate-x-1">
                  →
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--ink)]">
                Solvex ExpenseFlow
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Captura y gestión de gastos para empresas argentinas. Lookup AFIP, FX,
                OCR de comprobantes y captura desde web, mobile y WhatsApp.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                <li>• Identidad fiscal AR completa (CAE, IVA, punto de venta)</li>
                <li>• Pipeline barcode/QR → OCR → prefill</li>
                <li>• Multi-tenant con branding propio</li>
              </ul>
            </Link>

            <Link
              href="/productos/for-education"
              className="group rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(37,32,26,0.4)] md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs text-[var(--muted)]">
                  Producto
                </span>
                <span className="text-sm text-[var(--muted)] transition group-hover:translate-x-1">
                  →
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--ink)]">
                Solvex for Education
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Education Operating System para colegios privados. Académico,
                comunicaciones, finanzas, legajo, mobile e integraciones SInIDE/Acadeu.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                <li>• 14 suites integradas, modulares por suscripción</li>
                <li>• Apps mobile para familias, alumnos y docentes</li>
                <li>• Reporting oficial y omnicanalidad de comunicación</li>
              </ul>
            </Link>
          </div>

          <div className="mt-8 rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft md:flex md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--ink)]">
                ¿No sos colegio ni estás midiendo gastos?
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                También hacemos integraciones, plataformas a medida y modernización de
                operaciones críticas.
              </p>
            </div>
            <Link
              href="/integraciones"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-[var(--ink)] px-4 py-3 text-sm font-medium text-[var(--paper)] hover:bg-black md:mt-0"
            >
              Ver integraciones y desarrollo
            </Link>
          </div>
        </div>
      </section>

      <section id="experiencia" className="border-t border-black/5 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Experiencia"
            title="Cómo trabajamos cada implementación"
            subtitle="Secciones inmersivas para transmitir claridad, foco y progreso."
          />
        </div>

        <ScrollEffects />

        <div className="scroll-stage mx-auto max-w-6xl space-y-10 px-4 pb-20">
          {[
            {
              title: "Mapa vivo de sistemas",
              desc:
                "Visualizamos todo el ecosistema con mapas dinámicos, ownership claro y prioridades visibles.",
              items: ["Inventario conectado", "Riesgos detectados", "Roadmap compartido"],
              accent: "from-amber-200/70 via-white to-white",
              stat: "120+ endpoints mapeados",
            },
            {
              title: "Ejecución en capas",
              desc:
                "Cada sprint desbloquea operaciones más rápidas, con entregas parciales que suman valor real.",
              items: ["Conectores críticos", "Automatización de flujos", "QA operativo"],
              accent: "from-emerald-100/80 via-white to-white",
              stat: "3 entregas visibles al mes",
            },
            {
              title: "Control en tiempo real",
              desc:
                "Observabilidad aplicada para que tu equipo tome decisiones con datos confiables.",
              items: ["Dashboards accionables", "Alertas inteligentes", "Trazas auditables"],
              accent: "from-sky-100/90 via-white to-white",
              stat: "SLA monitoreado 24/7",
            },
          ].map((panel) => (
            <div key={panel.title} className="scroll-step">
              <div className={`scroll-panel bg-gradient-to-br ${panel.accent}`}>
                <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                  <div>
                    <p className="text-xs font-medium text-[var(--muted)]">
                      Scroll experience
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[var(--ink)] md:text-3xl">
                      {panel.title}
                    </h3>
                    <p className="mt-3 text-sm text-[var(--muted)] md:text-base">
                      {panel.desc}
                    </p>
                    <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                      {panel.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
                    <p className="text-xs font-medium text-[var(--muted)]">Indicador clave</p>
                    <p className="mt-3 text-3xl font-semibold text-[var(--ink)]">
                      {panel.stat}
                    </p>
                    <div className="mt-6 space-y-3 text-xs text-[var(--muted)]">
                      <div className="flex items-center justify-between rounded-full border border-black/10 bg-[var(--paper)] px-4 py-2">
                        <span>Avance del stack</span>
                        <span className="font-semibold text-[var(--ink)]">+18%</span>
                      </div>
                      <div className="flex items-center justify-between rounded-full border border-black/10 bg-[var(--paper)] px-4 py-2">
                        <span>Integraciones vivas</span>
                        <span className="font-semibold text-[var(--ink)]">21</span>
                      </div>
                      <div className="flex items-center justify-between rounded-full border border-black/10 bg-[var(--paper)] px-4 py-2">
                        <span>Alertas gestionadas</span>
                        <span className="font-semibold text-[var(--ink)]">0 incidentes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="propuesta" className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Propuesta"
            title="Una propuesta de valor clara y medible"
            subtitle="Productos propios + integraciones para que la operación tenga control, visibilidad y ritmo."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold text-[var(--ink)]">Lo que entregamos</p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Productos SaaS propios",
                    desc: "ExpenseFlow y for Education listos para producción.",
                  },
                  {
                    title: "Integraciones a medida",
                    desc: "ERP, CRM, eCommerce, pagos y logística conectados.",
                  },
                  {
                    title: "Observabilidad",
                    desc: "Métricas, trazas y alertas accionables.",
                  },
                  {
                    title: "Arquitectura escalable",
                    desc: "Servicios listos para crecer sin deuda.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-black/10 bg-[var(--paper)] p-4"
                  >
                    <div className="text-sm font-semibold text-[var(--ink)]">
                      {item.title}
                    </div>
                    <div className="mt-2 text-xs text-[var(--muted)]">{item.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-black/10 bg-[var(--paper)] p-4 text-sm text-[var(--muted)]">
                Entrega con documentación viva y handover real: diagramas, runbooks y
                ownership claro.
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
              <div
                key={r.label}
                className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6 text-center shadow-soft"
              >
                <div className="text-3xl font-semibold text-[var(--ink)]">{r.value}</div>
                <div className="mt-2 text-sm text-[var(--muted)]">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="casos" className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Casos reales"
            title="Cómo se ve la transformación en operaciones reales"
            subtitle="Historias típicas basadas en implementaciones recientes."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Marketplace omnicanal",
                desc:
                  "ERP + eCommerce + logística sincronizados con visibilidad minuto a minuto.",
                impact: "Tiempo de despacho -32%",
                items: ["Integración de stock", "Ruteo automatizado", "Reportes por canal"],
              },
              {
                title: "Industria B2B",
                desc:
                  "Facturación recurrente, aprobaciones y KPIs consolidados para ventas.",
                impact: "Ciclo de cobro -18%",
                items: ["Workflows de aprobación", "Conectores CRM", "Forecast en tiempo real"],
              },
              {
                title: "Retail especializado",
                desc:
                  "Unificamos datos de tiendas físicas y online para optimizar inventario.",
                impact: "Quiebres -41%",
                items: [
                  "Inventario centralizado",
                  "Alertas de reposición",
                  "Analítica operativa",
                ],
              },
            ].map((caseItem) => (
              <div
                key={caseItem.title}
                className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft"
              >
                <h3 className="text-lg font-semibold text-[var(--ink)]">{caseItem.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{caseItem.desc}</p>
                <p className="mt-4 text-sm font-semibold text-[var(--ink)]">
                  {caseItem.impact}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  {caseItem.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="FAQ"
            title="Respuestas rápidas para equipos que quieren acelerar"
            subtitle="Anticipamos preguntas sobre tiempos, alcance y tecnología."
          />

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {[
              {
                q: "¿Cuánto tarda una integración crítica?",
                a: "Entre 2 y 4 semanas dependiendo del stack y la complejidad de los flujos.",
              },
              {
                q: "¿Podemos empezar con un piloto?",
                a: "Sí. Definimos un flujo clave, lo integramos y medimos impacto en el primer sprint.",
              },
              {
                q: "¿Los productos son SaaS o on-premise?",
                a: "Nuestros productos son SaaS multi-tenant en GCP, con opción white-label y dominio propio por cliente.",
              },
              {
                q: "¿Cómo se mide el éxito?",
                a: "Con métricas de operación: tiempos de ciclo, errores, SLA y velocidad de entrega.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-[var(--ink)]">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="text-[var(--muted)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-[var(--muted)]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="border-t border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Contacto"
            title="Contanos qué necesitás"
            subtitle="WhatsApp para ir rápido o dejá el formulario."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft">
              <h3 className="text-lg font-semibold">Escribinos</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Contanos qué producto te interesa o qué querés integrar (ERP, CRM, stock,
                ventas, logística).
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
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
