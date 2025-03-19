import React from "react";
import { FaBootstrap, FaCss3Alt, FaGit, FaGithub, FaHtml5, FaJs, FaReact, FaSass } from "react-icons/fa";
import { SiFirebase, SiNetlify, SiTailwindcss, SiVercel, SiVite, SiWebpack } from "react-icons/si";


export const skillsData = [
  { 
    name: "HTML5", 
    icon: <FaHtml5 />,
    color: "#e34c26",
    description: "Maquetación semántica avanzada en proyectos como GuaridaHW, optimizando SEO y accesibilidad."
},
  { 
    name: "CSS3", 
    icon: <FaCss3Alt />,
    color: "#2965f1", 
    description: "Creación de sistemas de diseño responsivo con Grid/Flexbox. Animaciones complejas y optimización de rendimiento usando técnicas de renderizado GPU."
},
  { 
    name: "JavaScript", 
    icon: <FaJs />, 
    color: "#f7df1e",
    description: "Desarrollo de lógica compleja en e-commerce: carrito dinámico, validación de formularios e integración con APIs. Dominio de ES6+, patrones de diseño y Web APIs." 
},
  { 
    name: "React", 
    icon: <FaReact />, 
    color: "#61dafb",
    description: "Arquitectura de componentes reutilizables en GuaridaHW. Manejo de estado con Context API + custom hooks. Optimización con memoización y lazy loading."
},
  { 
    name: "Bootstrap", 
    icon: <FaBootstrap />, 
    color: "#563d7c",
    description: "Prototipado rápido de interfaces. Personalización avanzada mediante Sass y override de utilidades. Integración con Vite en 5+ proyectos."
},
  { 
    name: "Git", 
    icon: <FaGit />,
    color: "#f05033",
    description: "Flujo de trabajo profesional con Git Flow. Resolución de conflictos complejos y uso estratégico de rebase vs merge en proyectos."
},
  { 
    name: "GitHub", 
    icon: <FaGithub />,
    color: "#333",
    description: "Gestión de proyectos con Issues y Projects. CI/CD con GitHub Actions. Colaboración en equipo mediante PRs con revisión de código estructurada."
},
  { 
    name: "Sass/SCSS", 
    icon: <FaSass />,
    color: "#cc6699",
    description: "Sistemas de theming escalables. Mixins avanzados para responsive design."
},
  { 
    name: "Firebase", 
    icon: <SiFirebase />,
    color: "#ffcb2b",
    description: "Backend completo para GuaridaHW: Auth, Firestore y Cloud Functions. Implementación de reglas de seguridad y optimización de costos."
},
  { 
    name: "Vite", 
    icon: <SiVite />, 
    color: "#646cff",
    description: "Configuración avanzada de entornos (dev/prod). Optimización de builds con análisis de bundle. Plugins personalizados para assets estáticos."
},
  { 
    name: "Vercel", 
    icon: <SiVercel />,
    color: "#000",
    description: "Despliegue continuo con previews para cada PR. Configuración de Serverless Functions y edge caching para máxima performance."
},
  { 
    name: "Webpack", 
    icon: <SiWebpack />,
    color: "#8ed6fb",
    description: "Configuración desde cero para legacy projects. Code splitting estratégico y optimización de assets con loaders personalizados."
},
  { 
    name: "TailwindCSS", 
    icon: <SiTailwindcss />,
    color: "#38bdf8",
    description: "Diseño utility-first con configuración personalizada. Integración con PostCSS y creación de componentes con @apply."
},
  { 
    name: "Netlify", 
    icon: <SiNetlify />,
    color: "#00c7b7",
    description: "Despliegue de proyectos fullstack con funciones serverless. A/B testing implementado."
}
];