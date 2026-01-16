"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const steps = Array.from(document.querySelectorAll<HTMLElement>(".scroll-step"));
    if (steps.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!(entry.target instanceof HTMLElement)) {
            continue;
          }
          if (entry.isIntersecting) {
            entry.target.dataset.active = "true";
          } else {
            delete entry.target.dataset.active;
          }
        }
      },
      { threshold: 0.45 },
    );

    steps.forEach((step) => observer.observe(step));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
