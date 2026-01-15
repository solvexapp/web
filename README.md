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

Ubicaciones recomendadas:

- Local: crear `./.env.local` (no se sube a GitHub).
- Producción (VPS): definirlas en el `docker-compose.yml` del repo `infra` o en un archivo `.env` que ese compose cargue.
- GitHub Actions: cargarlas como Secrets/Variables del repo si el workflow las usa.

Variables requeridas:

- NEXT_PUBLIC_WHATSAPP_NUMBER
- NEXT_PUBLIC_TURNSTILE_SITE_KEY
- TURNSTILE_SECRET_KEY
- DATABASE_URL
- DATABASE_SSL (opcional, `true` para habilitar SSL con `rejectUnauthorized: false`)
- CONTACT_MAIL_PROVIDER (`postmark`, `ses` o `smtp`)
- CONTACT_FROM
- CONTACT_TO (opcional, default `contacto@solvexapp.com`)
- POSTMARK_TOKEN (si `CONTACT_MAIL_PROVIDER=postmark`)
- SMTP_HOST (si `CONTACT_MAIL_PROVIDER=smtp`)
- SMTP_PORT (si `CONTACT_MAIL_PROVIDER=smtp`)
- SMTP_USER (si `CONTACT_MAIL_PROVIDER=smtp`)
- SMTP_PASS (si `CONTACT_MAIL_PROVIDER=smtp`)
- SMTP_SECURE (opcional, `true` para SSL directo, default `true` si el puerto es 465)
- AWS_ACCESS_KEY_ID (si `CONTACT_MAIL_PROVIDER=ses`)
- AWS_SECRET_ACCESS_KEY (si `CONTACT_MAIL_PROVIDER=ses`)
- AWS_REGION (si `CONTACT_MAIL_PROVIDER=ses`)
- AWS_SESSION_TOKEN (opcional, si `CONTACT_MAIL_PROVIDER=ses`)
- CONTACT_RATE_LIMIT_MAX (opcional, default `5`)
- CONTACT_RATE_LIMIT_WINDOW_SECONDS (opcional, default `600`)
- ADMIN_USER (para `/admin`)
- ADMIN_PASSWORD (para `/admin`)
- ADMIN_SESSION_SECRET (firmar sesión del panel `/admin`)
- ADMIN_LOGIN_RATE_LIMIT_MAX (opcional, default `10`)
- ADMIN_LOGIN_RATE_LIMIT_WINDOW_SECONDS (opcional, default `600`)

Ejemplo de `.env.local` (valores de muestra):

NEXT_PUBLIC_WHATSAPP_NUMBER=54911XXXXXXXX
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
DATABASE_URL=postgres://user:password@host:5432/dbname
DATABASE_SSL=false
CONTACT_MAIL_PROVIDER=postmark
CONTACT_FROM=contacto@solvexapp.com
CONTACT_TO=contacto@solvexapp.com
POSTMARK_TOKEN=your_postmark_token
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=contacto@solvexapp.com
SMTP_PASS=your_app_password
SMTP_SECURE=true
CONTACT_RATE_LIMIT_MAX=5
CONTACT_RATE_LIMIT_WINDOW_SECONDS=600
ADMIN_USER=admin
ADMIN_PASSWORD=your_admin_password
ADMIN_SESSION_SECRET=your_admin_session_secret
ADMIN_LOGIN_RATE_LIMIT_MAX=10
ADMIN_LOGIN_RATE_LIMIT_WINDOW_SECONDS=600

Qué subir a GitHub:
- Sí: código, `README.md`, configs y (si querés) un `.env.example` con placeholders.
- No: `/.env*` con valores reales, tokens o credenciales.

CI/CD rápido (sin UI):
- Podés cargar varios secrets de una sola vez con GitHub CLI:
  `gh secret set -f .env`

Nota CI/CD:
- El workflow actual solo requiere `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY` como secrets de GitHub.
- Las variables de la app (DB, SMTP, Turnstile, admin) van en el `.env` del VPS usado por `docker compose` (repo `infra`), no en GitHub.

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
