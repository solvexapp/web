import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionTitle } from "../../components/SectionTitle";
import { WhatsAppFab } from "../../components/WhatsAppFab";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solvex ExpenseFlow · Gestión de gastos multi-tenant",
  description:
    "Captura y gestión de gastos para empresas argentinas. Lookup AFIP, FX, OCR de comprobantes, web + mobile + WhatsApp, y administración multi-tenant.",
  alternates: { canonical: "/productos/expenseflow" },
  openGraph: {
    title: "Solvex ExpenseFlow",
    description:
      "Gestión de gastos con lookup AFIP, FX, OCR y captura desde web, mobile y WhatsApp.",
    url: "/productos/expenseflow",
  },
};

const WA_TEXT =
  "Hola! Quiero conocer Solvex ExpenseFlow para mi empresa.";

const PILLARS = [
  {
    title: "Captura sin fricción",
    desc:
      "Carga desde web, mobile y WhatsApp. Foto, PDF o galería: el comprobante se procesa solo.",
  },
  {
    title: "Identidad fiscal AR",
    desc:
      "Lookup AFIP por CUIT, alta automática de proveedores y validación de duplicados por punto de venta + número.",
  },
  {
    title: "FX integrado",
    desc:
      "Cotizaciones por proveedor y tipo, monedas por tenant y conversión sugerida en cada gasto.",
  },
  {
    title: "Multi-tenant white-label",
    desc:
      "Branding por tenant, dominios propios, administración platform y por organización.",
  },
];

const FEATURES = [
  {
    group: "Gastos",
    items: [
      "Drafts con monto, fecha, proveedor, categoría, allocation, medio de pago, tags, notas",
      "Identidad fiscal del comprobante: tipo, punto de venta, número, CAE, IVA y desgloses",
      "Validación automática de duplicados por proveedor + comprobante",
      "Adjuntos: imagen, PDF, cámara o archivo, con preview y reemplazo",
      "Eventos en tiempo real (SSE) sobre el estado del gasto y el procesamiento",
    ],
  },
  {
    group: "Comprobantes",
    items: [
      "Pipeline barcode/QR → OCR → prefill automático",
      "Cloud Vision opcional para PDFs escaneados",
      "Materialización automática de monto, fecha, proveedor y datos fiscales",
      "Lookup AFIP en alta contextual de proveedor",
      "Resolución asistida con IA cuando faltan señales base",
    ],
  },
  {
    group: "Catálogos por tenant",
    items: [
      "Tipos de medio de pago e instrumentos (tarjetas, cuentas, efectivo)",
      "Allocation targets para imputación contable o por proyecto",
      "Categorías y tags de gastos",
      "Maestro de proveedores con datos fiscales AFIP",
      "Monedas habilitadas y preferencias FX",
    ],
  },
  {
    group: "Plataforma",
    items: [
      "Auth multi-tenant con access + refresh, switch de tenant",
      "Memberships, invitaciones, reset y cambio de email",
      "Branding del tenant: logo, colores, dominio",
      "Consola platform admin y consola tenant admin",
      "Identidades vinculables (WhatsApp) desde perfil",
    ],
  },
  {
    group: "Experiencia",
    items: [
      "Web Next.js 16 + Tamagui + React 19",
      "Mobile Expo / React Native con cámara, galería y archivo",
      "Bot de WhatsApp para captura conversacional",
      "Pantallas de cotizaciones y administración",
    ],
  },
  {
    group: "Operación",
    items: [
      "GCP: Cloud Run, Cloud SQL, GCS, Firestore, Secret Manager",
      "Worker dedicado para barcode, OCR e enriquecimiento AFIP",
      "Realtime con Firestore como read-model y SSE en backend",
      "Terraform e CI/CD en GitHub Actions",
      "Auditoría y trazabilidad operativa",
    ],
  },
];

const FOR_WHO = [
  {
    title: "Empresas con multi-entidad",
    desc:
      "Holding, grupos económicos o estructuras con varias razones sociales que necesitan separar gastos por entidad.",
  },
  {
    title: "Equipos administrativos",
    desc:
      "Captura sin papel, validación de comprobantes fiscales y conciliación más simple a fin de mes.",
  },
  {
    title: "Operaciones en campo",
    desc:
      "Vendedores, técnicos y supervisores que cargan gastos desde el celular o WhatsApp en el momento.",
  },
];

const FAQS = [
  {
    q: "¿Funciona con AFIP?",
    a: "Sí. Hace lookup por CUIT con `ws_sr_constancia_inscripcion`, alta automática de proveedores y persiste condición fiscal, domicilio y metadatos AFIP.",
  },
  {
    q: "¿Qué hace con el comprobante?",
    a: "Detecta barcode/QR, hace OCR con fallback local y Cloud Vision opcional, infiere identidad fiscal y completa el gasto. La IA entra solo cuando faltan datos.",
  },
  {
    q: "¿Puedo brandearlo con mi marca?",
    a: "Sí. ExpenseFlow es multi-tenant white-label: logo, colores y dominio por organización.",
  },
  {
    q: "¿Cómo se integra con mi ERP?",
    a: "Vía API y eventos. Tenemos catálogos configurables (categorías, allocations, medios de pago) que mapean a tu plan de cuentas.",
  },
];

