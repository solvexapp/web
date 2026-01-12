import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
