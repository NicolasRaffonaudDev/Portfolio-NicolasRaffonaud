/* import './header.css' */
import FadeInWrapper from "../FadeInWrapper/FadeInWrapper";

const Header = () => {
  return (
    <FadeInWrapper animationClass="slide-in-top" delay={0.5}>
        <header className="bg-dark text-white py-4">
        <div className="container text-center">
            <h1>Nicolas Gabriel Raffonaud</h1>
            <p className="lead">Front-End Developer | Passionate about web design and development</p>
            <p className="lead">Desarrollador Front-End | Passionate about web design and development</p>
            <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid justify-content-center">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
                </ul>
            </div>
            </nav>
        </div>
        </header>
    </FadeInWrapper>
  )
}

export default Header;