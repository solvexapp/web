import Image from "next/image";
import Link from "next/link";
import { DEFAULT_WA_TEXT, PRIMARY_NAV, whatsappLink } from "@/lib/site";

export function Header() {
  const waHref = whatsappLink(DEFAULT_WA_TEXT);

  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-[var(--paper)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="Solvex inicio">
          <Image
            src="/solvex-logo.svg"
            alt="Solvex"
            width={220}
            height={48}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-[var(--muted)] lg:flex">
          {PRIMARY_NAV.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[var(--ink)]">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={waHref}
            target="_blank"
            className="hidden rounded-xl border border-black/10 px-3 py-2 text-xs font-medium hover:bg-white/60 sm:inline-flex sm:text-sm"
          >
            WhatsApp
          </Link>
          <Link
            href="/#contacto"
            className="rounded-xl bg-[var(--ink)] px-3 py-2 text-xs font-medium text-[var(--paper)] hover:bg-black sm:text-sm"
          >
            Contactar
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-6xl overflow-x-auto px-4 pb-2 lg:hidden">
        <nav className="flex gap-4 whitespace-nowrap text-xs text-[var(--muted)]">
          {PRIMARY_NAV.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[var(--ink)]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
