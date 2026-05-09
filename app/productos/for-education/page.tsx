import Link from "next/link";
import type { Metadata } from "next";
import { DEFAULT_WA_TEXT, whatsappLink } from "@/lib/site";
import { EduDemo } from "./_components/EduDemo";
import { EduRoi } from "./_components/EduRoi";
import { EduFaq } from "./_components/EduFaq";
import { AVATAR_CLASSES, STUDENTS } from "./_components/students";

export const metadata: Metadata = {
  title: "Solvex for Education · Education Operating System",
  description:
    "Plataforma integral para colegios privados: académico, asistencia, comunicaciones, finanzas, legajo, integraciones SInIDE/Acadeu y mobile para familias y docentes.",
  alternates: { canonical: "/productos/for-education" },
  openGraph: {
    title: "Solvex for Education",
    description:
      "Education Operating System para instituciones privadas: académico, comunicaciones, finanzas e integraciones.",
    url: "/productos/for-education",
  },
};

const WA_TEXT =
  "Hola! Quiero conocer Solvex for Education para mi institución.";

export default function ForEducationPage() {
  return (
    <div
      className="min-h-screen bg-[var(--edu-bg)] text-[var(--edu-ink)]"
      style={{ fontFamily: "var(--font-display)" }}
    >
      <EduNav />
      <EduHero />
      <EduLogoStrip />
      <EduComparison />
      <EduPillars />
      <EduSuites />
      <EduStackStrip />
      <EduDemoSection />
      <EduRoiSection />
      <EduCases />
      <EduFaqSection />
      <EduCtaFinal />
      <EduFooter />
    </div>
  );
}

/* ---------------- Nav ---------------- */

const NAV_LINKS = [
  { href: "#producto", label: "Producto" },
  { href: "#suites", label: "Suites" },
  { href: "#casos", label: "Casos" },
  { href: "#roi", label: "ROI" },
  { href: "#faq", label: "FAQ" },
];

