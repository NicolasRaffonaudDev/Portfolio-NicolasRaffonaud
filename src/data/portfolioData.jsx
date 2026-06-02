import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiBootstrap,
  SiDocker,
  SiNetlify,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithubcopilot,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRailway,
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

export const profile = {
  name: 'Nicolas Gabriel Raffonaud',
  role: 'Frontend Developer React',
  headline: 'Construyo aplicaciones web modernas con React, JavaScript y TypeScript.',
  focus:
    'Actualmente desarrollo proyectos full stack con Node.js, Express, PostgreSQL y Prisma, con foco en producto real, criterio tecnico y mejora continua.',
  availability: 'Disponible para oportunidades Frontend React y Full Stack Junior en Argentina y LATAM.',
  location: 'Argentina | LATAM',
  email: 'nicolasraffonaudsoft@gmail.com',
  githubUrl: 'https://github.com/NicolasRaffonaudDev',
  linkedinUrl: 'https://ar.linkedin.com/in/nicolas-gabriel-raffonaud-9aa988106',
  whatsappUrl: 'https://wa.me/5491126252321',
  siteUrl: 'https://nicolasraffonaud.netlify.app/',
  cvUrl: '/assets/Nicolas-Gabriel-Raffonaud-CV.pdf',
  cvAvailable: true,
  cvFileName: 'public/assets/Nicolas-Gabriel-Raffonaud-CV.pdf',
};

export const about = {
  title: 'Sobre mi',
  paragraphs: [
    'Vengo de experiencia tecnica y soporte, y reoriente mi perfil hacia el desarrollo frontend y full stack con una base de aprendizaje practico y construccion constante.',
    'Desarrolle este portfolio yo mismo con React y Vite como parte de ese proceso. Me interesa resolver problemas, mejorar experiencia de usuario y construir productos web que conecten necesidad real con una solucion clara.',
    'Uso herramientas de IA como ChatGPT, Copilot y Codex para investigar, depurar, acelerar iteraciones y revisar alternativas, pero siempre involucrandome activamente en las decisiones tecnicas y en la comprension del codigo.',
  ],
  highlights: [
    'Interfaces SPA en React con foco en claridad, componentes reutilizables y responsive design.',
    'Experiencia practica full stack conectando frontend, backend, base de datos y despliegue.',
    'Perfil autodidacta, orientado a producto y comodo trabajando con problemas reales de implementacion.',
  ],
};

