export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "54911XXXXXXXX";

export function whatsappLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const DEFAULT_WA_TEXT =
  "Hola! Quiero hablar sobre integraciones/ERP/CRM con Solvex.";

export type NavLink = { href: string; label: string };

export const PRIMARY_NAV: NavLink[] = [
  { href: "/integraciones", label: "Integraciones" },
  { href: "/productos/expenseflow", label: "ExpenseFlow" },
  { href: "/productos/for-education", label: "for Education" },
  { href: "/#casos", label: "Casos" },
  { href: "/#contacto", label: "Contacto" },
];
