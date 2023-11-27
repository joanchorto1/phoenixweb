import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/layout";

const Services = () => {
    const servicesData = [
        {
            title: "Marketing Digital",
            summary:
                "Impulsa tu presencia en línea con estrategias efectivas y campañas que conectan con tu audiencia.",
            offerings: [
                "Gestión de Redes Sociales",
                "Estrategias de Generación de Leads",
                "Publicidad Online",
                "SEO (Optimización para Motores de Búsqueda)",
            ],
        },
        {
            title: "Desarrollo Web",
            summary:
                "Transformamos ideas en soluciones tecnológicas personalizadas, desde sitios web atractivos hasta aplicaciones web complejas.",
            offerings: [
                "Desarrollo de Sitios Web",
                "Implementación de Aplicaciones Web",
                "Sistemas ERP",
                "Diseño UI/UX",
            ],
        },
        {
            title: "Diseño Gráfico",
            summary:
                "Destaca tu identidad de marca con diseños visualmente atractivos, desde logotipos hasta materiales de marketing.",
            offerings: [
                "Diseño de Logotipos",
                "Materiales de Marketing",
                "Diseño de Folletos",
                "Ilustraciones Creativas",
            ],
        },
        {
            title: "Gestión de Eventos",
            summary:
                "Organizamos eventos que dejan una impresión duradera, gestionando todos los detalles para garantizar el éxito.",
            offerings: [
                "Eventos Corporativos",
                "Conferencias",
                "Celebraciones Especiales",
                "Gestión Logística",
            ],
        },
    ];

    return (
        <Layout>
            <div className="container mt-5">
                <section style={{ marginBottom: "10%" }}>
                    <h1 className={"text-center"}>Nuestros Servicios</h1>
                    <div className="row">
                        {servicesData.map((service, index) => (
                            <div key={index} className="col-md-6 mb-4">
                                <div
                                    style={{ backgroundColor: "#2c3e50" }}
                                    className="shadow p-3 mb-5 text-white rounded"
                                >
                                    <h2 className="mt-3">{service.title}</h2>
                                    <p>{service.summary}</p>
                                    <ul>
                                        {service.offerings.map((offering, idx) => (
                                            <li key={idx}>{offering}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={"text-center pt-4"}>
                        <p>
                            En Phoenix Group, nuestros servicios van más allá de lo
                            convencional. Somos tu socio estratégico en el viaje hacia el éxito.
                            ¡Descubre cómo podemos potenciar tu negocio y hacerlo destacar en el
                            mercado!
                        </p>
                        <Link
                            to="/contact"
                            className="btn btn-primary text-center"
                            style={{ backgroundColor: "#2c3e50", color: "#fff" }}
                        >
                            Contacta con Nosotros
                        </Link>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Services;