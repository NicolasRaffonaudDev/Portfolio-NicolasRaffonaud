import FadeInWrapper from '../FadeInWrapper/FadeInWrapper'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <>
            <section id="about" className="about-section container py-5">
                <div className="row align-items-center">
                    {/* Columna de Imagen con animación de izquierda a derecha */}
                    <FadeInWrapper animationClass="slide-in-left">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img
                                src="your-profile-picture.jpg"
                                alt="Your Profile"
                                className="img-fluid rounded-circle"
                            />
                        </div>
                    </FadeInWrapper>

                    {/* Columna de Texto con animación de derecha a izquierda */}
                    <FadeInWrapper animationClass="slide-in-right">
                        <div className="col-md-6">
                            <h2 className="display-4">About Me</h2>
                            <p className="lead">
                                I'm a passionate Front-End Developer with a focus on creating modern and responsive web applications.
                                I love solving problems and working with technologies like HTML, CSS, JavaScript, and React.
                            </p>
                            <p>
                                In my spare time, I enjoy learning new technologies and contributing to open-source projects.
                                I'm always looking for new challenges and opportunities to grow.
                            </p>
                            {/* Botón de Contacto */}
                            <a href="#contact" className="btn btn-primary">
                                Contact Me
                            </a>
                        </div>
                    </FadeInWrapper>
                </div>
            </section>
        </>
    )
}

export default AboutMe;