export const featuredProject = {
  title: 'Raices Puntanas',
  subtitle: 'Plataforma full stack de gestion comercial e inmobiliaria',
  status: 'Staging en Railway | En validacion funcional',
  description:
    'Aplicacion web full stack desarrollada como proyecto real. Integra frontend, backend, base de datos, autenticacion, roles, gestion comercial y despliegue cloud, con una estructura preparada para seguir evolucionando hacia un entorno productivo mas robusto.',
  stack: [
    'React',
    'TypeScript',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Prisma',
    'Docker',
    'Railway',
  ],
  technicalDetails: [
    'JWT',
    'RBAC/roles',
    'REST API',
    'Google Maps',
    'React Query',
    'Zod',
    'Nginx',
    'CRM',
    'Gestion de imagenes',
  ],
  gallery: [
    {
      key: 'dashboard',
      label: 'Dashboard',
      alt: 'Dashboard administrativo con metricas y accesos rapidos',
      sources: [
        '/assets/projects/raices-dashboard.webp',
        '/assets/projects/raices-dashboard.png',
      ],
    },
    {
      key: 'crm',
      label: 'CRM',
      alt: 'Vista CRM con gestion de clientes y seguimiento comercial',
      sources: [
        '/assets/projects/raices-crm.webp',
        '/assets/projects/raices-crm.png',
      ],
    },
    {
      key: 'lotes',
      label: 'Lotes',
      alt: 'Modulo de lotes con listado visual y datos de gestion',
      sources: [
        '/assets/projects/raices-lotes.webp',
        '/assets/projects/raices-lotes.png',
      ],
    },
    {
      key: 'detail',
      label: 'Detalle',
      alt: 'Pantalla de detalle de propiedad o lote con informacion ampliada',
      sources: [
        '/assets/projects/raices-detail.webp',
        '/assets/projects/raices-detail.png',
      ],
    },
    {
      key: 'login',
      label: 'Login',
      alt: 'Pantalla de login con acceso por roles',
      sources: [
        '/assets/projects/raices-login.webp',
        '/assets/projects/raices-login.png',
      ],
    },
    {
      key: 'mobile',
      label: 'Mobile',
      alt: 'Vista mobile responsive de Raices Puntanas',
      sources: [
        '/assets/projects/raices-mobile.webp',
        '/assets/projects/raices-mobile.png',
      ],
    },
  ],
  features: [
    'Autenticacion JWT y sistema de roles.',
    'CRUD de lotes, clientes, ventas e inventario.',
    'Dashboard administrativo y gestion comercial.',
    'CRM para consultas, seguimiento e integracion de mapas.',
    'Persistencia de imagenes y API REST con Express.',
    'Modelado relacional con PostgreSQL y Prisma.',
  ],
  challenges: [
    'Resolucion de CORS y configuracion entre servicios.',
    'Deploy cloud en Railway con preparacion para migracion a VPS.',
    'Persistencia de archivos y debugging de errores reales.',
    'Configuracion de Docker, Nginx y conectividad PostgreSQL/Prisma.',
  ],
  mockupItems: ['Login y roles', 'Dashboard', 'CRM', 'Lotes', 'Mobile ready'],
};

