import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import PerfilImage from '../../assets/PerfilImage.jpeg';
import { about } from '../../data/portfolioData';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section id="about" className="about-section container py-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <FadeInWrapper animationClass="slide-in-left">
                        <div className="about-copy">
                            <h2 className="display-4">{about.title}</h2>
                            {about.paragraphs.map((paragraph) => (
                                <p key={paragraph} className="about-paragraph">
                                    {paragraph}
                                </p>
                            ))}

                            <div className="about-highlights">
                                {about.highlights.map((highlight) => (
                                    <div key={highlight} className="about-highlight-card">
                                        {highlight}
                                    </div>
                                ))}
                            </div>

                            <div className="about-actions">
                                <a href="#featured-project" className="btn btn-primary">
                                    Ver Raices Puntanas
                                </a>
                                <a href="#contact" className="btn btn-outline-secondary">
                                    Enviar consulta
                                </a>
                            </div>
                        </div>
                    </FadeInWrapper>
                </div>
                <div className="col-md-6 text-center text-md-end mt-4 mt-md-0">
                    <FadeInWrapper animationClass="slide-in-right">
                        <div className="about-visual-wrapper">
                            <img
                                src={PerfilImage}
                                alt="Foto de perfil de Nicolas Gabriel Raffonaud"
                                className="img-fluid rounded-circle profile-img"
                            />
                            <div className="about-badge">React + Full Stack Junior</div>
                        </div>
                    </FadeInWrapper>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
