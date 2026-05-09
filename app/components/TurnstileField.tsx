"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      remove: (widgetId: string) => void;
      reset?: (widgetId?: string) => void;
    };
  }
}

type TurnstileFieldProps = {
  siteKey?: string;
  resetSignal?: number;
};

const SCRIPT_ID = "turnstile-api";
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

export function TurnstileField({ siteKey, resetSignal }: TurnstileFieldProps) {
  const [fetchedKey, setFetchedKey] = useState<string | null>(null);
  const resolvedKey = siteKey ?? fetchedKey;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  const writeToken = (value: string) => {
    if (inputRef.current) {
      inputRef.current.value = value;
    }
  };

  useEffect(() => {
    if (siteKey) {
      return;
    }
    let mounted = true;
    fetch("/api/public-config", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!mounted) {
          return;
        }
        setFetchedKey(typeof data?.turnstileSiteKey === "string" ? data.turnstileSiteKey : null);
      })
      .catch(() => {
        if (mounted) {
          setFetchedKey(null);
        }
      });
    return () => {
      mounted = false;
    };
  }, [siteKey]);

  useEffect(() => {
    if (!resolvedKey) {
      return;
    }
    let mounted = true;

    const renderWidget = () => {
      if (!mounted || !containerRef.current || !window.turnstile) {
        return;
      }
      if (widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: resolvedKey,
        callback: (value: string) => writeToken(value),
        "expired-callback": () => writeToken(""),
      });
    };

    const ensureScript = () => {
      if (window.turnstile) {
        renderWidget();
        return;
      }
      const existing = document.getElementById(SCRIPT_ID);
      if (existing) {
        existing.addEventListener("load", renderWidget, { once: true });
        return;
      }
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      script.addEventListener("load", renderWidget);
      document.head.appendChild(script);
    };

    ensureScript();

    return () => {
      mounted = false;
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [resolvedKey]);

  useEffect(() => {
    if (!window.turnstile || !widgetIdRef.current) {
      return;
    }
    if (typeof window.turnstile.reset === "function") {
      window.turnstile.reset(widgetIdRef.current);
    } else if (typeof window.turnstile.remove === "function") {
      window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    }
    writeToken("");
  }, [resetSignal]);

  if (!resolvedKey) {
    return null;
  }

  return (
    <>
      <input ref={inputRef} type="hidden" name="turnstileToken" defaultValue="" />
      <div ref={containerRef} />
    </>
  );
}
