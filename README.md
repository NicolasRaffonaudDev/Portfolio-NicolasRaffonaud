# Portfolio Nicolas Raffonaud

Portfolio profesional desarrollado con React, Vite, JavaScript, Bootstrap/CSS y `react-tsparticles` para presentar proyectos, stack tecnico y perfil orientado a oportunidades Frontend React y Full Stack Junior.

## Stack

- React 18
- Vite
- JavaScript
- Bootstrap + CSS custom
- react-icons
- react-tsparticles

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Deploy en Netlify

Configuracion recomendada:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: usar una version LTS compatible con Vite 5

Este proyecto esta preparado para deploy en Netlify y para integrarse con deploy automatico desde GitHub al conectar el repositorio en Netlify.

Flujo sugerido:

1. Conectar el repositorio de GitHub en Netlify.
2. Configurar `npm run build` como build command.
3. Configurar `dist` como output directory.
4. Habilitar deploys automaticos sobre `master`.

## Assets preparados

### CV

El portfolio ya usa el CV publico desde:

`public/assets/Nicolas-Gabriel-Raffonaud-CV.pdf`

El CTA actual apunta a:

`/assets/Nicolas-Gabriel-Raffonaud-CV.pdf`

Si en una futura iteracion queres volver al fallback, alcanza con ajustar `cvAvailable` y `cvUrl` en [src/data/portfolioData.jsx](./src/data/portfolioData.jsx).

### Preview real del portfolio

La card de `Portfolio Personal` ya tiene un mockup profesional y busca automaticamente:

- `public/assets/projects/portfolio-preview.webp`
- `public/assets/projects/portfolio-preview.png`

Si no encuentra ninguna, mantiene el placeholder actual.

### Capturas de Raices Puntanas

La galeria del proyecto destacado busca estas rutas, en este orden:

- `public/assets/projects/raices-dashboard.webp`
- `public/assets/projects/raices-dashboard.png`
- `public/assets/projects/raices-crm.webp`
- `public/assets/projects/raices-crm.png`
- `public/assets/projects/raices-lotes.webp`
- `public/assets/projects/raices-lotes.png`
- `public/assets/projects/raices-detail.webp`
- `public/assets/projects/raices-detail.png`
- `public/assets/projects/raices-login.webp`
- `public/assets/projects/raices-login.png`
- `public/assets/projects/raices-mobile.webp`
- `public/assets/projects/raices-mobile.png`

La UI no se rompe si faltan archivos: muestra la galeria solo con las capturas disponibles y, si no hay ninguna, conserva el mockup tecnico.

## SEO y share

El proyecto ya incluye:

- `lang="es"`
- title profesional
- meta description orientada a recruiters
- Open Graph basico
- Twitter card basica
- canonical de Netlify

Siguiente mejora recomendada:

- agregar una imagen social dedicada para `og:image` y `twitter:image`

## Dominio propio

Netlify permite sumar un dominio personalizado sin cambiar el flujo actual. Recomendacion para una futura iteracion:

- comprar un dominio tipo `nicolasraffonaud.dev` o `nicolasraffonaud.com`
- mantener Netlify como hosting principal
- apuntar DNS y conservar deploy automatico desde GitHub

Proxima mejora recomendada: configurar dominio propio cuando el portfolio ya tenga sus capturas finales y el CV publico cargado.
