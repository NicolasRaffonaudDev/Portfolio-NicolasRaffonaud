import { useContext } from 'react';
import FadeInWrapper from "../FadeInWrapper/FadeInWrapper";
import { ThemeContext } from '../../context/ThemeContext';
import { FaWhatsapp } from 'react-icons/fa';
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
                  href={profile.whatsappUrl}
                  className="footer-icon whatsapp me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={50} />
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
