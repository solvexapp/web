"use client";

import { useMemo, useState } from "react";

const ARS = new Intl.NumberFormat("es-AR", { maximumFractionDigits: 0 });

// TODO Fernando: validar (alumnos*950 + 180000) contra el pricing real de for Education.
// Estos coeficientes son tentativos según DESIGN_SPEC v1.0.
const PRICE_PER_STUDENT_MONTH = 950;
const FIXED_MONTH = 180_000;

export function EduRoi() {
  const [alumnos, setAlumnos] = useState(500);
  const [admin, setAdmin] = useState(6);
  const [costo, setCosto] = useState(6500);
  const [recupero, setRecupero] = useState(35);

  const result = useMemo(() => {
    const horasMes = admin * 22 * 6;
    const horasRecuperadas = horasMes * (recupero / 100);
    const horasAno = horasRecuperadas * 12;
    const ahorroAno = horasAno * costo;
    const inversion = (alumnos * PRICE_PER_STUDENT_MONTH + FIXED_MONTH) * 12;
    const roi = inversion === 0 ? 0 : ahorroAno / inversion;
    return {
      horasMes,
      horasRecuperadas,
      horasAno,
      ahorroAno,
      inversion,
      roi,
    };
  }, [admin, alumnos, costo, recupero]);

  return (
    <div className="grid gap-12 rounded-2xl border-[0.5px] border-[var(--edu-line-2)] bg-gradient-to-b from-[var(--edu-bg-2)] to-[var(--edu-bg)] p-8 md:grid-cols-2 md:p-10">
      <div className="flex flex-col gap-6">
        <Slider
          label="Cantidad de alumnos"
          value={alumnos}
          min={100}
          max={2000}
          step={50}
          display={ARS.format(alumnos)}
          onChange={setAlumnos}
        />
        <Slider
          label="Personal administrativo"
          value={admin}
          min={2}
          max={20}
          step={1}
          display={`${admin} pers.`}
          onChange={setAdmin}
        />
        <Slider
          label="Costo hora administrativa"
          value={costo}
          min={3000}
          max={15000}
          step={500}
          display={`$ ${ARS.format(costo)}`}
          onChange={setCosto}
        />
        <Slider
          label="Recupero estimado por mes"
          value={recupero}
          min={20}
          max={60}
          step={5}
          display={`${recupero}%`}
          onChange={setRecupero}
        />
      </div>

      <div className="flex flex-col justify-center md:border-l-[0.5px] md:border-[var(--edu-line)] md:pl-12 md:pt-0 pt-8 border-t-[0.5px] border-[var(--edu-line)] md:border-t-0">
        <div className="text-[12px] uppercase tracking-[0.06em] text-[var(--edu-ink-3)]">
          Ahorro anual estimado
        </div>
        <div className="mt-2.5 mb-1.5 font-[family-name:var(--font-edu-mono)] text-[54px] font-medium leading-none tracking-[-0.04em] text-[var(--edu-accent)]">
          $ {ARS.format(result.ahorroAno)}
        </div>
        <div className="mb-6 text-[14px] text-[var(--edu-ink-2)]">
          {ARS.format(result.horasAno)} horas-persona recuperadas / año
        </div>
        <div className="flex flex-col gap-2.5 text-[13px]">
          <Row label="Horas operativas / mes" value={`${ARS.format(result.horasRecuperadas)} h`} />
          <Row label="Horas / año" value={`${ARS.format(result.horasAno)} h`} />
          <Row label="Inversión Solvex / año" value={`$ ${ARS.format(result.inversion)}`} />
          <div className="mt-1.5 flex justify-between border-t-[0.5px] border-[var(--edu-line)] pt-2.5 text-[var(--edu-ink-2)]">
            <span>ROI estimado</span>
            <span className="font-[family-name:var(--font-edu-mono)] font-medium text-[var(--edu-accent)]">
              {result.roi.toFixed(1)}x
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-medium uppercase tracking-[0.02em] text-[var(--edu-ink-3)]">
        {label}
      </label>
      <div className="flex items-center gap-3.5">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="edu-range flex-1"
        />
        <span className="min-w-[80px] text-right font-[family-name:var(--font-edu-mono)] text-[15px] font-medium text-[var(--edu-ink)]">
          {display}
        </span>
      </div>
      <style jsx>{`
        .edu-range {
          appearance: none;
          -webkit-appearance: none;
          height: 3px;
          background: var(--edu-line);
          border-radius: 2px;
          outline: none;
        }
        .edu-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--edu-accent);
          cursor: pointer;
          box-shadow: 0 0 0 4px rgba(93, 202, 165, 0.15);
        }
        .edu-range::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--edu-accent);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 0 4px rgba(93, 202, 165, 0.15);
        }
      `}</style>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-[var(--edu-ink-2)]">
      <span>{label}</span>
      <span className="font-[family-name:var(--font-edu-mono)] font-medium text-[var(--edu-ink)]">
        {value}
      </span>
    </div>
  );
}
