import { useContext } from 'react';
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import './Projects.css'
import { ThemeContext } from '../../context/ThemeContext';

const projects = [
    {
      title: 'E-commerce Website',
      description: 'A fully functional e-commerce application built with React and Redux.',
      image: 'ecommerce-screenshot.jpg',
      liveLink: 'https://your-ecommerce-project.com',
      codeLink: 'https://github.com/yourusername/ecommerce-project'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website to showcase my projects and skills.',
      image: 'portfolio-screenshot.jpg',
      liveLink: 'https://your-portfolio.com',
      codeLink: 'https://github.com/yourusername/portfolio'
    },
    // Puedes añadir más proyectos aquí
];

const Projects = () => {
  const { theme } = useContext(ThemeContext); // Usar el contexto para obtener el tema actual
  console.log(theme)
  return (
    <>
        <section id="projects" className={`projects-section container py-5 ${theme}`}>
            <h2 className="display-4 text-center mb-5">My Projects</h2>
            
            <div className="row">
                {projects.map((project, index) => (
                <FadeInWrapper key={index} animationClass={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}>
                    <div className="col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <img src={project.image} alt={project.title} className="card-img-top" />
                        <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <a href={project.liveLink} className="btn btn-primary mr-2" target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                        <a href={project.codeLink} className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                            View Code
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