function EduNav() {
  const waHref = whatsappLink(WA_TEXT);
  return (
    <nav className="sticky top-0 z-50 border-b-[0.5px] border-[var(--edu-line)] bg-[rgba(8,9,10,0.72)] backdrop-blur-[14px]">
      <div className="mx-auto flex h-[60px] max-w-[1180px] items-center justify-between px-4 md:px-7">
        <Link href="/" className="flex items-center gap-2 text-[15px] font-semibold tracking-[-0.02em]">
          <span className="grid h-[22px] w-[22px] place-items-center rounded-[5px] bg-gradient-to-br from-[var(--edu-accent)] to-[var(--edu-accent-2)] text-[12px] font-bold text-[#001A12]">
            S
          </span>
          <span>Solvex</span>
        </Link>
        <div className="hidden gap-7 text-[13.5px] text-[var(--edu-ink-2)] md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[var(--edu-ink)]">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={waHref}
            target="_blank"
            className="hidden rounded-[7px] border-[0.5px] border-[var(--edu-line-2)] px-3 py-[7px] text-[13px] text-[var(--edu-ink-2)] transition hover:border-[var(--edu-ink-3)] hover:text-[var(--edu-ink)] sm:inline-flex"
          >
            WhatsApp
          </Link>
          <a
            href="#contacto"
            className="rounded-[7px] bg-[var(--edu-ink)] px-3 py-[7px] text-[13px] font-medium text-[#0A0A0B] transition hover:-translate-y-px hover:bg-white"
          >
            Pedir demo
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ---------------- Hero ---------------- */

function EduHero() {
  return (
    <section
      id="producto"
      className="relative overflow-hidden border-b-[0.5px] border-[var(--edu-line)] px-4 py-16 md:px-7 md:py-24"
    >
      <div className="edu-grid-bg pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute -top-[200px] left-1/2 h-[600px] w-[800px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(93,202,165,0.10) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 md:grid-cols-[1.05fr_1fr] md:gap-16">
        <div>
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border-[0.5px] border-[rgba(93,202,165,0.2)] bg-[rgba(93,202,165,0.06)] py-[5px] pl-[7px] pr-[11px] font-[family-name:var(--font-edu-mono)] text-[12px] tracking-[-0.01em] text-[var(--edu-accent)]">
            <span className="edu-pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--edu-accent)]" />
            for Education · v2.4 disponible
          </span>
          <h1 className="mb-6 text-[42px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[64px]">
            El sistema operativo
            <br />
            de tu institución{" "}
            <em className="font-[family-name:var(--font-serif)] font-normal italic tracking-[-0.02em]">
              educativa.
            </em>
          </h1>
          <p className="mb-9 max-w-[520px] text-[17px] leading-[1.55] text-[var(--edu-ink-2)]">
            Académico, asistencia, comunicaciones, finanzas y reporting oficial en una sola
            plataforma. Pensado para colegios privados que quieren operar mejor sin sumar
            diez apps sueltas.
          </p>
          <div className="mb-10 flex flex-wrap gap-2.5">
            <a
              href="#contacto"
              className="rounded-lg bg-[var(--edu-ink)] px-5 py-[11px] text-[14px] font-medium text-[#0A0A0B] transition hover:-translate-y-px hover:bg-white"
            >
              Pedir demo →
            </a>
            <a
              href="#demo"
              className="rounded-lg border-[0.5px] border-[var(--edu-line-2)] px-5 py-[11px] text-[14px] font-medium text-[var(--edu-ink-2)] transition hover:border-[var(--edu-ink-3)] hover:text-[var(--edu-ink)]"
            >
              Ver el producto
            </a>
          </div>
          <div className="flex gap-8 border-t-[0.5px] border-[var(--edu-line)] pt-7">
            <Stat num="14" label="Suites integradas" />
            <Stat num="SInIDE" label="Reporting nativo" />
            <Stat num="3 apps" label="Familia · Alumno · Docente" />
          </div>
        </div>

        <EduDeviceMockup />
      </div>
    </section>
  );
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div className="font-[family-name:var(--font-edu-mono)] text-[22px] font-medium leading-none tracking-[-0.02em] text-[var(--edu-ink)]">
        {num}
      </div>
      <div className="mt-1.5 text-[12px] tracking-[0.01em] text-[var(--edu-ink-3)]">
        {label}
      </div>
    </div>
  );
}

function EduDeviceMockup() {
  // Hero usa los primeros 5 alumnos del fixture, estático.
  const heroStudents = STUDENTS.slice(0, 5);
  return (
    <div className="relative overflow-hidden rounded-2xl border-[0.5px] border-[var(--edu-line-2)] bg-[var(--edu-bg-2)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="flex h-[34px] items-center gap-1.5 border-b-[0.5px] border-[var(--edu-line)] bg-[var(--edu-bg-3)] px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--edu-line-2)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--edu-line-2)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--edu-line-2)]" />
        <span className="flex-1 text-center font-[family-name:var(--font-edu-mono)] text-[11px] tracking-[-0.01em] text-[var(--edu-ink-3)]">
          colegio-belgrano.solvex.app/academico
        </span>
      </div>
      <div className="grid min-h-[340px] grid-cols-[130px_1fr] gap-3.5 p-4.5">
        <aside className="flex flex-col gap-0.5">
          <div className="mx-1 my-2.5 mb-1 text-[10px] font-medium uppercase tracking-[0.08em] text-[var(--edu-ink-3)]">
            Hoy
          </div>
          <SideLink active label="Asistencia">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </SideLink>
          <SideLink label="Libro de notas">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
            </svg>
          </SideLink>
          <SideLink label="Comunicaciones">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </SideLink>
          <div className="mx-1 my-2.5 mb-1 text-[10px] font-medium uppercase tracking-[0.08em] text-[var(--edu-ink-3)]">
            Gestión
          </div>
          <SideLink label="Cuenta corriente">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </SideLink>
          <SideLink label="SInIDE">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622" />
            </svg>
          </SideLink>
        </aside>
        <div>
          <div className="mb-3.5 flex items-center justify-between">
            <div className="text-[13px] font-medium tracking-[-0.01em]">
              5°A · Matemática{" "}
              <small className="ml-1.5 text-[11px] font-normal text-[var(--edu-ink-3)]">
                jueves 9 may
              </small>
            </div>
            <div className="flex gap-1">
              <span className="rounded bg-[var(--edu-bg-3)] px-1.5 py-0.5 font-[family-name:var(--font-edu-mono)] text-[10px] text-[var(--edu-ink-2)]">
                28 alumnos
              </span>
              <span className="rounded bg-[rgba(93,202,165,0.1)] px-1.5 py-0.5 font-[family-name:var(--font-edu-mono)] text-[10px] text-[var(--edu-accent)]">
                ● en vivo
              </span>
            </div>
          </div>
          <div>
            {heroStudents.map((s, idx) => {
              const isLast = idx === heroStudents.length - 1;
              return (
                <div
                  key={s.lu}
                  className={`grid grid-cols-[24px_1fr_36px_56px_30px] items-center gap-2.5 px-1.5 py-1.5 text-[11.5px] ${
                    isLast ? "" : "border-b-[0.5px] border-[var(--edu-line)]"
                  }`}
                >
                  <div
                    className={`grid h-[22px] w-[22px] place-items-center rounded-full text-[9px] font-semibold tracking-[-0.02em] ${AVATAR_CLASSES[s.avatar]}`}
                  >
                    {s.initials}
                  </div>
                  <div>
                    <div className="text-[var(--edu-ink)]">{s.name}</div>
                    <div className="font-[family-name:var(--font-edu-mono)] text-[10.5px] text-[var(--edu-ink-3)]">
                      5A · LU {s.lu}
                    </div>
                  </div>
                  <div className="text-right font-[family-name:var(--font-edu-mono)] text-[11px] text-[var(--edu-ink)]">
                    {s.grade}
                  </div>
                  <div>
                    {s.presence.map((p, i) => (
                      <span
                        key={i}
                        className={`mr-px inline-block h-[7px] w-[7px] rounded-[2px] ${
                          p === "P"
                            ? "bg-[var(--edu-accent)]"
                            : p === "A"
                            ? "bg-[#E24B4A]"
                            : "bg-[#EF9F27]"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-right">
                    <span
                      className={`rounded px-1.5 py-0.5 font-[family-name:var(--font-edu-mono)] text-[10px] ${
                        s.defaultMark === "P"
                          ? "bg-[rgba(93,202,165,0.1)] text-[var(--edu-accent)]"
                          : s.defaultMark === "A"
                          ? "bg-[rgba(226,75,74,0.1)] text-[var(--edu-danger-ink)]"
                          : "bg-[rgba(239,159,39,0.1)] text-[var(--edu-warning-ink)]"
                      }`}
                    >
                      {s.defaultMark}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function SideLink({
  active,
  label,
  children,
}: {
  active?: boolean;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className={`flex items-center gap-2 rounded-[5px] px-2 py-1.5 text-[12px] ${
        active
          ? "bg-[rgba(93,202,165,0.08)] text-[var(--edu-accent)]"
          : "text-[var(--edu-ink-2)]"
      }`}
    >
      <span className="h-3.5 w-3.5 shrink-0">{children}</span>
      {label}
    </a>
  );
}

/* ---------------- Logo strip ---------------- */

function EduLogoStrip() {
  return (
    <section className="border-b-[0.5px] border-[var(--edu-line)] px-4 py-9 md:px-7">
      {/* TODO: reemplazar por logos reales de instituciones cuando estén disponibles. */}
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-5.5 text-center text-[11.5px] font-medium uppercase tracking-[0.16em] text-[var(--edu-ink-3)]">
          Operando colegios privados en Argentina
        </div>
        <div className="grid grid-cols-3 items-center justify-items-center gap-5 opacity-55 md:grid-cols-5">
          <span className="font-[family-name:var(--font-serif)] text-[18px] italic tracking-[-0.01em] text-[var(--edu-ink-2)]">
            Colegio Belgrano
          </span>
          <span className="text-[15px] font-semibold uppercase tracking-[-0.02em] text-[var(--edu-ink-2)]">
            San Andrés
          </span>
          <span className="font-[family-name:var(--font-serif)] text-[18px] italic tracking-[-0.01em] text-[var(--edu-ink-2)]">
            Northfield School
          </span>
          <span className="hidden text-[15px] font-semibold uppercase tracking-[-0.02em] text-[var(--edu-ink-2)] md:inline">
            Inst. Cervantes
          </span>
          <span className="hidden font-[family-name:var(--font-serif)] text-[18px] italic tracking-[-0.01em] text-[var(--edu-ink-2)] md:inline">
            Sagrado Corazón
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Comparison + Pillars (light cremoso) ---------------- */

const COMPARE_BEFORE = [
  {
    head: "Asistencia en planillas Excel",
    body: "Una por curso, una por turno, ninguna sincronizada.",
  },
  {
    head: "Comunicaciones por WhatsApp informal",
    body: "Sin acuses, sin trazabilidad, padres que no se enteran.",
  },
  {
    head: "Carga manual a SInIDE",
    body: "40+ horas por trimestre re-tipeando datos que ya existen.",
  },
  {
    head: "Cobranza con saldos en planillas",
    body: "Sin alertas, sin escalamiento, deuda que crece silenciosa.",
  },
  {
    head: "Boletines en Word, uno por uno",
    body: "El cierre de notas se vuelve un trimestre dentro del trimestre.",
  },
];

const COMPARE_AFTER = [
  {
    head: "Asistencia desde la app del docente",
    body: "Toma 30 segundos. Familias notificadas en automático.",
  },
  {
    head: "Comunicaciones omnicanal con acuse",
    body: "Push, email, WhatsApp BSP, in-app. Sabés quién vio qué.",
  },
  {
    head: "Export a SInIDE en un click",
    body: "Mapping interno ↔ oficial automatizado. Cero re-tipeo.",
  },
  {
    head: "Cuenta corriente con cobranza inteligente",
    body: "Ageing, escalamiento y promesas de pago. Mercado Pago integrado.",
  },
  {
    head: "Boletines generados automáticamente",
    body: "Institucional y oficial. Cierre de trimestre en horas, no semanas.",
  },
];

function EduComparison() {
  return (
    <section className="bg-[var(--edu-light)] px-4 py-20 text-[var(--edu-light-ink)] md:px-7 md:py-30">
      <div className="mx-auto max-w-[1180px]">
        <span className="mb-4.5 inline-block rounded-full bg-[var(--edu-warm)] px-2.5 py-1 text-[12px] font-medium text-[var(--edu-warm-ink)]">
          El status quo
        </span>
        <h2 className="mb-4.5 max-w-[680px] text-[34px] font-medium leading-[1.04] tracking-[-0.035em] md:text-[46px]">
          Si tu equipo vive entre planillas, WhatsApp y{" "}
          <em className="font-[family-name:var(--font-serif)] font-normal italic tracking-[-0.015em]">
            doble carga
          </em>
          , hay otra forma.
        </h2>
        <p className="mb-14 max-w-[580px] text-[17px] leading-[1.55] text-[var(--edu-light-ink-2)]">
          El costo del status quo no se mide en licencias. Se mide en horas de secretaría
          académica, familias que no se enteran y deuda incobrable que crece sin que nadie
          la vea.
        </p>
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border-[0.5px] border-[var(--edu-light-line)] bg-white md:grid-cols-2">
          <CompareColumn
            tag="Antes"
            tagKind="bad"
            headline="Diez apps sueltas"
            items={COMPARE_BEFORE}
          />
          <CompareColumn
            tag="Con Solvex"
            tagKind="good"
            headline="Una plataforma"
            items={COMPARE_AFTER}
          />
        </div>
      </div>
    </section>
  );
}

function CompareColumn({
  tag,
  tagKind,
  headline,
  items,
}: {
  tag: string;
  tagKind: "bad" | "good";
  headline: string;
  items: { head: string; body: string }[];
}) {
  const tagClass =
    tagKind === "bad"
      ? "bg-[var(--edu-bad-bg)] text-[var(--edu-bad-ink)]"
      : "bg-[var(--edu-good-bg)] text-[var(--edu-good-ink)]";
  const isBefore = tagKind === "bad";
  const iconClass = tagClass;

  return (
    <div
      className={`relative px-8 py-9 ${
        isBefore
          ? "border-b-[0.5px] border-[var(--edu-light-line)] bg-[var(--edu-light-2)] md:border-b-0 md:border-r-[0.5px]"
          : "bg-white"
      }`}
    >
      <div className="mb-6 flex items-center gap-2.5 border-b-[0.5px] border-[var(--edu-light-line)] pb-4.5">
        <span className={`rounded px-2 py-[3px] text-[11px] font-medium uppercase tracking-[0.1em] ${tagClass}`}>
          {tag}
        </span>
        <span className="text-[18px] font-medium tracking-[-0.02em]">{headline}</span>
      </div>
      <div className="flex flex-col gap-3.5">
        {items.map((item) => (
          <div key={item.head} className="flex items-start gap-3 text-[14.5px] leading-[1.5]">
            <span className={`mt-px grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full text-[11px] font-semibold ${iconClass}`}>
              {isBefore ? "✕" : "✓"}
            </span>
            <div>
              {item.head}
              <small className="mt-0.5 block text-[13px] text-[var(--edu-light-ink-3)]">
                {item.body}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const PILLARS = [
  {
    num: "01 / Foundation",
    title: <><em>Education</em> Operating System</>,
    desc:
      "No es una app suelta: es la plataforma operativa completa de tu institución, integrada por capas. Identidad, branding, audit y multi-tenancy desde el día uno.",
  },
  {
    num: "02 / Académico",
    title: <>Académico <em>de verdad</em></>,
    desc:
      "Estructura curricular, asistencia, evaluación, libro de notas, boletines y mapping a sistemas oficiales. Sin atajos, sin compromisos pedagógicos.",
  },
  {
    num: "03 / Familias",
    title: <>Familias <em>conectadas</em></>,
    desc:
      "Comunicaciones omnicanal con acuses, hilos restringidos y portal familias. Cada padre se entera. Cada respuesta queda registrada.",
  },
  {
    num: "04 / Interoperable",
    title: <><em>Interoperable</em> por diseño</>,
    desc:
      "SInIDE, Acadeu, Google Workspace, Mercado Pago, Stripe, WhatsApp BSP. Integraciones de primera clase, no parches sobre parches.",
  },
];

function EduPillars() {
  return (
    <section className="bg-[var(--edu-light)] px-4 py-0 pb-20 text-[var(--edu-light-ink)] md:px-7 md:pb-30">
      <div className="mx-auto max-w-[1180px]">
        <span className="mb-4.5 inline-block rounded-full bg-[var(--edu-warm)] px-2.5 py-1 text-[12px] font-medium text-[var(--edu-warm-ink)]">
          Por qué somos distintos
        </span>
        <h2 className="mb-4.5 max-w-[680px] text-[34px] font-medium leading-[1.04] tracking-[-0.035em] md:text-[46px]">
          Una plataforma, no una{" "}
          <em className="font-[family-name:var(--font-serif)] font-normal italic tracking-[-0.015em]">
            colección de apps.
          </em>
        </h2>
        <p className="mb-14 max-w-[580px] text-[17px] leading-[1.55] text-[var(--edu-light-ink-2)]">
          Cuatro ideas rectoras que diferencian a for Education de cualquier sistema de
          gestión escolar tradicional.
        </p>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border-[0.5px] border-[var(--edu-light-line)] bg-[var(--edu-light-line)] md:grid-cols-2">
          {PILLARS.map((pillar) => (
            <div key={pillar.num} className="bg-white px-8 py-9">
              <div className="mb-3.5 font-[family-name:var(--font-edu-mono)] text-[12px] tracking-[0.04em] text-[var(--edu-light-ink-3)]">
                {pillar.num}
              </div>
              <div className="mb-2.5 text-[22px] font-medium leading-[1.15] tracking-[-0.025em] [&_em]:font-[family-name:var(--font-serif)] [&_em]:font-normal [&_em]:italic">
                {pillar.title}
              </div>
              <p className="text-[14.5px] leading-[1.6] text-[var(--edu-light-ink-2)]">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Suites grid ---------------- */

type Suite = {
  name: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
};

const SUITE_ICON_PROPS = {
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.8,
} as const;

const SUITES: Suite[] = [
  {
    name: "Institutional Core",
    desc: "Organigrama, sedes, áreas, estructura académica, personas y vínculos.",
    tags: ["Sedes", "Niveles", "Vínculos"],
    icon: (
      <svg {...SUITE_ICON_PROPS}>
        <path d="M3 21V8a2 2 0 012-2h14a2 2 0 012 2v13M3 21h18M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    name: "Student Management",
    desc: "Perfil, legajo completo con timeline, matrícula y vínculos familiares.",
    tags: ["Legajo", "Pickup", "Admisión"],
    icon: (
      <svg {...SUITE_ICON_PROPS}>
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    name: "Academic Core",
    desc: "Asistencia, evaluación, notas, boletines y reporting oficial SInIDE.",
    tags: ["Asistencia", "Notas", "SInIDE"],
    icon: (
      <svg {...SUITE_ICON_PROPS}>
        <path d="M12 6.253v13M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253" />
      </svg>
    ),
  },
  {
    name: "Wellbeing",
    desc: "Discipline, risk score, counseling, ficha médica y planes de seguimiento.",
    tags: ["Risk score", "Counseling", "Salud"],
    icon: (
      <svg {...SUITE_ICON_PROPS}>
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "Communications",
    desc: "Push, email, WhatsApp BSP, SMS, in-app. Engagement tracking real, no asumido.",
    tags: ["WhatsApp", "Acuses", "Hilos"],
    icon: (
      <svg {...SUITE_ICON_PROPS}>
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    name: "Forms & Signatures",
    desc: "Form builder, firma electrónica con OTP y plantillas documentales.",
    tags: ["OTP", "Versionado", "Constancias"],
    icon: (
      <svg {...SUITE_ICON_PROPS}>
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: "Teacher & Staff",
    desc: "Legajo docente, asignaciones, presentismo, suplencias y evaluación.",
    tags: ["Presentismo", "Suplencias"],
    icon: (
      <svg {...SUITE_ICON_PROPS}>
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "Financial",
    desc: "Aranceles, cuenta corriente, becas, cobranzas y proyecciones de cashflow.",
    tags: ["Cuenta cte.", "Becas", "Ageing"],
    icon: (
      <svg {...SUITE_ICON_PROPS}>
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1" />
      </svg>
    ),
  },
  {
    name: "Scheduling",
    desc: "Calendario, aulas, recursos físicos, reservas y sync con Google Calendar.",
    tags: ["Aulas", "Reservas", "Google"],
    icon: (
      <svg {...SUITE_ICON_PROPS}>
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Quality & ISO",
    desc: "Procesos, indicadores, no conformidades, encuestas y control documental.",
    tags: ["ISO", "KPIs"],
    icon: (
      <svg {...SUITE_ICON_PROPS}>
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946" />
      </svg>
    ),
  },
  {
    name: "Integrations",
    desc: "SInIDE, Acadeu, Google Workspace, MP, Stripe, WhatsApp BSP, webhooks.",
    tags: ["SInIDE", "MP", "Stripe"],
    icon: (
      <svg {...SUITE_ICON_PROPS}>
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "Analytics",
    desc: "Dashboards directivos, riesgo académico/financiero y alertas tempranas.",
    tags: ["Dashboards", "Riesgo"],
    icon: (
      <svg {...SUITE_ICON_PROPS}>
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    name: "Mobile",
    desc: "Apps nativas para familias, alumnos y docentes con co-branding.",
    tags: ["iOS", "Android", "Branded"],
    icon: (
      <svg {...SUITE_ICON_PROPS}>
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Growth & CMS",
    desc: "Sitio público, leads CRM con pipeline de admisiones y landings.",
    tags: ["CMS", "Leads", "SEO"],
    icon: (
      <svg {...SUITE_ICON_PROPS}>
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
];

function EduSuites() {
  return (
    <section
      id="suites"
      className="border-t-[0.5px] border-b-[0.5px] border-[var(--edu-line)] bg-[var(--edu-bg)] px-4 py-20 md:px-7 md:py-30"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="mb-4.5 inline-flex items-center gap-2 font-[family-name:var(--font-edu-mono)] text-[11.5px] tracking-[0.02em] text-[var(--edu-accent)] before:h-px before:w-3.5 before:bg-[var(--edu-accent)]">
              14 suites · habilitá lo que necesites
            </span>
            <h2 className="text-[34px] font-medium leading-[1.04] tracking-[-0.035em] text-[var(--edu-ink)] md:text-[46px]">
              Capacidades por{" "}
              <em className="font-[family-name:var(--font-serif)] font-normal italic tracking-[-0.015em]">
                dominio.
              </em>
            </h2>
          </div>
          <p className="max-w-[380px] text-[17px] leading-[1.55] text-[var(--edu-ink-2)]">
            Empezás por academic + communications y vas sumando finanzas, legajo y
            analytics según el ritmo de tu institución.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border-[0.5px] border-[var(--edu-line)] bg-[var(--edu-line)] md:grid-cols-3">
          {SUITES.map((suite) => (
            <div
              key={suite.name}
              className="cursor-pointer bg-[var(--edu-bg-2)] px-6 py-7 transition hover:bg-[var(--edu-bg-3)]"
            >
              <div className="mb-4.5 grid h-[34px] w-[34px] place-items-center rounded-lg bg-[rgba(93,202,165,0.08)] text-[var(--edu-accent)]">
                <span className="h-4.5 w-4.5">{suite.icon}</span>
              </div>
              <div className="mb-2 text-[15px] font-medium tracking-[-0.015em]">
                {suite.name}
              </div>
              <p className="mb-3.5 text-[13.5px] leading-[1.55] text-[var(--edu-ink-2)]">
                {suite.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {suite.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-[var(--edu-bg-3)] px-2 py-0.5 font-[family-name:var(--font-edu-mono)] text-[11px] tracking-[-0.01em] text-[var(--edu-ink-3)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stack strip ---------------- */

function EduStackStrip() {
  return (
    <div className="border-t-[0.5px] border-[var(--edu-line)] bg-[var(--edu-bg-2)] px-4 py-8 md:px-7">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-6">
        <span className="text-[11.5px] font-medium uppercase tracking-[0.06em] text-[var(--edu-ink-3)]">
          Construido sobre
        </span>
        <div className="flex flex-wrap gap-4.5 font-[family-name:var(--font-edu-mono)] text-[12px] text-[var(--edu-ink-2)]">
          <span>Next.js 16</span>
          <span>React 19</span>
          <span>TypeScript 5</span>
          <span>PostgreSQL 18</span>
          <span>Prisma 5</span>
          <span>NextAuth v5</span>
          <span>Expo · React Native</span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Demo + ROI sections ---------------- */

function EduDemoSection() {
  return (
    <section
      id="demo"
      className="border-b-[0.5px] border-[var(--edu-line)] bg-[var(--edu-bg)] px-4 py-20 md:px-7 md:py-30"
    >
      <div className="mx-auto max-w-[1180px]">
        <span className="mb-4.5 inline-flex items-center gap-2 font-[family-name:var(--font-edu-mono)] text-[11.5px] tracking-[0.02em] text-[var(--edu-accent)] before:h-px before:w-3.5 before:bg-[var(--edu-accent)]">
          demo en vivo
        </span>
        <h2 className="mb-4.5 max-w-[680px] text-[34px] font-medium leading-[1.04] tracking-[-0.035em] text-[var(--edu-ink)] md:text-[46px]">
          Probalo{" "}
          <em className="font-[family-name:var(--font-serif)] font-normal italic tracking-[-0.015em]">
            vos mismo.
          </em>
        </h2>
        <p className="mb-14 max-w-[580px] text-[17px] leading-[1.55] text-[var(--edu-ink-2)]">
          Tres flujos reales del producto. Tomá asistencia, mandá una comunicación,
          exportá a SInIDE.
        </p>
        <EduDemo />
      </div>
    </section>
  );
}

function EduRoiSection() {
  return (
    <section
      id="roi"
      className="border-b-[0.5px] border-[var(--edu-line)] bg-[var(--edu-bg)] px-4 py-20 md:px-7 md:py-30"
    >
      <div className="mx-auto max-w-[1180px]">
        <span className="mb-4.5 inline-flex items-center gap-2 font-[family-name:var(--font-edu-mono)] text-[11.5px] tracking-[0.02em] text-[var(--edu-accent)] before:h-px before:w-3.5 before:bg-[var(--edu-accent)]">
          calculadora de ahorro
        </span>
        <h2 className="mb-4.5 max-w-[680px] text-[34px] font-medium leading-[1.04] tracking-[-0.035em] text-[var(--edu-ink)] md:text-[46px]">
          Cuántas horas{" "}
          <em className="font-[family-name:var(--font-serif)] font-normal italic tracking-[-0.015em]">
            recuperás.
          </em>
        </h2>
        <p className="mb-14 max-w-[580px] text-[17px] leading-[1.55] text-[var(--edu-ink-2)]">
          Estimación basada en relevamientos con colegios privados argentinos. Movés los
          sliders y se recalcula.
        </p>
        <EduRoi />
        <p className="mt-4 text-[11.5px] leading-[1.5] text-[var(--edu-ink-3)]">
          * Los valores son referenciales. El ahorro real varía según el grado de
          digitalización previo y la cantidad de módulos habilitados. El cálculo asume 22
          días hábiles/mes y 6 hs operativas/día por administrativo.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Cases (light) ---------------- */

const CASES = [
  {
    quote:
      "Cerramos el primer trimestre en cuatro días en lugar de tres semanas. La secretaría nos miró con cara de no entender qué había pasado.",
    stats: [
      { num: "−87%", label: "Tiempo de cierre trimestral" },
      { num: "+92%", label: "Tasa de lectura familias" },
    ],
    name: "Claudia Benítez",
    role: "Directora · Colegio Belgrano (640 alumnos)",
    initials: "CB",
    avatarBg: "#F0E6D2",
    avatarInk: "#854F0B",
  },
  {
    quote:
      "Pasamos de no saber quién debía cuotas a recuperar el 23% de la cartera vencida en seis meses. Sin levantar el teléfono ni una vez.",
    stats: [
      { num: "+23%", label: "Recupero de morosidad" },
      { num: "−40h", label: "/ mes en cobranza" },
    ],
    name: "Mariano Rossi",
    role: "Administración · San Andrés (420 alumnos)",
    initials: "MR",
    avatarBg: "#AFA9EC",
    avatarInk: "#26215C",
  },
  {
    quote:
      "Las familias por fin reciben los comunicados. El año pasado el 60% decía no haberlos visto. Hoy tenemos acuse del 94%.",
    stats: [
      { num: "94%", label: "Acuses confirmados" },
      { num: "3 apps", label: "Reemplazadas" },
    ],
    name: "Lucía Vázquez",
    role: "Vicedirectora · Northfield (310 alumnos)",
    initials: "LV",
    avatarBg: "#F4C0D1",
    avatarInk: "#4B1528",
  },
];

// TODO: reemplazar testimonios ficticios por casos reales antes del go-live.
function EduCases() {
  return (
    <section
      id="casos"
      className="bg-[var(--edu-light)] px-4 py-20 text-[var(--edu-light-ink)] md:px-7 md:py-30"
    >
      <div className="mx-auto max-w-[1180px]">
        <span className="mb-4.5 inline-block rounded-full bg-[var(--edu-warm)] px-2.5 py-1 text-[12px] font-medium text-[var(--edu-warm-ink)]">
          Casos reales
        </span>
        <h2 className="mb-4.5 max-w-[680px] text-[34px] font-medium leading-[1.04] tracking-[-0.035em] md:text-[46px]">
          Lo que dicen los{" "}
          <em className="font-[family-name:var(--font-serif)] font-normal italic tracking-[-0.015em]">
            directores.
          </em>
        </h2>
        <p className="mb-14 max-w-[580px] text-[17px] leading-[1.55] text-[var(--edu-light-ink-2)]">
          Tres instituciones que pasaron del Excel + WhatsApp al Education OS.
        </p>
        <div className="grid grid-cols-1 gap-4.5 md:grid-cols-3">
          {CASES.map((c) => (
            <article
              key={c.name}
              className="flex flex-col rounded-2xl border-[0.5px] border-[var(--edu-light-line)] bg-white p-7"
            >
              <div className="mb-6 flex-1 font-[family-name:var(--font-serif)] text-[22px] leading-[1.25] tracking-[-0.015em] text-[var(--edu-light-ink)]">
                &ldquo;{c.quote}&rdquo;
              </div>
              <div className="mb-4.5 grid grid-cols-2 gap-4 border-b-[0.5px] border-t-[0.5px] border-[var(--edu-light-line)] py-4.5">
                {c.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-[family-name:var(--font-edu-mono)] text-[24px] font-medium leading-none tracking-[-0.025em] text-[var(--edu-warm-ink)]">
                      {s.num}
                    </div>
                    <div className="mt-1.5 text-[11.5px] leading-[1.35] text-[var(--edu-light-ink-3)]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="grid h-[38px] w-[38px] place-items-center rounded-full text-[13px] font-semibold"
                  style={{ background: c.avatarBg, color: c.avatarInk }}
                >
                  {c.initials}
                </div>
                <div>
                  <div className="text-[13.5px] font-medium">{c.name}</div>
                  <div className="mt-px text-[12px] text-[var(--edu-light-ink-3)]">
                    {c.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ + CTA ---------------- */

function EduFaqSection() {
  return (
    <section
      id="faq"
      className="bg-[var(--edu-light)] px-4 py-0 pb-20 text-[var(--edu-light-ink)] md:px-7 md:pb-30"
    >
      <div className="mx-auto max-w-[1180px]">
        <span className="mb-4.5 inline-block rounded-full bg-[var(--edu-warm)] px-2.5 py-1 text-[12px] font-medium text-[var(--edu-warm-ink)]">
          Preguntas frecuentes
        </span>
        <h2 className="mb-4.5 max-w-[680px] text-[34px] font-medium leading-[1.04] tracking-[-0.035em] md:text-[46px]">
          Lo que{" "}
          <em className="font-[family-name:var(--font-serif)] font-normal italic tracking-[-0.015em]">
            siempre
          </em>{" "}
          nos preguntan.
        </h2>
        <p className="mb-14 max-w-[580px] text-[17px] leading-[1.55] text-[var(--edu-light-ink-2)]">
          Y si lo tuyo no está acá, escribinos. Respondemos en horas, no en días.
        </p>
        <EduFaq />
      </div>
    </section>
  );
}

function EduCtaFinal() {
  const waHref = whatsappLink(WA_TEXT || DEFAULT_WA_TEXT);
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t-[0.5px] border-[var(--edu-line)] bg-[var(--edu-bg)] px-4 py-20 text-center md:px-7 md:py-30"
    >
      <div
        className="pointer-events-none absolute -bottom-[300px] left-1/2 h-[600px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(93,202,165,0.08) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[680px]">
        <h2 className="mb-5 text-[34px] font-medium leading-[1.02] tracking-[-0.04em] md:text-[54px]">
          Llevá tu institución al{" "}
          <em className="font-[family-name:var(--font-serif)] font-normal italic">
            siguiente nivel.
          </em>
        </h2>
        <p className="mb-9 text-[17px] leading-[1.55] text-[var(--edu-ink-2)]">
          Coordinemos un diagnóstico de 30 minutos. Mapeamos qué módulos te dan más valor
          en los primeros 90 días y cómo migrar sin cortar la operación.
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          <Link
            href="/#contacto"
            className="rounded-lg bg-[var(--edu-ink)] px-5 py-[11px] text-[14px] font-medium text-[#0A0A0B] transition hover:-translate-y-px hover:bg-white"
          >
            Pedir demo →
          </Link>
          <Link
            href={waHref}
            target="_blank"
            className="rounded-lg border-[0.5px] border-[var(--edu-line-2)] px-5 py-[11px] text-[14px] font-medium text-[var(--edu-ink-2)] transition hover:border-[var(--edu-ink-3)] hover:text-[var(--edu-ink)]"
          >
            Hablar por WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function EduFooter() {
  return (
    <footer className="border-t-[0.5px] border-[var(--edu-line)] bg-[var(--edu-bg)] px-4 py-10 md:px-7">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 text-[12px] text-[var(--edu-ink-3)]">
        <div>© {new Date().getFullYear()} Solvex · Todos los derechos reservados</div>
        <div className="flex gap-4.5">
          <Link href="/integraciones" className="hover:text-[var(--edu-ink-2)]">
            Integraciones
          </Link>
          <Link href="/productos/expenseflow" className="hover:text-[var(--edu-ink-2)]">
            ExpenseFlow
          </Link>
          <Link href="/productos/for-education" className="hover:text-[var(--edu-ink-2)]">
            for Education
          </Link>
          <Link href="/#contacto" className="hover:text-[var(--edu-ink-2)]">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
