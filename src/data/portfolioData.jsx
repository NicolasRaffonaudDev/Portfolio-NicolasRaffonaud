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
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithubcopilot,
  SiNginx,
  SiNodedotjs,
  SiNpm,
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
  cvUrl: '',
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
    'Nginx',
    'Railway',
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
    description:
      'Proyecto de aprendizaje solido en React orientado a arquitectura frontend: SPA con React Router, render dinamico, carrito, componentes reutilizables y Firebase para persistencia y autenticacion.',
    preview: '/assets/Animation.gif',
    liveLink: 'https://guaridahw.netlify.app/',
    codeLink: 'https://github.com/NicolasRaffonaudDev/guaridahw',
    liveLabel: 'Ver demo',
    tech: ['React', 'React Router', 'Firebase', 'Bootstrap', 'SPA'],
  },
  {
    title: 'Portfolio Personal',
    description:
      'Portfolio propio desarrollado con React, Vite y JavaScript para presentar proyectos, skills y evolucion profesional. Incluye modo claro/oscuro, animaciones suaves, tsparticles y una estructura adaptable a nuevas versiones del perfil.',
    liveLink: 'https://nicolasraffonaud-portfolio.netlify.app/',
    codeLink: 'https://github.com/NicolasRaffonaudDev/Portfolio-NicolasRaffonaud',
    liveLabel: 'Ver portfolio',
    tech: ['React', 'Vite', 'JavaScript', 'Bootstrap/CSS', 'tsparticles'],
    placeholder: 'Portfolio React + Vite',
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      {
        name: 'React',
        icon: <FaReact style={{ color: '#61dafb' }} />,
        description: 'Construccion de interfaces componentizadas y SPA.',
      },
      {
        name: 'TypeScript',
        icon: <SiTypescript style={{ color: '#3178c6' }} />,
        description: 'Tipado progresivo aplicado en proyectos frontend y full stack.',
      },
      {
        name: 'JavaScript',
        icon: <FaJs style={{ color: '#f7df1e' }} />,
        description: 'Logica de interfaz, estado y comportamiento dinamico.',
      },
      {
        name: 'HTML5',
        icon: <FaHtml5 style={{ color: '#e34c26' }} />,
        description: 'Estructuras semanticas y contenido accesible.',
      },
      {
        name: 'CSS3',
        icon: <FaCss3Alt style={{ color: '#2965f1' }} />,
        description: 'Layouts responsive, componentes visuales y detalles de UI.',
      },
      {
        name: 'React Router',
        icon: <SiReactrouter style={{ color: '#ca4245' }} />,
        description: 'Navegacion SPA y organizacion de vistas.',
      },
      {
        name: 'Vite',
        icon: <SiVite style={{ color: '#646cff' }} />,
        description: 'Entorno de desarrollo rapido y builds optimizadas.',
      },
      {
        name: 'Bootstrap',
        icon: <SiBootstrap style={{ color: '#7c3aed' }} />,
        description: 'Base visual y grillas responsivas cuando el proyecto lo requiere.',
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss style={{ color: '#38bdf8' }} />,
        description: 'Estilos utility-first para interfaces iterables y consistentes.',
      },
    ],
  },
  {
    title: 'Backend',
    items: [
      {
        name: 'Node.js',
        icon: <SiNodedotjs style={{ color: '#3c873a' }} />,
        description: 'Servicios backend y logica de negocio en JavaScript.',
      },
      {
        name: 'Express',
        icon: <SiExpress style={{ color: '#222' }} />,
        description: 'APIs REST, middlewares y endpoints para aplicaciones reales.',
      },
      {
        name: 'REST APIs',
        icon: <span style={{ color: '#0d6efd', fontWeight: 700 }}>API</span>,
        description: 'Consumo y diseno de integraciones HTTP entre capas.',
      },
    ],
  },
  {
    title: 'Base de datos',
    items: [
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql style={{ color: '#336791' }} />,
        description: 'Modelado relacional y consultas para flujos de negocio.',
      },
      {
        name: 'Prisma ORM',
        icon: <SiPrisma style={{ color: '#2d3748' }} />,
        description: 'Modelos, migraciones y acceso tipado a datos.',
      },
      {
        name: 'Firebase',
        icon: <SiFirebase style={{ color: '#ffcb2b' }} />,
        description: 'Persistencia y autenticacion en proyectos frontend.',
      },
    ],
  },
  {
    title: 'DevOps y Deploy',
    items: [
      {
        name: 'Docker',
        icon: <SiDocker style={{ color: '#2496ed' }} />,
        description: 'Entornos de desarrollo y despliegue con contenedores.',
      },
      {
        name: 'Nginx',
        icon: <SiNginx style={{ color: '#009639' }} />,
        description: 'Proxy reverso y configuracion para servir aplicaciones.',
      },
      {
        name: 'Railway',
        icon: <SiRailway style={{ color: '#0b0d0e' }} />,
        description: 'Deploy cloud y validacion de entornos de staging.',
      },
    ],
  },
  {
    title: 'Herramientas',
    items: [
      {
        name: 'Git',
        icon: <SiGit style={{ color: '#f05033' }} />,
        description: 'Versionado de codigo y trabajo incremental seguro.',
      },
      {
        name: 'GitHub',
        icon: <FaGithub style={{ color: '#333' }} />,
        description: 'Repositorios, documentacion y presentacion tecnica de proyectos.',
      },
      {
        name: 'npm',
        icon: <SiNpm style={{ color: '#cb3837' }} />,
        description: 'Gestion de dependencias y scripts de desarrollo.',
      },
      {
        name: 'IA asistida',
        icon: <SiGithubcopilot style={{ color: '#0ea5e9' }} />,
        description: 'ChatGPT, Copilot y Codex para investigar, depurar y acelerar iteraciones.',
      },
    ],
  },
];
