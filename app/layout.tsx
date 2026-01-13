import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.solvexapp.com"),
  alternates: {
    canonical: "https://www.solvexapp.com/",
  },
  title: {
    default: "Solvex",
    template: "%s · Solvex",
  },
  description:
    "Integraciones, ERP/CRM, automatización y data para empresas. Implementamos sistemas para que tu negocio opere sin fricción.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.solvexapp.com/",
    siteName: "Solvex",
    title: "Solvex",
    description:
      "Integraciones, ERP/CRM, automatización y data para empresas.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${spaceGrotesk.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
