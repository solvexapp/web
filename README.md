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

## Estructura del proyecto

apps/web
- app/
  - page.tsx           Landing principal
  - layout.tsx         Layout raíz
  - globals.css        Estilos globales
  - api/contact        Endpoint de contacto
- public/              Assets estáticos
- next.config.ts
- tsconfig.json

## Endpoint de contacto

POST /api/contact

Actualmente:
- Recibe datos del formulario
- Loguea el mensaje (placeholder)

## Deployment

El deploy se realiza por pull + restart del contenedor:

git pull
docker compose up -d web

## Licencia

© Solvex. Uso interno.
