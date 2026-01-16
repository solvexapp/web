"use client";

import { useEffect, useRef, useState } from "react";
import { TurnstileField } from "./TurnstileField";

type FormState = "idle" | "submitting" | "success" | "error";

function getErrorMessage(error?: string, detail?: string) {
  if (error === "invalid_payload") {
    return "Revisá los campos y que el mensaje tenga al menos 10 caracteres.";
  }
  if (error === "turnstile_failed") {
    return "No se pudo validar el captcha. Probá de nuevo.";
  }
  if (error === "rate_limited") {
    return "Demasiados intentos. Esperá unos minutos y probá otra vez.";
  }
  if (error === "database_unavailable") {
    return "No se pudo registrar el mensaje. Probá más tarde.";
  }
  if (detail) {
    return `Error: ${detail}`;
  }
  return "No se pudo enviar el mensaje. Probá nuevamente.";
}

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const submittingRef = useRef(false);
  const requestIdRef = useRef<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const stateRef = useRef<FormState>("idle");
  const successRef = useRef(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [resetSignal, setResetSignal] = useState(0);

  useEffect(() => {
    stateRef.current = state;
    console.info("[contact] state", { state, message });
  }, [state, message]);

  useEffect(() => {
    if (!toast) {
      return;
    }
    const timer = window.setTimeout(() => setToast(null), 5000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submittingRef.current || state === "submitting") {
      return;
    }
    submittingRef.current = true;
    successRef.current = false;
    setState("submitting");
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const clientRequestId = crypto.randomUUID();
    requestIdRef.current = clientRequestId;
    if (abortRef.current) {
      abortRef.current.abort();
    }
    const controller = new AbortController();
    abortRef.current = controller;
    try {
      console.info("[contact] submit", { clientRequestId });
      const response = await fetch("/api/contact?json=1", {
        method: "POST",
        body: formData,
        redirect: "manual",
        signal: controller.signal,
        headers: {
          Accept: "application/json",
          "X-Requested-With": "fetch",
          "X-Client-Request-Id": clientRequestId,
        },
      });

      if (requestIdRef.current !== clientRequestId) {
        console.info("[contact] stale response ignored", { clientRequestId });
        return;
      }

      if (response.redirected) {
        console.info("[contact] redirected", response.url);
        successRef.current = true;
        setState("success");
        setMessage("¡Operación exitosa! Te contactamos pronto.");
        setToast("Mensaje enviado.");
        formRef.current?.reset();
        setResetSignal((value) => value + 1);
        return;
      }

      let data: { ok?: boolean; error?: string; detail?: string } | null = null;
      try {
        data = (await response.json()) as { ok?: boolean; error?: string; detail?: string };
      } catch {
        data = null;
      }
      console.info("[contact] response", {
        status: response.status,
        ok: response.ok,
        data,
      });

      if (response.ok) {
        console.info("[contact] success");
        successRef.current = true;
        setState("success");
        setMessage("¡Operación exitosa! Te contactamos pronto.");
        setToast("Mensaje enviado.");
        formRef.current?.reset();
        setResetSignal((value) => value + 1);
        return;
      }

      console.warn("[contact] error", data);
      if (stateRef.current === "submitting" && !successRef.current) {
        setState("error");
        setMessage(getErrorMessage(data?.error, data?.detail));
      }
    } catch (error) {
      if (requestIdRef.current !== clientRequestId) {
        console.info("[contact] stale error ignored", { clientRequestId });
        return;
      }
      if ((error as Error)?.name === "AbortError") {
        console.info("[contact] request aborted", { clientRequestId });
        return;
      }
      if (stateRef.current === "submitting" && !successRef.current) {
        setState("error");
        setMessage("No se pudo enviar el mensaje. Probá nuevamente.");
      }
    } finally {
      if (requestIdRef.current === clientRequestId && stateRef.current === "submitting") {
        submittingRef.current = false;
      }
    }
  };

  return (
    <>
      <form
        ref={formRef}
        method="POST"
        action="/api/contact"
        className="mt-4 space-y-3"
        onSubmit={handleSubmit}
      >
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
          minLength={10}
          className="h-28 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-black/30"
          required
        />
        <TurnstileField resetSignal={resetSignal} />
        <button
          type="submit"
          className="w-full cursor-pointer rounded-xl bg-[var(--ink)] px-4 py-3 text-sm font-medium text-[var(--paper)] hover:bg-black disabled:cursor-not-allowed disabled:opacity-70"
          disabled={state === "submitting"}
        >
          {state === "submitting" ? "Enviando..." : "Enviar"}
        </button>
        <p className="text-xs text-[var(--muted)]">Mensaje mínimo 10 caracteres.</p>
        {state === "success" && message ? (
          <p className="text-xs text-emerald-700">{message}</p>
        ) : null}
        {state === "error" && message ? <p className="text-xs text-rose-700">{message}</p> : null}
        <p className="text-xs text-[var(--muted)]">Protegido con Turnstile y rate limit.</p>
      </form>
      {toast ? (
        <div className="fixed bottom-5 right-5 z-50 rounded-full bg-[var(--ink)] px-4 py-2 text-xs font-medium text-[var(--paper)] shadow-soft">
          {toast}
        </div>
      ) : null}
    </>
  );
}
