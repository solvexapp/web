import Link from "next/link";
import { DEFAULT_WA_TEXT, whatsappLink } from "@/lib/site";

export function WhatsAppFab({ text = DEFAULT_WA_TEXT }: { text?: string }) {
  return (
    <Link
      href={whatsappLink(text)}
      target="_blank"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-3 text-sm font-medium text-[var(--paper)] shadow-soft hover:bg-black"
      aria-label="WhatsApp Solvex"
    >
      WhatsApp
    </Link>
  );
}
