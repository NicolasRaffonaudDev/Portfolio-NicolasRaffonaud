import { useContext } from 'react';
import FadeInWrapper from "../FadeInWrapper/FadeInWrapper";
import { ThemeContext } from '../../context/ThemeContext';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { profile } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <FadeInWrapper animationClass="slide-in-top" delay={0.5}>
      <footer className={`site-footer py-5 ${theme === 'dark' ? 'bg-dark-theme text-light' : 'bg-light-theme text-dark'}`}>
        <div className="container">
          <div className="row justify-content-between text-center">
            <div className="col-md-6">
              <h5>{profile.name}</h5>
              <p>Portfolio desarrollado con React y Vite para presentar proyectos reales, stack tecnico y disponibilidad laboral.</p>
            </div>

            <div className="col-md-6">
              <h5>Tambien podes encontrarme en:</h5>
              <div>
                <a
                  href={profile.linkedinUrl}
                  className="footer-icon linkedin me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href={profile.githubUrl}
                  className="footer-icon github me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href={profile.whatsappUrl}
                  className="footer-icon whatsapp me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={30} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="footer-icon gmail"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope size={30} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>&copy; 2026 Nicolas Gabriel Raffonaud. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </FadeInWrapper>
  );
};

export default Footer;
