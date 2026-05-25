import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de Solvex para productos SaaS, integraciones y Solvex for Education.",
  alternates: { canonical: "/legal/privacidad" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen text-[var(--ink)]">
      <Header />
      <article className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <p className="text-sm font-medium text-[var(--muted)]">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Política de privacidad
        </h1>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Última actualización: 25 de mayo de 2026
        </p>

        <div className="mt-10 space-y-8 text-base leading-7 text-[var(--muted)]">
          <Section title="Alcance">
            Esta política aplica a los productos SaaS de Solvex, incluyendo Solvex for Education,
            y a los servicios de integración operados por Solvex. Cuando una institución usa un
            dominio propio o una experiencia white label, Solvex puede actuar como proveedor
            tecnológico del servicio.
          </Section>

          <Section title="Datos que tratamos">
            Podemos tratar datos de cuenta, identidad, contacto, tenant, membresías, roles,
            preferencias de sesión, registros de auditoría, datos operativos cargados por el
            cliente y metadatos técnicos necesarios para seguridad, soporte y continuidad del
            servicio.
          </Section>

          <Section title="Uso de Google y login social">
            Cuando una persona inicia sesión con Google, usamos la información autorizada por esa
            persona para autenticarla, vincular su cuenta y permitir el acceso al tenant correcto.
            Los datos recibidos desde APIs de Google se usan solamente para las finalidades
            informadas en el producto y no se venden ni se transfieren para publicidad.
          </Section>

          <Section title="Finalidades">
            Usamos la información para autenticar usuarios, administrar tenants, operar productos
            contratados, prestar soporte, prevenir abuso, auditar cambios, cumplir obligaciones
            contractuales y mejorar estabilidad, seguridad y calidad del servicio.
          </Section>

          <Section title="Clientes y usuarios finales">
            Los clientes administran los datos institucionales que cargan en la plataforma. En
            contextos educativos, la institución puede definir políticas propias de privacidad y
            tratamiento de datos que complementan esta política.
          </Section>

          <Section title="Seguridad y retención">
            Aplicamos controles de acceso, registros de auditoría, separación por tenant y medidas
            razonables de protección técnica y organizativa. Conservamos datos mientras sean
            necesarios para operar el servicio, cumplir obligaciones legales o resolver soporte,
            salvo que corresponda eliminarlos antes.
          </Section>

          <Section title="Contacto">
            Para consultas de privacidad, escribinos a{" "}
            <a href="mailto:privacy@solvexapp.com" className="text-[var(--ink)] underline">
              privacy@solvexapp.com
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