export const secondaryProjects = [
  {
    title: 'E-commerce GuaridaHW',
    eyebrow: 'Proyecto de aprendizaje solido',
    status: 'Proyecto secundario',
    description:
      'Proyecto de aprendizaje solido enfocado en arquitectura frontend con React, React Router y Firebase. Incluye SPA, carrito de compras, componentes reutilizables, render dinamico y una base muy util para entender organizacion de estado, navegacion y flujos de ecommerce.',
    previewSources: ['/assets/projects/guaridahw2.gif'],
    previewAlt: 'Preview temporal del ecommerce GuaridaHW con animacion del catalogo',
    previewType: 'store',
    liveLink: 'https://guaridahw.netlify.app/',
    codeLink: 'https://github.com/NicolasRaffonaudDev/guaridahw',
    liveLabel: 'Ver demo',
    tech: ['React', 'React Router', 'Firebase', 'Bootstrap', 'SPA'],
    deploy: 'Netlify',
    note: 'Usa un GIF temporal real como preview. A futuro conviene reemplazarlo por capturas optimizadas en WebP o un video mas liviano.',
  },
  {
    title: 'Portfolio Personal',
    eyebrow: 'Proyecto propio desarrollado desde cero',
    status: 'Proyecto secundario',
    description:
      'Portfolio desarrollado desde cero como parte de mi evolucion profesional, aplicando React, Vite, componentizacion, responsive design, modo claro/oscuro, animaciones, organizacion de datos y optimizacion de presentacion para recruiters.',
    previewType: 'portfolio',
    previewSources: [
      '/assets/projects/portfolio-preview.webp',
      '/assets/projects/portfolio-preview.png',
    ],
    previewAlt: 'Captura real del portfolio con hero y proyecto destacado',
    liveLink: 'https://nicolasraffonaud.netlify.app/',
    codeLink: 'https://github.com/NicolasRaffonaudDev/Portfolio-NicolasRaffonaud',
    liveLabel: 'Ver sitio',
    tech: ['React', 'Vite', 'JavaScript', 'Bootstrap/CSS', 'tsparticles'],
    deploy: 'Netlify',
    note: 'Ya usa captura real desde public/assets/projects/portfolio-preview.webp o .png cuando el asset esta disponible.',
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      {
        name: 'React',
        icon: <FaReact style={{ color: '#61dafb' }} />,
        description: 'Interfaces componentizadas y SPA.',
      },
      {
        name: 'TypeScript',
        icon: <SiTypescript style={{ color: '#3178c6' }} />,
        description: 'Tipado progresivo en proyectos reales.',
      },
      {
        name: 'JavaScript',
        icon: <FaJs style={{ color: '#f7df1e' }} />,
        description: 'Logica, eventos y datos dinamicos.',
      },
      {
        name: 'HTML5',
        icon: <FaHtml5 style={{ color: '#e34c26' }} />,
        description: 'Estructura semantica y accesible.',
      },
      {
        name: 'CSS3',
        icon: <FaCss3Alt style={{ color: '#2965f1' }} />,
        description: 'Layouts responsive y estilos modernos.',
      },
      {
        name: 'React Router',
        icon: <SiReactrouter style={{ color: '#ca4245' }} />,
        description: 'Navegacion SPA y rutas dinamicas.',
      },
      {
        name: 'Vite',
        icon: <SiVite style={{ color: '#646cff' }} />,
        description: 'Entornos rapidos de desarrollo frontend.',
      },
      {
        name: 'Bootstrap',
        icon: <SiBootstrap style={{ color: '#7c3aed' }} />,
        description: 'Componentes y layout responsive.',
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss style={{ color: '#38bdf8' }} />,
        description: 'Utilidades para interfaces modernas.',
      },
    ],
  },
  {
    title: 'Backend',
    items: [
      {
        name: 'Node.js',
        icon: <SiNodedotjs style={{ color: '#3c873a' }} />,
        description: 'Backend y APIs REST.',
      },
      {
        name: 'Express.js',
        icon: <SiExpress style={{ color: '#222' }} />,
        description: 'Rutas, middlewares y servicios.',
      },
    ],
  },
  {
    title: 'Base de datos',
    items: [
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql style={{ color: '#336791' }} />,
        description: 'Modelado relacional y persistencia.',
      },
      {
        name: 'Prisma ORM',
        icon: <SiPrisma style={{ color: '#2d3748' }} />,
        description: 'Migrations y acceso tipado a datos.',
      },
      {
        name: 'Firebase',
        icon: <SiFirebase style={{ color: '#ffcb2b' }} />,
        description: 'Persistencia y servicios para frontend.',
      },
    ],
  },
  {
    title: 'DevOps y Deploy',
    items: [
      {
        name: 'Docker',
        icon: <SiDocker style={{ color: '#2496ed' }} />,
        description: 'Entornos reproducibles y despliegue.',
      },
      {
        name: 'Docker Compose',
        icon: <SiDocker style={{ color: '#1d63ed' }} />,
        description: 'Orquestacion local de servicios.',
      },
      {
        name: 'Nginx',
        icon: <SiNginx style={{ color: '#009639' }} />,
        description: 'Reverse proxy y routing de SPA.',
      },
      {
        name: 'Railway',
        icon: <SiRailway style={{ color: '#0b0d0e' }} />,
        description: 'Staging y despliegue cloud.',
      },
      {
        name: 'Netlify',
        icon: <SiNetlify style={{ color: '#00ad9f' }} />,
        description: 'Deploy automatico de frontend.',
      },
    ],
  },
  {
    title: 'Herramientas',
    items: [
      {
        name: 'Git',
        icon: <SiGit style={{ color: '#f05033' }} />,
        description: 'Control de versiones.',
      },
      {
        name: 'GitHub',
        icon: <FaGithub style={{ color: '#333' }} />,
        description: 'Repositorios y documentacion tecnica.',
      },
      {
        name: 'IA asistida',
        icon: <SiGithubcopilot style={{ color: '#0ea5e9' }} />,
        description: 'Debugging, investigacion y mejora iterativa.',
      },
    ],
  },
];
