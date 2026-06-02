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
  headline: 'Construyo interfaces modernas y aplicaciones web con React, JavaScript y TypeScript.',
  focus:
    'Estoy ampliando mi perfil hacia Full Stack con Node.js, Express, PostgreSQL y Prisma, construyendo proyectos propios con foco en producto real y criterio tecnico.',
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
    'Vengo de una base tecnica en soporte y resolucion de problemas. Hoy estoy enfocado en desarrollo frontend y full stack, construyendo proyectos propios que me permiten aplicar lo aprendido en escenarios reales.',
    'Este portfolio y Raices Puntanas forman parte de ese recorrido. Me interesa resolver problemas concretos, cuidar la experiencia de usuario y convertir una necesidad real en una solucion clara.',
    'Uso herramientas de IA como apoyo para investigar, depurar y acelerar iteraciones, manteniendo criterio tecnico y participacion activa en cada decision.',
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
  status: 'Staging en Railway | Entorno de prueba funcional',
  description:
    'Mi proyecto principal: una plataforma full stack de gestion comercial e inmobiliaria, hoy desplegada en Railway como entorno de staging. Integra frontend, backend, base de datos, autenticacion, roles y flujos de gestion pensados para un caso de uso real.',
  demoUrl: 'https://frontend-production-1cb7e.up.railway.app/',
  demoLabel: 'Ver demo en Railway',
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
      variant: 'mobile',
      sources: [
        '/assets/projects/raices-mobile.webp',
        '/assets/projects/raices-mobile.png',
      ],
    },
  ],
  features: [
    'Autenticacion JWT con control de acceso por roles.',
    'Gestion de lotes, clientes, ventas e inventario.',
    'Dashboard administrativo para seguimiento comercial.',
    'CRM para consultas, seguimiento e integracion con mapas.',
    'API REST con Express y manejo de imagenes.',
    'Modelado relacional con PostgreSQL y Prisma.',
  ],
  challenges: [
    'Configuracion entre servicios, CORS y variables de entorno.',
    'Deploy en Railway con una base preparada para seguir escalando.',
    'Persistencia de archivos y debugging de errores reales.',
    'Docker, Nginx y conectividad entre PostgreSQL y Prisma.',
  ],
  mockupItems: ['Login y roles', 'Dashboard', 'CRM', 'Lotes', 'Mobile ready'],
};

export const secondaryProjects = [
  {
    title: 'E-commerce GuaridaHW',
    eyebrow: 'Proyecto de aprendizaje practico',
    status: 'Aprendizaje aplicado',
    description:
      'Proyecto de aprendizaje en React enfocado en arquitectura frontend. Incluye SPA, carrito de compras, componentes reutilizables, render dinamico y una base solida para trabajar navegacion, estado y flujos de ecommerce.',
    previewSources: ['/assets/projects/guaridahw2.gif'],
    previewAlt: 'Preview temporal del ecommerce GuaridaHW con animacion del catalogo',
    previewType: 'store',
    liveLink: 'https://guaridahw.netlify.app/',
    codeLink: 'https://github.com/NicolasRaffonaudDev/guaridahw',
    liveLabel: 'Ver demo',
    tech: ['React', 'React Router', 'Firebase', 'Bootstrap', 'SPA'],
    deploy: 'Netlify',
    note: 'Lo presento como una base fuerte de aprendizaje frontend. El preview actual es temporal y mas adelante conviene reemplazarlo por capturas optimizadas.',
  },
  {
    title: 'Portfolio Personal',
    eyebrow: 'Proyecto propio desarrollado desde cero',
    status: 'Proyecto complementario',
    description:
      'Portfolio desarrollado desde cero como parte de mi evolucion profesional, aplicando React, Vite, componentizacion, responsive design, modo claro/oscuro, animaciones y una presentacion pensada para recruiters.',
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
    note: 'Ademas de presentarme, este proyecto me sirvio para trabajar estructura, copy, jerarquia visual y experiencia de navegacion.',
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
        name: 'IA aplicada',
        icon: <SiGithubcopilot style={{ color: '#0ea5e9' }} />,
        description: 'Investigacion, debugging y mejora iterativa.',
      },
    ],
  },
];
