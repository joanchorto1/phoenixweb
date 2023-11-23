import Layout from "../layout/layout";
import emailjs from 'emailjs-com';
import React from "react";
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        // Configurar el servicio Email.js
        emailjs.sendForm('service_0md04a8', 'template_4wu4rsh', e.target, 'igLg_BldBQqE1PovM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        console.log('Formulario enviado');
    };
    return (
        <Layout>
            <div className="container mt-5">
                <section>
                    <h2 className="text-center mb-4">Contacta con Nosotros</h2>
                    <p>
                        Estamos aquí para responder a tus preguntas y discutir cómo podemos ayudarte a alcanzar tus
                        objetivos. Puedes contactarnos a través de los siguientes métodos:
                    </p>
                    <div>
                        <h3>Información de Contacto</h3>
                        <p>
                            <strong>Dirección:</strong> Online
                        </p>
                        <p>
                            <strong>Email:</strong> info@phoenixgrp.es
                        </p>
                        <p>
                            <strong>Teléfono:</strong> 633391411
                        </p>
                    </div>
                    <div>
                        <h3>Formulario de Contacto</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">
                                    Nombre:
                                </label>
                                <input type="text" className="form-control" id="nombre" name="nombre" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="empresa" className="form-label">
                                    Empresa:
                                </label>
                                <input type="text" className="form-control" id="empresa" name="empresa" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email:
                                </label>
                                <input type="email" className="form-control" id="email" name="email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mensaje" className="form-label">
                                    Mensaje:
                                </label>
                                <textarea className="form-control" id="mensaje" name="mensaje" rows="4" required />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ marginBottom: '10%', backgroundColor: '#2c3e50' }}>
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Contact;