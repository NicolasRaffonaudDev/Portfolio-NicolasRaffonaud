import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import { secondaryProjects } from '../../data/portfolioData';
import './Projects.css'

const renderProjectPreview = (project) => {
  if (project.previewType === 'store') {
    return (
      <div className="project-mockup project-mockup-store" aria-label={`${project.title} preview`}>
        <div className="project-mockup-topbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="project-store-hero">
          <div>
            <strong>GuaridaHW</strong>
            <small>React store UI</small>
          </div>
          <span className="project-store-badge">Cart ready</span>
        </div>
        <div className="project-store-grid">
          <div className="project-store-card">GPU</div>
          <div className="project-store-card">CPU</div>
          <div className="project-store-card">Perifericos</div>
        </div>
        <div className="project-store-footer">
          <span>SPA + Router</span>
          <span>Firebase</span>
        </div>
      </div>
    );
  }

  if (project.previewType === 'portfolio') {
    return (
      <div className="project-mockup project-mockup-portfolio" aria-label={`${project.title} preview`}>
        <div className="project-mockup-topbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="project-portfolio-hero">
          <small>Frontend Developer React</small>
          <strong>Nicolas Gabriel Raffonaud</strong>
          <span>Hero + proyecto destacado + CTA recruiter-friendly</span>
        </div>
        <div className="project-portfolio-panels">
          <div className="project-portfolio-panel project-portfolio-panel-accent">Raices Puntanas</div>
          <div className="project-portfolio-panel">Otros proyectos</div>
          <div className="project-portfolio-panel">Tecnologias</div>
        </div>
        <div className="project-portfolio-footer">
          Mockup listo para reemplazar por screenshot real
        </div>
      </div>
    );
  }

  return (
    <div className="project-placeholder">
      <span>{project.placeholder}</span>
    </div>
  );
};

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
                ) : renderProjectPreview(project)}
                <div className="card-body d-flex flex-column">
                  <div className="project-card-header">
                    <span className="project-badge">{project.eyebrow}</span>
                    <span className="project-status">{project.status}</span>
                  </div>
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="project-meta">Deploy actual: {project.deploy} | Codigo en GitHub</p>

                  <div className="project-tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech} className="project-tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="project-note">{project.note}</p>

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
