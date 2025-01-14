import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGit, FaGithub, FaSass } from 'react-icons/fa';
import { SiFirebase, SiVite, SiVercel, SiWebpack, SiTailwindcss, SiNetlify } from 'react-icons/si';
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import './Skills.css';


const skillsData = [
  { name: "HTML5", icon: <FaHtml5 style={{ color: "#e34c26" }} />, description: "Lenguaje de marcado para la web." },
  { name: "CSS3", icon: <FaCss3Alt style={{ color: "#2965f1" }} />, description: "Estilos para páginas web." },
  { name: "JavaScript", icon: <FaJs style={{ color: "#f7df1e" }} />, description: "Lenguaje de programación para contenido dinámico en la web." },
  { name: "React", icon: <FaReact style={{ color: "#61dafb" }} />, description: "Biblioteca de JavaScript para construir interfaces de usuario." },
  { name: "Bootstrap", icon: <FaBootstrap style={{ color: "#563d7c" }} />, description: "Framework de CSS para diseño web responsivo." },
  { name: "Git", icon: <FaGit style={{ color: "#f05033" }} />, description: "Sistema de control de versiones." },
  { name: "GitHub", icon: <FaGithub style={{ color: "#333" }} />, description: "Plataforma para control de versiones y colaboración." },
  { name: "Sass/SCSS", icon: <FaSass style={{ color: "#cc6699" }} />, description: "Preprocesador de CSS para estilos más limpios." },
  { name: "Firebase", icon: <SiFirebase style={{ color: "#ffcb2b" }} />, description: "Backend como servicio para aplicaciones web y móviles." },
  { name: "Vite", icon: <SiVite style={{ color: "#646cff" }} />, description: "Herramienta de desarrollo frontend de última generación." },
  { name: "Vercel", icon: <SiVercel style={{ color: "#000" }} />, description: "Plataforma para frameworks frontend y sitios estáticos." },
  { name: "Webpack", icon: <SiWebpack style={{ color: "#8ed6fb" }} />, description: "Empaquetador de módulos para aplicaciones JavaScript." },
  { name: "TailwindCSS", icon: <SiTailwindcss style={{ color: "#38bdf8" }} />, description: "Framework de CSS basado en utilidades para diseños personalizados." },
  { name: "Netlify", icon: <SiNetlify style={{ color: "#00c7b7" }} />, description: "Plataforma para desplegar y alojar proyectos web." }
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