export default function ExpenseFlowPage() {
  const waHref = whatsappLink(WA_TEXT);

  return (
    <main className="relative min-h-screen text-[var(--ink)]">
      <Header />

      <section className="relative overflow-hidden border-b border-black/5">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[var(--mint)]/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
          <div className="animate-reveal">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-[var(--muted)]">
              Producto · ExpenseFlow · Gestión de gastos
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Gastos sin papel, sin planillas y sin pelearte con AFIP.
            </h1>
            <p className="mt-4 text-base text-[var(--muted)] md:text-lg">
              Solvex ExpenseFlow captura, valida y consolida los gastos de tu empresa.
              Lookup AFIP, FX, OCR de comprobantes y captura desde web, mobile y
              WhatsApp. Multi-tenant y white-label.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--ink)] px-4 py-3 text-sm font-medium text-[var(--paper)] hover:bg-black"
              >
                Pedir demo
              </Link>
              <Link
                href={waHref}
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-medium hover:bg-white"
              >
                Hablar por WhatsApp
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-[var(--muted)]">
              <div className="rounded-2xl border border-black/10 bg-white/70 p-3 text-center">
                <div className="text-base font-semibold text-[var(--ink)]">AR</div>
                <div className="mt-1">AFIP & moneda</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 p-3 text-center">
                <div className="text-base font-semibold text-[var(--ink)]">3 canales</div>
                <div className="mt-1">Web · Mobile · WhatsApp</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 p-3 text-center">
                <div className="text-base font-semibold text-[var(--ink)]">Multi-tenant</div>
                <div className="mt-1">White-label</div>
              </div>
            </div>
          </div>

          <div className="animate-reveal">
            <div className="rounded-[28px] border border-black/10 bg-[var(--paper)] p-6 shadow-soft">
              <div className="rounded-2xl border border-black/10 bg-white p-5">
                <p className="text-xs font-medium text-[var(--muted)]">Pipeline de comprobante</p>
                <ol className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                  <li>
                    <span className="font-medium text-[var(--ink)]">1.</span> Foto, PDF o
                    archivo desde web, mobile o WhatsApp.
                  </li>
                  <li>
                    <span className="font-medium text-[var(--ink)]">2.</span> Detección
                    barcode/QR del comprobante AFIP.
                  </li>
                  <li>
                    <span className="font-medium text-[var(--ink)]">3.</span> OCR opcional
                    sobre PDFs escaneados (Cloud Vision).
                  </li>
                  <li>
                    <span className="font-medium text-[var(--ink)]">4.</span> Lookup AFIP
                    del CUIT y alta de proveedor.
                  </li>
                  <li>
                    <span className="font-medium text-[var(--ink)]">5.</span> Prefill
                    automático del gasto, listo para revisar.
                  </li>
                </ol>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-white p-4 text-sm">
                  <div className="text-xs text-[var(--muted)]">Tiempo de carga</div>
                  <div className="mt-2 text-base font-semibold text-[var(--ink)]">
                    {"<"} 30 seg
                  </div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4 text-sm">
                  <div className="text-xs text-[var(--muted)]">Validación</div>
                  <div className="mt-2 text-base font-semibold text-[var(--ink)]">
                    Tiempo real
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Pilares"
            title="Lo que hace distinto a ExpenseFlow"
            subtitle="Pensado para la operación argentina, no traducido."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft"
              >
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Capacidades"
            title="Todo lo que ya está implementado"
            subtitle="ExpenseFlow es producto operativo, no roadmap."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((group) => (
              <div
                key={group.group}
                className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft"
              >
                <h3 className="text-base font-semibold text-[var(--ink)]">{group.group}</h3>
                <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Para quién"
            title="A quién le sirve ExpenseFlow"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {FOR_WHO.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft"
              >
                <h3 className="text-base font-semibold text-[var(--ink)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle kicker="FAQ" title="Preguntas frecuentes" />
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-[var(--ink)]">
                  <span className="flex items-center justify-between gap-4">
                    {faq.q}
                    <span className="text-[var(--muted)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-[var(--muted)]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-soft md:flex md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--ink)]">
                ¿Querés ver ExpenseFlow funcionando?
              </p>
              <p className="mt-2 text-sm text-[var(--muted)] md:max-w-xl">
                Te mostramos el flujo completo de captura, AFIP y FX en una demo en vivo
                de 20 minutos.
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row md:mt-0">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--ink)] px-4 py-3 text-sm font-medium text-[var(--paper)] hover:bg-black"
              >
                Pedir demo
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
