import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionTitle } from "../../components/SectionTitle";
import { WhatsAppFab } from "../../components/WhatsAppFab";
import { whatsappLink } from "@/lib/site";

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

const PILLARS = [
  {
    title: "Education Operating System",
    desc:
      "No es una app suelta: es la plataforma operativa completa de la institución, integrada por capas.",
  },
  {
    title: "Académico de verdad",
    desc:
      "Estructura curricular, asistencia, evaluación, libro de notas, boletines y mapping a sistemas oficiales.",
  },
  {
    title: "Familias conectadas",
    desc:
      "Comunicaciones omnicanal (push, email, WhatsApp, in-app) con acuses, hilos y portal familias.",
  },
  {
    title: "Interoperable",
    desc:
      "SInIDE, Acadeu, Google Workspace, Mercado Pago, Stripe, WhatsApp BSP. Integraciones de primera clase.",
  },
];

const SUITES = [
  {
    title: "Institutional Core",
    desc: "Organigrama, sedes, áreas, estructura académica, personas y vínculos.",
    items: [
      "Organization Engine: sedes, áreas, puestos, líneas de reporte",
      "Estructura académica: niveles, programas, cursos, divisiones, jornadas",
      "Personas: alumnos, familias, responsables de pago, docentes, staff",
    ],
  },
  {
    title: "Student Management",
    desc: "Perfil del alumno, legajo completo, matrícula y vínculos familiares.",
    items: [
      "Legajo / dossier con timeline y trazabilidad",
      "Admisión, matrícula y rematriculación",
      "Autorizaciones de retiro (pickup) y contactos de emergencia",
    ],
  },
  {
    title: "Academic Core",
    desc: "Asistencia, evaluación, notas, boletines y reporting oficial.",
    items: [
      "Asistencia diaria, por turno y por materia, con justificaciones",
      "Evaluaciones, rúbricas, asignaciones y feedback",
      "Libro de notas, escalas, cierres parciales y finales",
      "Mapping interno ↔ oficial y export a SInIDE",
      "Boletines institucionales y oficiales",
      "Planificación docente, libros de temas y coursework",
    ],
  },
  {
    title: "Student Support & Wellbeing",
    desc: "Convivencia, riesgo, orientación y salud.",
    items: [
      "Discipline / conduct: incidentes, observaciones, actas y seguimiento",
      "Risk score multidimensional con alertas e intervenciones",
      "Counseling y planes de acompañamiento",
      "Ficha médica, alergias, medicación y eventos médicos",
    ],
  },
  {
    title: "Communications & Experience",
    desc: "Hub de comunicaciones omnicanal con tracking real.",
    items: [
      "Comunicados, acuses, respuestas estructuradas e hilos restringidos",
      "Push, email, WhatsApp, SMS, inbox in-app",
      "Engagement tracking: delivery, open, read, acknowledge",
      "Entrevistas, reuniones y agenda con familias",
      "Portales familia, alumno, docente, directivo y administración",
    ],
  },
  {
    title: "Forms, Documents & Signatures",
    desc: "Form builder, firma electrónica y gestión documental.",
    items: [
      "Form builder con versionado y lógica condicional",
      "Firma electrónica con OTP y evidencia",
      "Plantillas de documentos, constancias y certificados",
      "Records management con trazabilidad documental",
    ],
  },
  {
    title: "Teacher & Staff",
    desc: "Legajo docente, asignaciones, presentismo y desarrollo.",
    items: [
      "Legajo docente y staff con títulos y certificaciones",
      "Asignación de materias, cursos, tutorías y suplencias",
      "Presentismo, licencias, ausencias y reemplazos",
      "Evaluación docente y planes de mejora",
    ],
  },
  {
    title: "Financial & Administrative",
    desc: "Aranceles, cuenta corriente, becas, cobranza e inteligencia financiera.",
    items: [
      "Plan arancelario, condición económica y acuerdos",
      "Cargos, facturas, pagos, allocations y ledger",
      "Cuenta corriente, saldos y deuda por familia",
      "Becas, descuentos y reglas de aplicación",
      "Cobranzas con escalamiento y promesas de pago",
      "Ageing, cashflow, riesgo financiero y proyecciones",
    ],
  },
  {
    title: "Scheduling & Resources",
    desc: "Calendario, recursos físicos y reservas.",
    items: [
      "Calendario institucional con clases, reuniones y eventos",
      "Aulas, laboratorios, salas, equipos y vehículos",
      "Reservas, disponibilidad, conflictos y aprobaciones",
      "Sync con Google Calendar y Meet",
    ],
  },
  {
    title: "Governance, Quality & ISO",
    desc: "Gobierno institucional, calidad y compliance.",
    items: [
      "Estructura institucional con responsables de proceso",
      "Procesos, indicadores, no conformidades y mejoras",
      "Encuestas y medición de satisfacción",
      "Trazabilidad de evidencia y control documental",
    ],
  },
  {
    title: "Integrations & Interoperability",
    desc: "Conexiones que evitan doble carga.",
    items: [
      "SInIDE, Acadeu y otros sistemas escolares",
      "Google Workspace: sign-in, directory, calendar, gmail, drive, classroom",
      "Pagos: Mercado Pago, Stripe, transferencias y conciliación",
      "WhatsApp BSP, email providers y push providers",
      "Import/export CSV/XLSX, APIs y webhooks",
    ],
  },
  {
    title: "Analytics & Intelligence",
    desc: "Dashboards y predicción accionable.",
    items: [
      "Analytics académico, asistencia, conducta y financiero",
      "Tableros directivos por sede y nivel",
      "Riesgo académico y financiero con alertas tempranas",
      "Intervención sugerida sobre evidencia",
    ],
  },
  {
    title: "Mobile Experience",
    desc: "Apps nativas para cada perfil.",
    items: [
      "App familias: comunicaciones, notas, asistencia, cuenta corriente, formularios, firmas",
      "App alumnos: agenda, tareas, evaluaciones y mensajes",
      "App docentes: asistencia, agenda, evaluaciones rápidas y novedades",
      "Branded variants y co-branding por institución",
    ],
  },
  {
    title: "Institutional Experience & Growth",
    desc: "Sitio público, marketing y captación.",
    items: [
      "CMS para sitio institucional con SEO",
      "Publicación de noticias, comunicados y eventos públicos",
      "Leads CRM con pipeline de admisiones",
      "Formularios públicos, preinscripción y landings de campaña",
    ],
  },
];

