import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import { featuredProject } from '../../data/portfolioData';
import './FeaturedProject.css';

const FeaturedProject = () => {
  return (
    <section id="featured-project" className="featured-project-section container py-5">
      <FadeInWrapper animationClass="fade-in">
        <div className="featured-project-shell">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
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

            <div className="col-lg-5">
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
            </div>
          </div>
        </div>
      </FadeInWrapper>
    </section>
  );
};

export default FeaturedProject;
