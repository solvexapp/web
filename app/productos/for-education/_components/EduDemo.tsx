"use client";

import { useEffect, useMemo, useState } from "react";
import { AVATAR_CLASSES, STUDENTS, type AttendanceMark } from "./students";

type TabKey = "att" | "msg" | "sinide";

const TABS: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  {
    key: "att",
    label: "Tomar asistencia",
    icon: (
      <svg className="h-3.5 w-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    key: "msg",
    label: "Comunicar a familias",
    icon: (
      <svg className="h-3.5 w-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    key: "sinide",
    label: "Exportar a SInIDE",
    icon: (
      <svg className="h-3.5 w-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622" />
      </svg>
    ),
  },
];

export function EduDemo() {
  const [tab, setTab] = useState<TabKey>("att");

  return (
    <div className="overflow-hidden rounded-2xl border-[0.5px] border-[var(--edu-line-2)] bg-[var(--edu-bg-2)]">
      <div className="edu-no-scrollbar flex overflow-x-auto border-b-[0.5px] border-[var(--edu-line)] bg-[var(--edu-bg-3)]">
        {TABS.map((t) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 whitespace-nowrap border-r-[0.5px] border-[var(--edu-line)] px-5 py-3.5 text-[13px] transition ${
                active
                  ? "bg-[var(--edu-bg-2)] text-[var(--edu-ink)] shadow-[inset_0_-1px_0_var(--edu-accent)]"
                  : "text-[var(--edu-ink-2)] hover:text-[var(--edu-ink)]"
              }`}
              aria-pressed={active}
            >
              {t.icon}
              {t.label}
            </button>
          );
        })}
      </div>
      <div className="min-h-[420px] p-8">
        {tab === "att" && <AttendanceDemo />}
        {tab === "msg" && <MessageDemo />}
        {tab === "sinide" && <SinideDemo />}
      </div>
    </div>
  );
}

function AttendanceDemo() {
  const [marks, setMarks] = useState<Record<string, AttendanceMark>>(() => {
    const initial: Record<string, AttendanceMark> = {};
    STUDENTS.forEach((s) => {
      initial[s.lu] = s.defaultMark;
    });
    return initial;
  });
  const [published, setPublished] = useState(false);

  const summary = useMemo(() => {
    const total = STUDENTS.length;
    const p = Object.values(marks).filter((v) => v === "P").length;
    const a = Object.values(marks).filter((v) => v === "A").length;
    const t = Object.values(marks).filter((v) => v === "T").length;
    return { total, p, a, t };
  }, [marks]);

  useEffect(() => {
    if (!published) {
      return;
    }
    const id = window.setTimeout(() => setPublished(false), 2400);
    return () => window.clearTimeout(id);
  }, [published]);

  const setMark = (lu: string, value: AttendanceMark) => {
    setMarks((prev) => ({ ...prev, [lu]: value }));
  };

  return (
    <div className="edu-fade-in grid gap-6 md:grid-cols-[1fr_280px]">
      <div className="flex flex-col gap-1.5">
        {STUDENTS.map((s) => (
          <div
            key={s.lu}
            className="grid grid-cols-[32px_1fr_auto] items-center gap-3 rounded-lg border-[0.5px] border-[var(--edu-line)] bg-[var(--edu-bg)] px-3.5 py-2.5"
          >
            <div
              className={`grid h-6 w-6 place-items-center rounded-full text-[9px] font-semibold tracking-tight ${AVATAR_CLASSES[s.avatar]}`}
            >
              {s.initials}
            </div>
            <div>
              <div className="text-[13.5px] text-[var(--edu-ink)]">{s.name}</div>
              <div className="mt-0.5 font-[family-name:var(--font-edu-mono)] text-[11px] text-[var(--edu-ink-3)]">
                5°A · LU {s.lu}
              </div>
            </div>
            <div className="flex gap-1">
              {(["P", "A", "T"] as AttendanceMark[]).map((value) => {
                const active = marks[s.lu] === value;
                const activeClass =
                  value === "P"
                    ? "bg-[rgba(93,202,165,0.14)] border-[var(--edu-accent)] text-[var(--edu-accent)]"
                    : value === "A"
                    ? "bg-[rgba(226,75,74,0.14)] border-[#E24B4A] text-[var(--edu-danger-ink)]"
                    : "bg-[rgba(239,159,39,0.14)] border-[#EF9F27] text-[var(--edu-warning-ink)]";
                return (
                  <button
                    key={value}
                    onClick={() => setMark(s.lu, value)}
                    aria-pressed={active}
                    className={`h-7 w-8 rounded-md border-[0.5px] text-[10.5px] font-semibold transition ${
                      active
                        ? activeClass
                        : "border-[var(--edu-line)] bg-[var(--edu-bg-3)] text-[var(--edu-ink-3)] hover:text-[var(--edu-ink)]"
                    }`}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <aside className="flex h-fit flex-col gap-4 rounded-[10px] border-[0.5px] border-[var(--edu-line)] bg-[var(--edu-bg)] p-5">
        <h4 className="text-[13px] font-medium tracking-tight text-[var(--edu-ink-2)]">
          Resumen 5°A · Matemática
        </h4>
        <BarRow
          label="Presentes"
          value={summary.p}
          total={summary.total}
          color="var(--edu-accent)"
        />
        <BarRow
          label="Ausentes"
          value={summary.a}
          total={summary.total}
          color="#E24B4A"
        />
        <BarRow
          label="Tarde"
          value={summary.t}
          total={summary.total}
          color="#EF9F27"
        />
        <button
          onClick={() => setPublished(true)}
          className={`rounded-md px-2.5 py-2.5 text-[13px] font-semibold transition active:translate-y-px ${
            published
              ? "bg-[rgba(93,202,165,0.2)] text-[var(--edu-accent)]"
              : "bg-[var(--edu-accent)] text-[var(--edu-accent-ink)] hover:-translate-y-px"
          }`}
        >
          {published
            ? `✓ Publicado · ${summary.a} familias notificadas`
            : "Publicar y notificar →"}
        </button>
        <p className="text-center text-[11px] leading-snug text-[var(--edu-ink-3)]">
          Las familias de los ausentes reciben notificación push en automático.
        </p>
      </aside>
    </div>
  );
}

function BarRow({
  label,
  value,
  total,
  color,
}: {
  label: string;
  value: number;
  total: number;
  color: string;
}) {
  const pct = total === 0 ? 0 : Math.round((value / total) * 100);
  return (
    <div className="text-[12px]">
      <div className="mb-1.5 flex justify-between text-[var(--edu-ink-2)]">
        <span>{label}</span>
        <strong className="font-[family-name:var(--font-edu-mono)] font-medium text-[var(--edu-ink)]">
          {value}
        </strong>
      </div>
      <div className="h-[5px] overflow-hidden rounded bg-[var(--edu-bg-3)]">
        <div
          className="h-full rounded transition-[width] duration-400"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}

const CHANNELS = [
  { key: "push", label: "Push" },
  { key: "email", label: "Email" },
  { key: "whatsapp", label: "WhatsApp" },
  { key: "sms", label: "SMS" },
] as const;

function MessageDemo() {
  const [subject, setSubject] = useState(
    "Reunión de padres · próximo viernes 16",
  );
  const [body, setBody] = useState(
    "Estimadas familias, las convocamos a la reunión de padres el viernes 16 de mayo a las 18:30 hs en el aula 5°A. Confirmar asistencia desde la app.",
  );
  const [channels, setChannels] = useState<Record<string, boolean>>({
    push: true,
    email: true,
    whatsapp: true,
    sms: false,
  });

  const activeCount = Object.values(channels).filter(Boolean).length;
  const cost = (activeCount * 0.105).toFixed(2).replace(".", ",");

  return (
    <div className="edu-fade-in grid gap-6 md:grid-cols-[1fr_320px]">
      <div className="flex flex-col gap-3.5">
        <Field label="Destinatarios">
          <input
            value="5°A · Familias (28 contactos)"
            readOnly
            className="msg-input"
          />
        </Field>
        <Field label="Asunto">
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="msg-input"
          />
        </Field>
        <Field label="Mensaje">
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="msg-input min-h-[90px] resize-y leading-[1.5]"
          />
        </Field>
        <Field label="Canales">
          <div className="flex flex-wrap gap-2">
            {CHANNELS.map((c) => {
              const active = channels[c.key];
              return (
                <label
                  key={c.key}
                  className={`flex cursor-pointer items-center gap-1.5 rounded-md border-[0.5px] px-2.5 py-1.5 text-[12px] transition ${
                    active
                      ? "border-[var(--edu-accent)] bg-[rgba(93,202,165,0.06)] text-[var(--edu-accent)]"
                      : "border-[var(--edu-line)] bg-[var(--edu-bg)] text-[var(--edu-ink-2)]"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={active}
                    onChange={(e) =>
                      setChannels((prev) => ({ ...prev, [c.key]: e.target.checked }))
                    }
                    className="accent-[var(--edu-accent)]"
                  />
                  {c.label}
                </label>
              );
            })}
          </div>
        </Field>
      </div>

      <aside className="flex flex-col gap-3 rounded-[10px] border-[0.5px] border-[var(--edu-line)] bg-[var(--edu-bg)] p-4.5">
        <h4 className="text-[11.5px] font-medium uppercase tracking-[0.06em] text-[var(--edu-ink-3)]">
          Preview
        </h4>
        <div className="rounded-[10px] bg-[var(--edu-bg-3)] p-3.5 text-[13px] leading-[1.5] text-[var(--edu-ink-2)]">
          <strong className="mb-1.5 block text-[13px] font-medium text-[var(--edu-ink)]">
            {subject}
          </strong>
          <span>{body}</span>
        </div>
        <div className="flex justify-between border-t-[0.5px] border-[var(--edu-line)] pt-3 text-[11.5px]">
          <span>
            <span className="text-[var(--edu-ink-3)]">Alcance estimado: </span>
            <span className="font-[family-name:var(--font-edu-mono)] font-medium text-[var(--edu-accent)]">
              28 / 28
            </span>
          </span>
          <span>
            <span className="text-[var(--edu-ink-3)]">Costo: </span>
            <span className="font-[family-name:var(--font-edu-mono)] font-medium text-[var(--edu-accent)]">
              $ {cost}
            </span>
          </span>
        </div>
        <div className="flex justify-between text-[11.5px]">
          <span className="text-[var(--edu-ink-3)]">Acuse de recibo</span>
          <span className="font-[family-name:var(--font-edu-mono)] font-medium text-[var(--edu-accent)]">
            activado
          </span>
        </div>
      </aside>

      <style jsx>{`
        .msg-input {
          width: 100%;
          background: var(--edu-bg);
          border: 0.5px solid var(--edu-line);
          border-radius: 7px;
          padding: 10px 12px;
          color: var(--edu-ink);
          font-family: inherit;
          font-size: 13.5px;
          outline: none;
          transition: border 0.15s;
        }
        .msg-input:focus {
          border-color: var(--edu-accent);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[11.5px] font-medium uppercase tracking-[0.06em] text-[var(--edu-ink-3)]">
        {label}
      </label>
      {children}
    </div>
  );
}

function SinideDemo() {
  const [pct, setPct] = useState(82);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPct((p) => (p >= 99 ? 82 : p + 1));
    }, 280);
    return () => window.clearInterval(id);
  }, []);

  const STEPS = [
    {
      kind: "done" as const,
      label: "Validación de matrícula",
      meta: "428 alumnos",
      status: "completo",
    },
    {
      kind: "done" as const,
      label: "Mapping de cursos internos ↔ oficial",
      meta: "21 secciones",
      status: "completo",
    },
    {
      kind: "done" as const,
      label: "Cálculo de notas finales y promedios",
      meta: "9.842 calificaciones",
      status: "completo",
    },
    {
      kind: "run" as const,
      label: "Generando archivo SInIDE.xml",
      meta: `${pct}%`,
      status: "en curso",
    },
    { kind: "pend" as const, label: "Firma digital institucional", status: "pendiente" },
    { kind: "pend" as const, label: "Upload a portal SInIDE", status: "pendiente" },
  ];

  return (
    <div className="edu-fade-in flex flex-col gap-4">
      <div className="rounded-[10px] border-[0.5px] border-[var(--edu-line)] bg-[var(--edu-bg)] p-4.5">
        <h4 className="mb-3.5 text-[13px] font-medium">Exportación · 1° trimestre 2026</h4>
        {STEPS.map((step, i) => {
          const isLast = i === STEPS.length - 1;
          const iconClass =
            step.kind === "done"
              ? "bg-[rgba(93,202,165,0.14)] text-[var(--edu-accent)]"
              : step.kind === "run"
              ? "bg-[rgba(239,159,39,0.14)] text-[var(--edu-warning-ink)]"
              : "bg-[var(--edu-bg-3)] text-[var(--edu-ink-3)]";
          const statusClass =
            step.kind === "done"
              ? "text-[var(--edu-accent)]"
              : step.kind === "run"
              ? "text-[var(--edu-warning-ink)]"
              : "text-[var(--edu-ink-3)]";
          return (
            <div
              key={step.label}
              className={`grid grid-cols-[24px_1fr_auto] items-center gap-3 py-2.5 text-[13px] ${
                isLast ? "" : "border-b-[0.5px] border-[var(--edu-line)]"
              }`}
            >
              <div className={`grid h-5 w-5 place-items-center rounded-full text-[10px] font-semibold ${iconClass}`}>
                {step.kind === "done" ? "✓" : step.kind === "run" ? "●" : "·"}
              </div>
              <div>
                {step.label}
                {step.meta ? (
                  <span className="ml-2 font-[family-name:var(--font-edu-mono)] text-[11px] text-[var(--edu-ink-3)]">
                    {step.meta}
                  </span>
                ) : null}
              </div>
              <div className={`font-[family-name:var(--font-edu-mono)] text-[11px] ${statusClass}`}>
                {step.status}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-3.5 rounded-[10px] border-[0.5px] border-[var(--edu-line)] bg-[var(--edu-bg)] p-4 text-[13px] text-[var(--edu-ink-2)]">
        <div className="mt-0.5 shrink-0 text-[var(--edu-accent)]">●</div>
        <div>
          Tu equipo administrativo dejaba de operar 40+ horas por trimestre haciendo esto a
          mano. Con Solvex es un click. Y se audita solo.
        </div>
      </div>
    </div>
  );
}
