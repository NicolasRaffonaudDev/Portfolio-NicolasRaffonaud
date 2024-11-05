import { useState } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import FadeInWrapper from "../FadeInWrapper/FadeInWrapper";
import './ContactMe.css';

const ContactMe = () => {
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
        // Aquí puedes agregar lógica para enviar el formulario, como un servicio de correo
        console.log('Form submitted:', formData);
        // Reseteamos el formulario después de enviarlo
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section container py-5">
            <FadeInWrapper animationClass="fade-in">
                <h2 className="display-4 text-center mb-5">Get in Touch</h2>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
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
                                <label htmlFor="message">Message</label>
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

                            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                        </form>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <p>Or connect with me on:</p>
                    <a href="https://github.com/NicolasRaffonaudDev" className="btn btn-outline-dark mx-2" target="_blank" rel="noopener noreferrer">
                        <FaGithub style={{ marginRight: '8px' }} /> GitHub
                    </a>
                    <a href="https://ar.linkedin.com/in/nicolas-gabriel-raffonaud-9aa988106" className="btn btn-outline-primary mx-2" target="_blank" rel="noopener noreferrer"> 
                        <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
                    </a>
                </div>
            </FadeInWrapper>
        </section>
    )
}

export default ContactMe;