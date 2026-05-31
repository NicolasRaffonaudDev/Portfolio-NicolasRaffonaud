import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import { secondaryProjects } from '../../data/portfolioData';
import './Projects.css'

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="projects" className={`projects-section container py-5 ${theme}`}>
      <h2 className="display-4 text-center mb-3">Otros proyectos</h2>
      <p className="projects-intro text-center mx-auto mb-5">
        Proyectos que complementan mi recorrido en React, arquitectura frontend y construccion de interfaces web.
      </p>

      <div className="row">
        {secondaryProjects.map((project, index) => (
          <div key={project.title} className="col-lg-6 mb-4">
            <FadeInWrapper animationClass={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}>
              <div className="card project-card shadow-sm h-100">
                {project.preview ? (
                  <img src={project.preview} alt={project.title} className="card-img-top" />
                ) : (
                  <div className="project-placeholder">
                    <span>{project.placeholder}</span>
                  </div>
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>

                  <div className="project-tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech} className="project-tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions mt-auto">
                    <a href={project.liveLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      <FaArrowRight style={{ marginRight: '5px' }} /> {project.liveLabel}
                    </a>
                    <a href={project.codeLink} className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                      <FaGithub style={{ marginRight: '5px' }} /> Ver codigo
                    </a>
                  </div>
                </div>
              </div>
            </FadeInWrapper>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;
