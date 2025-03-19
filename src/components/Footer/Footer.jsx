import { useContext } from 'react';
import FadeInWrapper from "../FadeInWrapper/FadeInWrapper";
import { ThemeContext } from '../../context/ThemeContext';
import {  FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <FadeInWrapper animationClass="slide-in-top" delay={0.5}>
      <footer className={`py-5 ${theme === 'dark' ? 'bg-dark-theme text-light' : 'bg-light-theme text-dark'}`}>
        <div className="container">
          <div className="row justify-content-between text-center">
            <div className="col-md-6">
              <h5>Nicolás Gabriel Raffonaud</h5>
              <p>Desarrollado con enfoque de aprendizaje.</p>
            </div>

            <div className="col-md-6">
              <h5>Redes Sociales:</h5>
              <div>
                <a
                  href="https://instagram.com/tu-usuario"
                  className="footer-icon instagram me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="https://wa.me/5491126252321"
                  className="footer-icon whatsapp me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={30} />
                </a>
                <a
                  href="nicolasraffonaudsoft@gmail.com"
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
            <p>&copy; 2025 Mi Portafolio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </FadeInWrapper>
  );
};

export default Footer;
