import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaGithub } from 'react-icons/fa'; 
import { SiNetlify, SiVercel } from 'react-icons/si';
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import './Projects.css'

const projects = [
  {
    title: 'E-commerce GuaridaHw',
    description: 'Aplicación de comercio electrónico enfocada en la venta de componentes de PC, desarrollada con una arquitectura de componentes en React y optimizada con Vite para un rápido desempeño. Firebase se utiliza para gestionar la base de datos y la autenticación, mientras que Bootstrap y CSS complementan el diseño responsivo. La app incluye funcionalidades de búsqueda, filtrado de productos y un carrito de compras dinámico.',
    preview: '../../assets/Animation.gif',
    liveLink: 'https://guaridahw.netlify.app/',
    codeLink: 'https://github.com/NicolasRaffonaudDev/guaridahw',
    livePlatform: 'netlify',
  },
  {
    title: 'JM Gestion Comercial',
    description: 'Aplicación web para exponer y promocionar la venta de lotes en bienes raíces, con enfoque en usabilidad y diseño atractivo. Desarrollada en React y utilizando Vite para un rendimiento ágil. Los estilos están implementados con Tailwind CSS, brindando flexibilidad en el diseño responsivo. Framer Motion añade efectos visuales a las transiciones, mejorando la experiencia del usuario.',
    preview: '../../assets/JmGestion.gif',
    liveLink: 'https://your-portfolio.com',
    codeLink: 'https://github.com/NicolasRaffonaudDev/JMGestionComercial',
    livePlatform: 'vercel',
  },
  {
    title: 'Portfolio Profesional',
    description: 'Portafolio profesional desarrollado para mostrar proyectos y habilidades en desarrollo frontend. Implementado en React con Vite para optimizar el rendimiento, con un enfoque en diseño atractivo y responsivo usando Tailwind CSS. La interactividad se mejora con animaciones personalizadas creadas con Framer Motion, mientras que `react-tsparticles` se usa para efectos de fondo. Los enlaces a cada proyecto incluyen previsualizaciones con GIFs y video, y se despliegan en Firebase y Vercel. Este portafolio destaca habilidades en desarrollo modular y animaciones avanzadas.',
    preview: '../../assets/PortfolioPreview.gif', // PREVISUALIZACION
    liveLink: 'https://nicolasraffonaud-portfolio.netlify.app/',
    codeLink: 'https://github.com/NicolasRaffonaudDev/Portfolio-NicolasRaffonaud',
    livePlatform: 'netlify',
  }
];

const Projects = () => {
  const { theme } = useContext(ThemeContext); // USO DE CONTEXTO DE TEMA
  console.log(theme)
  return (
    <>
      <section id="projects" className={`projects-section container py-5 ${theme}`}>
        <h2 className="display-4 text-center mb-5">Mis Proyectos</h2>

        <div className="row">
          {projects.map((project, index) => (
            <FadeInWrapper key={index} animationClass={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}>
              <div className="col-md-6 mb-4">
                <div className="card shadow-sm">
                  <img src={project.preview} alt={project.title} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.liveLink} className="btn btn-primary mx-2" target="_blank" rel="noopener noreferrer">
                      {project.livePlatform === 'netlify' ? (
                        <>
                          <SiNetlify style={{ marginRight: '5px' }} /> Netlify
                        </>
                      ) : (
                        <>
                          <SiVercel style={{ marginRight: '5px' }} /> Vercel
                        </>
                      )}
                    </a>
                    <a href={project.codeLink} className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                      <FaGithub style={{ marginRight: '5px' }} /> Ver Código.
                    </a>
                  </div>
                </div>
              </div>
            </FadeInWrapper>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects;