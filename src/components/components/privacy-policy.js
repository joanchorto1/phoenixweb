import React from 'react';
import Layout from '../layout/layout';

const PrivacyPolicy = () => {
    return (
        <Layout>
            <div className="container mt-5">
                <section>
                    <h2 className="text-center mb-4">Política de Privacidad</h2>
                    <p>
                        En Phoenix Group, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, utilizamos, compartimos y protegemos la información personal que obtendremos de nuestros usuarios.
                    </p>

                    <h3>Información que Recopilamos</h3>
                    <p>
                        En el curso normal de nuestras operaciones, podemos recopilar información personal, como nombres, direcciones de correo electrónico, números de teléfono, etc. Esta información se recopila cuando los usuarios interactúan con nuestro sitio web, completan formularios o nos proporcionan información de otras maneras.
                    </p>

                    <h3>Cómo Utilizamos la Información</h3>
                    <p>
                        Utilizamos la información recopilada para proporcionar y mejorar nuestros servicios, responder a consultas y mantener una comunicación efectiva con nuestros usuarios. No compartimos esta información con terceros, excepto cuando es necesario para brindar nuestros servicios o cumplir con requisitos legales.
                    </p>

                    {/* Agregar más secciones según sea necesario */}

                    <h3>Seguridad de la Información</h3>
                    <p>
                        Tomamos medidas para proteger la información personal de nuestros usuarios. Implementamos prácticas de seguridad para garantizar la confidencialidad y la integridad de la información.
                    </p>

                    {/* Agregar más secciones según sea necesario */}

                    <h3>Cambios en la Política de Privacidad</h3>
                    <p>
                        Nos reservamos el derecho de actualizar nuestra Política de Privacidad en cualquier momento. Se notificarán los cambios significativos a través de nuestro sitio web.
                    </p>

                    <p>
                        Para obtener información más detallada sobre cómo manejamos la información personal, consulte nuestra Política de Privacidad completa.
                    </p>
                </section>
            </div>
        </Layout>
    );
};

export default PrivacyPolicy;