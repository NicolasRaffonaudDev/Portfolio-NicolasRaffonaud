import { useContext } from 'react';
import FadeInWrapper from "../FadeInWrapper/FadeInWrapper";
import { ThemeContext } from '../../context/ThemeContext';
import { profile } from '../../data/portfolioData';
import './Header.css';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const hasCv = profile.cvAvailable && Boolean(profile.cvUrl);
  const cvCtaHref = hasCv
    ? profile.cvUrl
    : `mailto:${profile.email}?subject=Solicitud%20de%20CV%20-%20Nicolas%20Raffonaud`;
  const cvCtaLabel = hasCv ? 'Ver CV' : 'Solicitar CV';

  return (
    <FadeInWrapper animationClass="slide-in-top" delay={0.5}>
      <header
        className={`hero-section py-5 ${theme === 'dark' ? 'bg-dark-theme text-light' : 'bg-light-theme text-dark'}`}
      >
        <div className="container text-center">
          <span className="hero-eyebrow">{profile.role}</span>
          <h1>{profile.name}</h1>
          <p className="lead hero-headline">{profile.headline}</p>
          <p className="hero-copy mx-auto">{profile.focus}</p>
          <p className="hero-availability mx-auto">{profile.availability}</p>

          <div className="hero-cta-group">
            <a className="btn btn-primary btn-brand-primary" href="#featured-project">
              Ver proyecto principal
            </a>
            <a
              className="btn btn-brand-outline"
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-brand-secondary"
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            {hasCv && (
              <a
                className="btn btn-brand-contact"
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar CV
              </a>
            )}
            {!hasCv && (
              <a
                className="btn btn-brand-contact"
                href={cvCtaHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cvCtaLabel}
              </a>
            )}
          </div>

          <nav className="navbar navbar-expand-lg hero-nav">
            <div className="container-fluid justify-content-center">
              <ul className="navbar-nav hero-nav-list">
                <li className="nav-item">
                  <a className={`nav-link ${theme === 'dark' ? 'text-light' : 'text-dark'}`} href="#about">Sobre mi</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${theme === 'dark' ? 'text-light' : 'text-dark'}`} href="#featured-project">Proyecto principal</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${theme === 'dark' ? 'text-light' : 'text-dark'}`} href="#projects">Otros proyectos</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${theme === 'dark' ? 'text-light' : 'text-dark'}`} href="#skills">Tecnologias</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${theme === 'dark' ? 'text-light' : 'text-dark'}`} href="#contact">Contacto</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </FadeInWrapper>
  );
}

export default Header;
