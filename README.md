# Solvex Web

Sitio web de Solvex (marketing + contacto), construido con **Next.js (App Router)** y desplegado en un VPS con **Docker + Nginx**.

## Stack
- Next.js (App Router)
- React
- Tailwind CSS
- Node.js 20
- Docker / Docker Compose
- Nginx (reverse proxy)

## Requisitos
### Desarrollo local
- Node.js 20+
- pnpm (recomendado)

### Producción
- Docker
- Docker Compose

## Desarrollo local

Instalar dependencias:

pnpm install

Levantar servidor de desarrollo:

pnpm dev

Abrir en el navegador:

http://localhost:3000

## Producción (VPS)

El sitio corre como contenedor Node detrás de Nginx.

Desde el VPS:

cd ~/solvex/infra
docker compose up -d web
docker compose logs -f web

Nginx actúa como reverse proxy hacia el servicio `web` en el puerto 3000.

## Variables de entorno

Configuradas vía `docker-compose.yml`:

- NEXT_PUBLIC_WHATSAPP_NUMBER
- NEXT_PUBLIC_TURNSTILE_SITE_KEY
- TURNSTILE_SECRET_KEY
- DATABASE_URL
- DATABASE_SSL (opcional, `true` para habilitar SSL con `rejectUnauthorized: false`)
- CONTACT_MAIL_PROVIDER (`postmark` o `ses`)
- CONTACT_FROM
- CONTACT_TO (opcional, default `contacto@solvexapp.com`)
- POSTMARK_TOKEN (si `CONTACT_MAIL_PROVIDER=postmark`)
- AWS_ACCESS_KEY_ID (si `CONTACT_MAIL_PROVIDER=ses`)
- AWS_SECRET_ACCESS_KEY (si `CONTACT_MAIL_PROVIDER=ses`)
- AWS_REGION (si `CONTACT_MAIL_PROVIDER=ses`)
- AWS_SESSION_TOKEN (opcional, si `CONTACT_MAIL_PROVIDER=ses`)
- CONTACT_RATE_LIMIT_MAX (opcional, default `5`)
- CONTACT_RATE_LIMIT_WINDOW_SECONDS (opcional, default `600`)
- ADMIN_USER (para `/admin`)
- ADMIN_PASSWORD (para `/admin`)
- ADMIN_SESSION_SECRET (firmar sesión del panel `/admin`)

Si usás GitHub Actions o algún CI/CD, las mismas variables deben cargarse como secrets/vars del repositorio.

## Estructura del proyecto

/
- app/
  - page.tsx           Landing principal
  - layout.tsx         Layout raíz
  - globals.css        Estilos globales
  - api/contact        Endpoint de contacto
- public/              Assets estáticos (incluye `solvex-logo.svg`, `solvex-mark.svg` y `favicon.svg`)
- next.config.ts
- tsconfig.json

## Endpoint de contacto

POST /api/contact

Actualmente:
- Valida datos con Zod y verifica Turnstile.
- Aplica rate limit por IP.
- Persiste en Postgres (`contact_messages` y `contact_rate_limits`).
- Envía email vía Postmark o SES.

## Estado actual del backend

- El proyecto incluye el backend del formulario de contacto.
- Se agregó un mini CRM mínimo en `/admin` con listado de contactos.
- Autenticación con login y sesión firmada para el panel `/admin` (no usa Basic Auth).
- No incluye autenticación social todavía (pendiente).

## Deployment

El deploy se realiza por pull + restart del contenedor:

git pull
docker compose up -d web

## Licencia

© Solvex. Uso interno.
