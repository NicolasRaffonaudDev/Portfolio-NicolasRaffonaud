import { useContext } from 'react';
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import './Skills.css'; // Estilos para esta sección
import { ThemeContext } from '../../context/ThemeContext'; // Importa el contexto del tema

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGit, FaGithub, FaSass } from 'react-icons/fa';
import { SiFirebase, SiVite, SiVercel, SiWebpack, SiTailwindcss } from 'react-icons/si';

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 style={{ color: "#e34c26" }} />, description: "Markup language for the web." },
  { name: "CSS3", icon: <FaCss3Alt style={{ color: "#2965f1" }} />, description: "Styling for web pages." },
  { name: "JavaScript", icon: <FaJs style={{ color: "#f7df1e" }} />, description: "Programming language for dynamic web content." },
  { name: "React", icon: <FaReact style={{ color: "#61dafb" }} />, description: "JavaScript library for building user interfaces." },
  { name: "Bootstrap", icon: <FaBootstrap style={{ color: "#563d7c" }} />, description: "CSS framework for responsive web design." },
  { name: "Git", icon: <FaGit style={{ color: "#f05033" }} />, description: "Version control system." },
  { name: "GitHub", icon: <FaGithub style={{ color: "#333" }} />, description: "Platform for version control and collaboration." },
  { name: "Sass/SCSS", icon: <FaSass style={{ color: "#cc6699" }} />, description: "CSS pre-processor for cleaner styles." },
  { name: "Firebase", icon: <SiFirebase style={{ color: "#ffcb2b" }} />, description: "Backend-as-a-Service for web and mobile apps." },
  { name: "Vite", icon: <SiVite style={{ color: "#646cff" }} />, description: "Next-generation frontend tool." },
  { name: "Vercel", icon: <SiVercel style={{ color: "#000" }} />, description: "Platform for frontend frameworks and static sites." },
  { name: "Webpack", icon: <SiWebpack style={{ color: "#8ed6fb" }} />, description: "Module bundler for JavaScript applications." },
  { name: "TailwindCSS", icon: <SiTailwindcss style={{ color: "#38bdf8" }} />, description: "Utility-first CSS framework for building custom designs." }
];

const Skills = () => {
  const { theme } = useContext(ThemeContext); // Obtener el tema actual del contexto

  return (
    <section id="skills" className={`skills-section py-5 ${theme === 'dark' ? 'dark' : ''}`}>
      <FadeInWrapper animationClass="fade-in">
        <div className="container">
          <h2 className="text-center display-4 mb-5">My Skills</h2>
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