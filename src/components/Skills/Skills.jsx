import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGit, FaGithub, FaSass } from 'react-icons/fa';
import { SiFirebase, SiVite, SiVercel, SiWebpack, SiTailwindcss, SiNetlify } from 'react-icons/si';
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import './Skills.css';


const skillsData = [
  { name: "HTML5", icon: <FaHtml5 style={{ color: "#e34c26" }} />, description: "Maquetación semántica avanzada en proyectos como GuaridaHW, optimizando SEO y accesibilidad." },
  { name: "CSS3", icon: <FaCss3Alt style={{ color: "#2965f1" }} />, description: "Creación de sistemas de diseño responsivo con Grid/Flexbox. Animaciones complejas y optimización de rendimiento usando técnicas de renderizado GPU." },
  { name: "JavaScript", icon: <FaJs style={{ color: "#f7df1e" }} />, description: "Desarrollo de lógica compleja en e-commerce: carrito dinámico, validación de formularios e integración con APIs. Dominio de ES6+, patrones de diseño y Web APIs." },
  { name: "React", icon: <FaReact style={{ color: "#61dafb" }} />, description: "Arquitectura de componentes reutilizables en GuaridaHW. Manejo de estado con Context API + custom hooks. Optimización con memoización y lazy loading." },
  { name: "Bootstrap", icon: <FaBootstrap style={{ color: "#563d7c" }} />, description: "Prototipado rápido de interfaces. Personalización avanzada mediante Sass y override de utilidades. Integración con Vite en 5+ proyectos." },
  { name: "Git", icon: <FaGit style={{ color: "#f05033" }} />, description: "Flujo de trabajo profesional con Git Flow. Resolución de conflictos complejos y uso estratégico de rebase vs merge en proyectos." },
  { name: "GitHub", icon: <FaGithub style={{ color: "#333" }} />, description: "Gestión de proyectos con Issues y Projects. CI/CD con GitHub Actions. Colaboración en equipo mediante PRs con revisión de código estructurada." },
  { name: "Sass/SCSS", icon: <FaSass style={{ color: "#cc6699" }} />, description: "Sistemas de theming escalables. Mixins avanzados para responsive design. Arquitectura 7-1 en proyectos de más de 10k líneas de CSS." },
  { name: "Firebase", icon: <SiFirebase style={{ color: "#ffcb2b" }} />, description: "Backend completo para GuaridaHW: Auth, Firestore y Cloud Functions. Implementación de reglas de seguridad y optimización de costos." },
  { name: "Vite", icon: <SiVite style={{ color: "#646cff" }} />, description: "Configuración avanzada de entornos (dev/prod). Optimización de builds con análisis de bundle. Plugins personalizados para assets estáticos." },
  { name: "Vercel", icon: <SiVercel style={{ color: "#000" }} />, description: "Despliegue continuo con previews para cada PR. Configuración de Serverless Functions y edge caching para máxima performance." },
  { name: "Webpack", icon: <SiWebpack style={{ color: "#8ed6fb" }} />, description: "Configuración desde cero para legacy projects. Code splitting estratégico y optimización de assets con loaders personalizados." },
  { name: "TailwindCSS", icon: <SiTailwindcss style={{ color: "#38bdf8" }} />, description: "Diseño utility-first con configuración personalizada. Integración con PostCSS y creación de componentes con @apply. JIT mode en producción." },
  { name: "Netlify", icon: <SiNetlify style={{ color: "#00c7b7" }} />, description: "Despliegue de proyectos fullstack con funciones serverless. Configuración de redirects y headers de seguridad. A/B testing implementado." }
];

const Skills = () => {
  const { theme } = useContext(ThemeContext); // Obtener el tema actual del contexto

  return (
    <section id="skills" className={`skills-section py-5 ${theme === 'dark' ? 'dark' : ''}`}>
      <FadeInWrapper animationClass="fade-in">
        <div className="container">
          <h2 className="text-center display-4 mb-5">Tecnologías</h2>
          <div className="row text-center">
            {skillsData.map((skill, index) => (
              <div key={index} className="col-sm-4 col-md-3 mb-4">
                <div className="skill-card" style={{ height: 222 }}>
                  <div className="skill-icon" style={{ '--icon-color': skill.icon.props.style.color }}>
                    {skill.icon}
                  </div>
                  <h5 className="skill-name">{skill.name}</h5>
                  <p className="skill-description">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInWrapper>
    </section>
  );
};

export default Skills;