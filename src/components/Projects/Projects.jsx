import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import { secondaryProjects } from '../../data/portfolioData';
import { resolveAssetSource } from '../../utils/resolveAssetSource';
import './Projects.css'

const ProjectVisual = ({ project }) => {
  const [resolvedPreview, setResolvedPreview] = useState(project.preview ?? null);
  const [galleryItems, setGalleryItems] = useState([]);
  const [selectedKey, setSelectedKey] = useState(project.previewGallery?.[0]?.key ?? null);

  useEffect(() => {
    let mounted = true;

    const loadPreview = async () => {
      if (project.previewGallery?.length) {
        const resolvedGallery = await Promise.all(
          project.previewGallery.map(async (item) => {
            const src = await resolveAssetSource(item.sources);
            return src ? { ...item, src } : null;
          })
        );

        if (!mounted) {
          return;
        }

        const availableItems = resolvedGallery.filter(Boolean);
        setGalleryItems(availableItems);
        setSelectedKey(availableItems[0]?.key ?? null);
        setResolvedPreview(null);
        return;
      }

      if (project.preview) {
        setResolvedPreview(project.preview);
        return;
      }

      if (!project.previewSources?.length) {
        setResolvedPreview(null);
        return;
      }

      const resolvedSource = await resolveAssetSource(project.previewSources);
      if (mounted) {
        setResolvedPreview(resolvedSource);
      }
    };

    loadPreview();

    return () => {
      mounted = false;
    };
  }, [project.preview, project.previewGallery, project.previewSources]);

  const selectedGalleryItem =
    galleryItems.find((item) => item.key === selectedKey) ?? galleryItems[0] ?? null;

  if (selectedGalleryItem) {
    return (
      <div className="project-gallery-shell">
        <div className="project-gallery-main">
          <img
            src={selectedGalleryItem.src}
            alt={selectedGalleryItem.alt ?? `Preview de ${project.title}`}
            className="card-img-top project-preview-media project-gallery-main-image"
            loading="lazy"
            decoding="async"
          />
          <span className="project-gallery-caption">{selectedGalleryItem.label}</span>
        </div>

        <div className="project-gallery-thumbs" aria-label={`Galeria de ${project.title}`}>
          {galleryItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`project-gallery-thumb ${selectedKey === item.key ? 'active' : ''}`}
              onClick={() => setSelectedKey(item.key)}
              aria-label={`Ver captura ${item.label}`}
              aria-pressed={selectedKey === item.key}
            >
              <img
                src={item.src}
                alt={item.alt ?? item.label}
                className="project-gallery-thumb-image"
                loading="lazy"
                decoding="async"
              />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (resolvedPreview) {
    const previewClassName = resolvedPreview.endsWith('.gif')
      ? 'card-img-top project-preview-media project-preview-gif'
      : 'card-img-top project-preview-media';

    return (
      <img
        src={resolvedPreview}
        alt={project.previewAlt ?? `Preview de ${project.title}`}
        className={previewClassName}
        loading="lazy"
        decoding="async"
      />
    );
  }

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
                <ProjectVisual project={project} />
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
                    <a
                      href={project.liveLink}
                      className="btn btn-primary btn-brand-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.liveLabel} ${project.title}`}
                    >
                      <FaArrowRight style={{ marginRight: '5px' }} /> {project.liveLabel}
                    </a>
                    <a
                      href={project.codeLink}
                      className="btn btn-brand-outline"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver codigo de ${project.title} en GitHub`}
                    >
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