const STACK = [
  "Next.js 16",
  "React 19",
  "TypeScript 5",
  "PostgreSQL 18",
  "Prisma 5",
  "NextAuth v5",
  "Worker Node.js",
  "Expo / React Native",
  "Tamagui",
  "GitHub Actions",
];

const FAQS = [
  {
    q: "¿Reemplaza a SInIDE o se integra?",
    a: "Se integra. for Education construye un mapping interno ↔ oficial y exporta a SInIDE; tu equipo deja de duplicar carga.",
  },
  {
    q: "¿Sirve si ya uso Acadeu u otro SIS?",
    a: "Sí. Tenemos pipeline de extracción, staging y reconciliación contra Acadeu para migrar de forma controlada o convivir mientras se ordena el dominio.",
  },
  {
    q: "¿Qué incluye la app mobile?",
    a: "Apps separadas para familias, alumnos y docentes con branding del colegio. Comunicaciones, asistencia, notas, formularios y firmas.",
  },
  {
    q: "¿Puedo elegir qué módulos prender?",
    a: "Sí. Los módulos se habilitan por suscripción y feature flag. Empezás por academic + communications y vas sumando finanzas, legajo, etc.",
  },
  {
    q: "¿Manejan firma electrónica y compliance?",
    a: "Sí. Firma con OTP y evidencia, trazabilidad documental y registros operativos para procesos de calidad e ISO.",
  },
  {
    q: "¿Hay portal de familias?",
    a: "Sí. Portal web y app mobile dedicada para familias, con comunicaciones, cuenta corriente, formularios y firmas.",
  },
];

