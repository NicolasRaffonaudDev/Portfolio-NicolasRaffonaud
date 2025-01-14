import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import PerfilImage from '../../assets/PerfilImage.jpeg';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section id="about" className="about-section container py-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <FadeInWrapper animationClass="slide-in-left">
                        <div>
                            <h2 className="display-4">Sobre Mí</h2>
                            <p className="lead">
                                Soy un desarrollador Front-End enfocado en la creación de aplicaciones web modernas y responsivas.
                                Me encanta resolver problemas y trabajar con tecnologías como HTML, CSS, JavaScript y React, entre otras.
                            </p>
                            <p>
                                En mi tiempo libre, disfruto aprendiendo sobre técnicas de programación.
                                Siempre estoy buscando nuevos desafíos y oportunidades para crecer.
                            </p>

                            <a href="#contact" className="btn btn-primary">
                                Contactame
                            </a>
                        </div>
                    </FadeInWrapper>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <FadeInWrapper animationClass="slide-in-right">
                        <img
                            src={PerfilImage}
                            alt="Your Profile"
                            className="img-fluid rounded-circle profile-img"
                        />
                    </FadeInWrapper>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
