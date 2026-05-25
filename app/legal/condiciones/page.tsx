import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "Condiciones de servicio",
  description:
    "Condiciones de servicio de Solvex para productos SaaS, integraciones y Solvex for Education.",
  alternates: { canonical: "/legal/condiciones" },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen text-[var(--ink)]">
      <Header />
      <article className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <p className="text-sm font-medium text-[var(--muted)]">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Condiciones de servicio
        </h1>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Última actualización: 25 de mayo de 2026
        </p>

        <div className="mt-10 space-y-8 text-base leading-7 text-[var(--muted)]">
          <Section title="Alcance del servicio">
            Estas condiciones aplican al uso de los productos y servicios operados por Solvex,
            incluyendo Solvex for Education, Solvex ExpenseFlow, integraciones y experiencias
            white label provistas sobre dominios o marcas de clientes.
          </Section>

          <Section title="Cuentas y acceso">
            Los usuarios deben utilizar credenciales propias, mantenerlas protegidas y acceder
            solo a tenants, productos y módulos para los que tengan autorización. Solvex puede
            suspender accesos cuando detecte abuso, riesgo de seguridad o uso no autorizado.
          </Section>

          <Section title="Responsabilidades del cliente">
            Cada cliente es responsable por la información que carga, por la administración de sus
            usuarios, dominios, permisos, configuraciones de marca y cumplimiento de políticas
            institucionales o regulatorias aplicables a su operación.
          </Section>

          <Section title="Servicios white label">
            Una experiencia white label puede ocultar o reducir la marca Solvex ante usuarios
            finales, pero Solvex puede seguir operando identidad, autenticación, dominios, soporte
            técnico y procesamiento de datos como proveedor tecnológico, salvo acuerdo específico.
          </Section>

          <Section title="Integraciones de terceros">
            Algunas funciones dependen de proveedores externos, como Google, servicios de correo,
            almacenamiento, pasarelas de pago o sistemas institucionales. El uso de esas
            integraciones también puede estar sujeto a las condiciones de cada proveedor.
          </Section>

          <Section title="Disponibilidad y cambios">
            Solvex trabaja para mantener el servicio disponible y seguro. Podemos actualizar
            funcionalidades, contratos técnicos, políticas o interfaces cuando sea necesario para
            mejorar el producto, resolver riesgos o cumplir requisitos legales y de proveedores.
          </Section>

          <Section title="Contacto">
            Para consultas sobre estas condiciones, escribinos a{" "}
            <a href="mailto:legal@solvexapp.com" className="text-[var(--ink)] underline">
              legal@solvexapp.com
            </a>
            .
          </Section>
        </div>
      </article>
      <Footer />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-[var(--ink)]">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}
