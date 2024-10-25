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
          <p className="lead">Front-End Developer | Passionate about web design and development</p>
          <p className="lead">Desarrollador Front-End | Passionate about web design and development</p>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid justify-content-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className={`nav-link ${theme === 'dark' ? 'text-light' : 'text-dark'}`} href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${theme === 'dark' ? 'text-light' : 'text-dark'}`} href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${theme === 'dark' ? 'text-light' : 'text-dark'}`} href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${theme === 'dark' ? 'text-light' : 'text-dark'}`} href="#contact">Contact</a>
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