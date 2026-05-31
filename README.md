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

El portfolio ya tiene preparado el CTA del CV. Para activarlo como descarga directa:

1. Colocar el archivo en `public/assets/Nicolas-Gabriel-Raffonaud-CV.pdf`
2. Cambiar `cvAvailable` a `true` en [src/data/portfolioData.jsx](./src/data/portfolioData.jsx)

Mientras no exista el PDF, el sitio muestra `Solicitar CV` como CTA por email.

### Preview real del portfolio

La card de `Portfolio Personal` ya tiene un mockup profesional. Si queres reemplazarlo por una captura real:

1. Guardar una imagen en `public/assets/projects/portfolio-preview.png`
2. Actualizar la data del proyecto en [src/data/portfolioData.jsx](./src/data/portfolioData.jsx) para usar ese asset

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