export default function ForEducationPage() {
  const waHref = whatsappLink(WA_TEXT);

  return (
    <main className="relative min-h-screen text-[var(--ink)]">
      <Header />

      <section className="relative overflow-hidden border-b border-black/5">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[var(--mint)]/15 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
          <div className="animate-reveal">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-[var(--muted)]">
              Producto · for Education · Suite escolar integral
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              El sistema operativo de tu institución educativa.
            </h1>
            <p className="mt-4 text-base text-[var(--muted)] md:text-lg">
              Solvex for Education unifica académico, asistencia, comunicaciones,
              finanzas, legajo, mobile y reporting oficial en una sola plataforma. Pensado
              para colegios privados que quieren operar mejor sin sumar 10 apps sueltas.
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
                <div className="text-base font-semibold text-[var(--ink)]">14</div>
                <div className="mt-1">Suites integradas</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 p-3 text-center">
                <div className="text-base font-semibold text-[var(--ink)]">SInIDE</div>
                <div className="mt-1">Reporting oficial</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 p-3 text-center">
                <div className="text-base font-semibold text-[var(--ink)]">3 apps</div>
                <div className="mt-1">Familia · Alumno · Docente</div>
              </div>
            </div>
          </div>

          <div className="animate-reveal">
            <div className="rounded-[28px] border border-black/10 bg-[var(--paper)] p-6 shadow-soft">
              <div className="rounded-2xl border border-black/10 bg-white p-5">
                <p className="text-xs font-medium text-[var(--muted)]">Capas del sistema</p>
                <ol className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                  <li>
                    <span className="font-medium text-[var(--ink)]">Foundation.</span>{" "}
                    Identidad, tenancy, branding, audit, files, integraciones.
                  </li>
                  <li>
                    <span className="font-medium text-[var(--ink)]">Dominio educativo.</span>{" "}
                    Académico, alumnos, docentes, comunicaciones, finanzas, legajo.
                  </li>
                  <li>
                    <span className="font-medium text-[var(--ink)]">Experiencia.</span>{" "}
                    Workspace web, apps mobile y CMS público.
                  </li>
                  <li>
                    <span className="font-medium text-[var(--ink)]">Inteligencia.</span>{" "}
                    Riesgo, analytics, automatización e interoperabilidad.
                  </li>
                </ol>
              </div>
              <div className="mt-4 rounded-2xl border border-black/10 bg-white p-5">
                <p className="text-xs font-medium text-[var(--muted)]">Stack</p>
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
        </div>
      </section>

      <section className="border-b border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Pilares"
            title="Una plataforma, no una colección de apps"
            subtitle="Cuatro ideas rectoras que diferencian a for Education."
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
            kicker="Suites"
            title="Capacidades por dominio"
            subtitle="14 suites integradas. Habilitás los módulos que tu institución necesita."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SUITES.map((suite) => (
              <article
                key={suite.title}
                className="rounded-3xl border border-black/10 bg-[var(--paper)] p-6 shadow-soft"
              >
                <h3 className="text-base font-semibold text-[var(--ink)]">{suite.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{suite.desc}</p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                  {suite.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle kicker="FAQ" title="Preguntas frecuentes" />
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-3xl border border-black/10 bg-white p-6 shadow-soft"
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

      <section className="border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-black/10 bg-[var(--paper)] p-8 shadow-soft md:flex md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--ink)]">
                Llevá tu institución al siguiente nivel
              </p>
              <p className="mt-2 text-sm text-[var(--muted)] md:max-w-xl">
                Coordinemos un diagnóstico para mapear qué módulos te dan más valor en
                los primeros 90 días y cómo migrar sin cortar la operación.
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
