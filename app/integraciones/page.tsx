import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SectionTitle } from "../components/SectionTitle";
import { WhatsAppFab } from "../components/WhatsAppFab";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Integraciones y desarrollo a medida",
  description:
    "Conectamos ERP, CRM, eCommerce, logística y data. Servicios de desarrollo, integraciones críticas, APIs, eventos y observabilidad operativa.",
  alternates: { canonical: "/integraciones" },
  openGraph: {
    title: "Solvex · Integraciones y desarrollo a medida",
    description:
      "Implementamos integraciones críticas y plataformas a medida con SLA, observabilidad y entregas medibles.",
    url: "/integraciones",
  },
};

const WA_TEXT =
  "Hola! Quiero hablar sobre integraciones / desarrollo a medida con Solvex.";

const CAPABILITIES = [
  {
    title: "Integraciones críticas",
    desc:
      "APIs REST/GraphQL, gRPC, webhooks, colas y eventos con outbox, idempotencia y retries.",
  },
  {
    title: "ERP / CRM / eCommerce",
    desc:
      "SAP, Odoo, NetSuite, Tango, Salesforce, HubSpot, Shopify, VTEX, Tiendanube, Magento.",
  },
  {
    title: "Logística y pagos",
    desc:
      "Andreani, OCA, Correo Argentino, Mercado Pago, Stripe, conciliaciones y reportes.",
  },
  {
    title: "Data & observabilidad",
    desc:
      "ETL/ELT, BigQuery, dbt, dashboards accionables, métricas, trazas y alertas con SLA.",
  },
  {
    title: "Plataformas a medida",
    desc:
      "Servicios Go/Node sobre Postgres, Kafka, Centrifugo y arquitecturas hexagonales.",
  },
  {
    title: "Cloud & DevOps",
    desc:
      "GCP/AWS, Cloud Run, Kubernetes, Terraform, GitHub Actions, secret management.",
  },
];

const STACK = [
  "Go",
  "Node / TypeScript",
  "Next.js",
  "PostgreSQL",
  "BigQuery",
  "Kafka",
  "Redis",
  "Firestore",
  "Docker",
  "Kubernetes",
  "Terraform",
  "OpenTelemetry",
  "GCP",
  "AWS",
];

const PROCESS = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Mapeo de sistemas, dolores y quick wins. Roadmap priorizado por impacto.",
  },
  {
    n: "02",
    title: "Diseño",
    desc: "Arquitectura, contratos de datos y plan de entrega por sprints.",
  },
  {
    n: "03",
    title: "Implementación",
    desc: "Iteraciones cortas con QA, observabilidad y entregas visibles cada 2-3 semanas.",
  },
  {
    n: "04",
    title: "Go-live & soporte",
    desc: "Monitoreo 24/7, runbooks, mejoras continuas y handover real.",
  },
];

const PLANS = [
  {
    title: "Diagnóstico puntual",
    desc: "Para alinear objetivos y destrabar un cuello urgente.",
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
];

const CASES = [
  {
    title: "Marketplace omnicanal",
    desc: "ERP + eCommerce + logística sincronizados con visibilidad minuto a minuto.",
    impact: "Tiempo de despacho -32%",
  },
  {
    title: "Industria B2B",
    desc: "Facturación recurrente, aprobaciones y KPIs consolidados para ventas.",
    impact: "Ciclo de cobro -18%",
  },
  {
    title: "Retail especializado",
    desc: "Datos unificados de tiendas físicas y online para optimizar inventario.",
    impact: "Quiebres -41%",
  },
];

export default function IntegracionesPage() {
  const waHref = whatsappLink(WA_TEXT);

  return (
    <main className="relative min-h-screen text-[var(--ink)]">
      <Header />

      <section className="relative overflow-hidden border-b border-black/5">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
          <div className="absolute right-8 top-16 h-64 w-64 rounded-full bg-[var(--mint)]/12 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
          <div className="animate-reveal">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-[var(--muted)]">
              Integraciones · Desarrollo a medida · Operaciones críticas
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Integraciones y plataformas a medida que aguantan producción.
            </h1>
            <p className="mt-4 text-base text-[var(--muted)] md:text-lg">
              Conectamos tu stack actual con APIs, eventos y data confiable. Equipo senior
              con experiencia en operaciones críticas: ERP, CRM, eCommerce, logística,
              pagos y data.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--ink)] px-4 py-3 text-sm font-medium text-[var(--paper)] hover:bg-black"
              >
                Coordinar diagnóstico
              </Link>
              <Link
                href={waHref}
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-medium hover:bg-white"
              >
                Escribinos por WhatsApp
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-[var(--muted)]">
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                Entregas en 2-4 semanas
              </span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                SLA y monitoreo
              </span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                Migraciones sin corte
              </span>
            </div>
          </div>

          <div className="animate-reveal rounded-[28px] border border-black/10 bg-[var(--paper)] p-6 shadow-soft">
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <p className="text-sm font-medium text-[var(--ink)]">Capacidades clave</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                <li>• Conectar ERP ↔ CRM ↔ eCommerce ↔ logística</li>
                <li>• Consolidar data para BI y reporting operativo</li>
                <li>• Automatizar aprobaciones, conciliaciones y alertas</li>
                <li>• Modernizar servicios sin cortar la operación</li>
              </ul>
            </div>
            <div className="mt-4 rounded-2xl border border-black/10 bg-white p-5">
              <p className="text-sm font-medium text-[var(--ink)]">Stack</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {STACK.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-black/10 px-3 py-1 text-[var(--muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Capacidades"
            title="Hacemos que tus sistemas trabajen juntos"
            subtitle="Cada capacidad con ownership claro, observabilidad y SLA."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {CAPABILITIES.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Proceso"
            title="Delivery por hitos, sin sorpresas"
            subtitle="Alcance claro, seguimiento y handover en cada etapa."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {PROCESS.map((p) => (
              <div
                key={p.n}
                className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6"
              >
                <div className="text-xs font-medium text-[var(--muted)]">{p.n}</div>
                <div className="mt-2 text-base font-semibold">{p.title}</div>
                <div className="mt-2 text-sm text-[var(--muted)]">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Modalidades"
            title="Tres formas de empezar"
            subtitle="Elegimos juntos el formato según tu urgencia y alcance."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.title}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft"
              >
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
        </div>
      </section>

      <section className="border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Casos"
            title="Cómo se ve el impacto en operaciones reales"
            subtitle="Historias típicas basadas en implementaciones recientes."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {CASES.map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft"
              >
                <h3 className="text-lg font-semibold text-[var(--ink)]">{c.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{c.desc}</p>
                <p className="mt-4 text-sm font-semibold text-[var(--ink)]">{c.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-soft md:flex md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--ink)]">Primer paso</p>
              <p className="mt-2 text-sm text-[var(--muted)] md:max-w-xl">
                Un diagnóstico corto para alinear objetivos, tiempos y riesgos antes de
                construir. Sin compromisos.
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row md:mt-0">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--ink)] px-4 py-3 text-sm font-medium text-[var(--paper)] hover:bg-black"
              >
                Agendar diagnóstico
              </Link>
              <Link
                href={waHref}
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-[var(--paper)] px-4 py-3 text-sm font-medium hover:bg-white"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab text={WA_TEXT} />
    </main>
  );
}
