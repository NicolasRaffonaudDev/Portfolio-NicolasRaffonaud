import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import FadeInWrapper from "../FadeInWrapper/FadeInWrapper";
import { profile } from '../../data/portfolioData';
import './ContactMe.css';

const ContactMe = () => {
    const hasCv = profile.cvAvailable && Boolean(profile.cvUrl);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Contacto desde portfolio - ${formData.name}`);
        const body = encodeURIComponent(
            `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
        );

        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section container py-5">
            <FadeInWrapper animationClass="fade-in">
                <h2 className="display-4 text-center mb-3">Contacto</h2>
                <p className="contact-intro text-center mx-auto mb-5">
                    Mi canal principal es email y LinkedIn. Si completas el formulario, se abrira tu cliente de correo con el mensaje listo para enviar.
                </p>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mensaje</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary btn-brand-primary btn-block">Abrir email</button>
                        </form>
                    </div>
                </div>

                <div className="text-center mt-5 contact-actions">
                    
                    <a href={`mailto:${profile.email}`} className="btn btn-brand-contact mx-2" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope style={{ marginRight: '8px' }} /> Email
                    </a>
                    <a href={profile.githubUrl} className="btn btn-brand-outline mx-2" target="_blank" rel="noopener noreferrer">
                        <FaGithub style={{ marginRight: '8px' }} /> GitHub
                    </a>
                    <a href={profile.linkedinUrl} className="btn btn-brand-secondary mx-2" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
                    </a>
                    <a
                        href={hasCv ? profile.cvUrl : `mailto:${profile.email}?subject=Solicitud%20de%20CV%20-%20Nicolas%20Raffonaud`}
                        className="btn btn-brand-outline mx-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {hasCv ? 'Descargar CV' : 'Solicitar CV'}
                    </a>
                </div>
            </FadeInWrapper>
        </section>
    )
}

export default ContactMe;
