import { useContext } from 'react';
import FadeInWrapper from "../FadeInWrapper/FadeInWrapper";
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <FadeInWrapper animationClass="slide-in-top" delay={0.5}>
      <header
        className={`py-4 ${theme === 'dark' ? 'bg-dark-theme text-light' : 'bg-light-theme text-dark'}`}
      >
        <div className="container text-center">
          <h1>Nicolas Gabriel Raffonaud</h1>
          <p className="lead">Desarrollador Front-End | Creador de Apps web.</p>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid justify-content-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className={`nav-link ${theme === 'dark' ? 'text-light' : 'text-dark'}`} href="#about">Sobre Mí</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${theme === 'dark' ? 'text-light' : 'text-dark'}`} href="#skills">Tecnologías</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${theme === 'dark' ? 'text-light' : 'text-dark'}`} href="#projects">Proyectos</a>
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