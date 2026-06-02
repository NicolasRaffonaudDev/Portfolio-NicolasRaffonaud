import { useEffect, useState } from 'react';
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import { featuredProject } from '../../data/portfolioData';
import { resolveAssetSource } from '../../utils/resolveAssetSource';
import './FeaturedProject.css';

const FeaturedProject = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [selectedKey, setSelectedKey] = useState(null);

  useEffect(() => {
    let mounted = true;

    const loadGallery = async () => {
      const resolvedGallery = await Promise.all(
        featuredProject.gallery.map(async (item) => {
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
    };

    loadGallery();

    return () => {
      mounted = false;
    };
  }, []);

  const selectedItem =
    galleryItems.find((item) => item.key === selectedKey) ?? galleryItems[0] ?? null;

  return (
    <section id="featured-project" className="featured-project-section container py-5">
      <FadeInWrapper animationClass="fade-in">
        <div className="featured-project-shell">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="featured-project-label">Proyecto destacado</span>
              <h2 className="display-4 mt-3">{featuredProject.title}</h2>
              <p className="featured-project-subtitle">{featuredProject.subtitle}</p>
              <p className="featured-project-status">{featuredProject.status}</p>
              <p className="featured-project-description">{featuredProject.description}</p>

              <div className="featured-project-stack">
                {featuredProject.stack.map((item) => (
                  <span key={item} className="featured-chip">
                    {item}
                  </span>
                ))}
              </div>

              <p className="featured-project-techline">
                <strong>Capas tecnicas:</strong> {featuredProject.technicalDetails.join(', ')}.
              </p>

              <div className="row mt-4">
                <div className="col-md-6">
                  <h3 className="featured-project-list-title">Puntos destacados</h3>
                  <ul className="featured-project-list">
                    {featuredProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <h3 className="featured-project-list-title">Desafios resueltos</h3>
                  <ul className="featured-project-list">
                    {featuredProject.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {selectedItem ? (
                <div className="featured-gallery-shell">
                  <div className="featured-gallery-main">
                    <img
                      src={selectedItem.src}
                      alt={selectedItem.alt ?? `${featuredProject.title} - ${selectedItem.label}`}
                      className="featured-gallery-image"
                      decoding="async"
                    />
                    <span className="featured-gallery-caption">{selectedItem.label}</span>
                  </div>

                  <div className="featured-gallery-thumbs">
                    {galleryItems.map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        className={`featured-thumb ${selectedKey === item.key ? 'active' : ''}`}
                        onClick={() => setSelectedKey(item.key)}
                        aria-label={`Ver captura ${item.label}`}
                        aria-pressed={selectedKey === item.key}
                      >
                        <img
                          src={item.src}
                          alt={item.alt ?? item.label}
                          className="featured-thumb-image"
                          loading="lazy"
                          decoding="async"
                        />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="featured-project-mockup">
                  <div className="featured-project-window">
                    <div className="featured-project-window-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="featured-project-window-content">
                      <div className="featured-project-panel featured-project-panel-main">
                        <strong>Raices Puntanas</strong>
                        <span>Gestion comercial e inmobiliaria</span>
                      </div>
                      <div className="featured-project-grid">
                        {featuredProject.mockupItems.map((item) => (
                          <div key={item} className="featured-project-panel">
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className="featured-project-footnote">
                        Estructura lista para reemplazar por screenshots reales de dashboard, CRM, lotes, login y mobile.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </FadeInWrapper>
    </section>
  );
};

export default FeaturedProject;
