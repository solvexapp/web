"use client";

import { useState } from "react";

type FaqEntry = { q: string; a: string };

const FAQS: FaqEntry[] = [
  {
    q: "¿Reemplaza a SInIDE o se integra?",
    a: "Se integra. for Education construye un mapping interno ↔ oficial y exporta a SInIDE en un click. Tu equipo deja de duplicar carga y vos mantenés cumplimiento ministerial.",
  },
  {
    q: "¿Sirve si ya uso Acadeu u otro SIS?",
    a: "Sí. Tenemos pipeline de extracción, staging y reconciliación contra Acadeu para migrar de forma controlada o convivir mientras se ordena el dominio.",
  },
  {
    q: "¿Qué incluye la app mobile?",
    a: "Apps separadas para familias, alumnos y docentes con branding del colegio. Comunicaciones, asistencia, notas, formularios, firmas y cuenta corriente.",
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
    q: "¿Cuánto tarda la implementación?",
    a: "Para academic + comunicaciones, entre 2 y 4 semanas según el estado de tus datos. Hacemos un diagnóstico previo para mapear qué módulos te dan más valor en los primeros 90 días.",
  },
];

export function EduFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid max-w-[820px] gap-0">
      {FAQS.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.q}
            className={`cursor-pointer border-t-[0.5px] border-[var(--edu-light-line)] py-5.5 ${
              i === FAQS.length - 1 ? "border-b-[0.5px]" : ""
            }`}
            onClick={() => setOpenIndex(isOpen ? null : i)}
            aria-expanded={isOpen}
            role="button"
          >
            <div className="flex items-center justify-between gap-4.5 text-[18px] font-medium tracking-[-0.015em]">
              <span>{faq.q}</span>
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[14px] transition-transform duration-300 ${
                  isOpen
                    ? "rotate-45 bg-[var(--edu-warm-ink)] text-white"
                    : "bg-[var(--edu-light-2)] text-[var(--edu-light-ink-2)]"
                }`}
              >
                +
              </span>
            </div>
            <div
              className={`overflow-hidden text-[15px] leading-[1.6] text-[var(--edu-light-ink-2)] transition-[max-height,margin-top] duration-300 ease-out ${
                isOpen ? "mt-3.5 max-h-[300px]" : "mt-0 max-h-0"
              }`}
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
