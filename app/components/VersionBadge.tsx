"use client";

import { useEffect, useState } from "react";

export function VersionBadge() {
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch("/api/version", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!isMounted) {
          return;
        }
        if (data?.version) {
          setVersion(String(data.version));
        }
      })
      .catch(() => {
        if (isMounted) {
          setVersion(null);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!version) {
    return null;
  }

  const shortVersion = version.length > 8 ? version.slice(0, 8) : version;
  return (
    <span className="text-xs text-[var(--muted)]" title={version}>
      v{shortVersion}
    </span>
  );
}
