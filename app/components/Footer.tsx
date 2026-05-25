import Link from "next/link";
import { VersionBadge } from "./VersionBadge";

const FOOTER_LINKS = [
  { href: "/integraciones", label: "Integraciones" },
  { href: "/productos/expenseflow", label: "ExpenseFlow" },
  { href: "/productos/for-education", label: "for Education" },
  { href: "/#casos", label: "Casos" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contacto", label: "Contacto" },
  { href: "/legal/privacidad", label: "Privacidad" },
  { href: "/legal/condiciones", label: "Condiciones" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span>© {new Date().getFullYear()} Solvex</span>
          <VersionBadge />
        </div>
        <div className="flex flex-wrap gap-3 text-xs leading-relaxed sm:text-sm">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[var(--ink)]">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
