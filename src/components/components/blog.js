// Archivo: blog.js
import React, {useEffect} from "react";
import Layout from "../layout/layout";
import { Link } from "react-router-dom";
import {useMetaTags} from "../context/metaTagsContext";

const Blog = () => {
    const { updateMetaTags } = useMetaTags();

    useEffect(() => {
        // Actualiza las metaetiquetas específicas para esta página
        updateMetaTags({
            title: 'Blog phoenix',
            description: 'Descripción  del Blog',
            // ... otras metaetiquetas específicas
        });
    }, [updateMetaTags]);
     return (


            <div className="container mt-5">
                <h2 className="text-center">Blog de Phoenix Group</h2>

                {/* Sección de Marketing Digital */}
                <section className="mb-4">
                    <h3 className="section-title pb-3">Marketing Digital</h3>
                    <div style={{ backgroundColor: '#2c3e50' }} className="blog-article card  text-white mb-4">
                        <div className="card-body">
                            <h4 className="card-title">Cómo una Estrategia Integral de Marketing Digital Puede Impulsar tu Negocio en Tarragona</h4>
                            <p className="card-text">
                                Explora la importancia de una estrategia de marketing digital completa, desde SEO local hasta campañas en redes sociales, y cómo puede beneficiar a las empresas en Tarragona.
                            </p>
                            <Link to="/blog/marketing1" className="btn btn-light">Leer más</Link>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#2c3e50' }} className="blog-article card  text-white">
                        <div className="card-body">
                            <h4 className="card-title">Secretos del Éxito en el Marketing Online: Estrategias Digitales para Sobresalir en el Delta de l'Ebre</h4>
                            <p className="card-text">
                                Analiza estrategias efectivas de marketing online específicas para el Delta de l'Ebre, aprovechando las oportunidades digitales en esta región única.
                            </p>
                            <Link to="/blog/marketing2" className="btn btn-light">Leer más</Link>
                        </div>
                    </div>
                </section>

                {/* Sección de Desarrollo Web */}
                <section className="mb-4">
                    <h3 className="section-title pb-3">Desarrollo Web</h3>
                    <div style={{ backgroundColor: '#2c3e50' }} className="blog-article card  text-white mb-4">
                        <div className="card-body">
                            <h4 className="card-title">El Papel Fundamental del Diseño Web en el Éxito Empresarial en Tarragona</h4>
                            <p className="card-text">
                                Examina cómo un diseño web efectivo contribuye al éxito empresarial en Tarragona, desde la usabilidad hasta la optimización para motores de búsqueda.
                            </p>
                            <Link to="/blog/desarrollo1" className="btn btn-light">Leer más</Link>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#2c3e50' }} className="blog-article card  text-white">
                        <div className="card-body">
                            <h4 className="card-title">Desarrollo Web en el Delta de l'Ebre: Tendencias que Debes Conocer</h4>
                            <p className="card-text">
                                Explora las últimas tendencias en desarrollo web y cómo aplicarlas estratégicamente en el contexto del Delta de l'Ebre.
                            </p>
                            <Link to="/blog/desarrollo2" className="btn btn-light">Leer más</Link>
                        </div>
                    </div>
                </section>

                {/* Sección de Diseño Gráfico */}
                <section className="mb-4">
                    <h3 className="section-title pb-3">Diseño Gráfico</h3>
                    <div style={{ backgroundColor: '#2c3e50' }} className="blog-article card text-white mb-4">
                        <div className="card-body">
                            <h4 className="card-title">El Impacto del Diseño de Logotipos en la Identidad de Marca: Construyendo una Imagen Duradera</h4>
                            <p className="card-text">
                                Examina cómo el diseño gráfico impacta las estrategias de marketing digital y cómo puedes destacar en el mercado de Tarragona.
                            </p>
                            <Link to="/blog/diseno1" className="btn btn-light">Leer más</Link>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#2c3e50' }} className="blog-article card text-white ">
                        <div className="card-body">
                            <h4 className="card-title">El Papel del Diseño Gráfico en las Redes Sociales: Potenciando tu Presencia Digital</h4>
                            <p className="card-text">
                                Descubre cómo el diseño gráfico innovador puede diferenciar a las empresas en el entorno empresarial del Delta de l'Ebre.
                            </p>
                            <Link to="/blog/diseno2" className="btn btn-light">Leer más</Link>
                        </div>
                    </div>
                </section>

                {/* Sección de Gestión de Eventos */}
                <section>
                    <h3 className="section-title pb-3">Gestión de Eventos</h3>
                    <div style={{ backgroundColor: '#2c3e50' }} className="blog-article card text-white mb-5">
                        <div className="card-body">
                            <h4 className="card-title">Claves para una Organización Exitosa de Eventos Corporativos: Estrategias para el Éxito</h4>
                            <p className="card-text">
                                Organizar eventos corporativos exitosos es fundamental para fortalecer la presencia de tu empresa, fomentar relaciones comerciales y crear experiencias memorables.
                                Descubre las estrategias y prácticas esenciales que te ayudarán a planificar y ejecutar eventos corporativos de manera efectiva, desde la fase de planificación hasta el día del evento.                            </p>
                            <Link to="/blog/eventos1" className="btn btn-light">Leer más</Link>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#2c3e50' }} className="blog-article card text-white mb-4">
                        <div className="card-body">
                            <h4 className="card-title">Tendencias Actuales en Organización de Eventos Empresariales: Innovación y Sostenibilidad</h4>
                            <p className="card-text">
                                Mantente actualizado con las últimas tendencias en la industria de eventos corporativos.
                                Desde tecnología innovadora hasta enfoques sostenibles, exploraremos cómo las tendencias están dando forma al mundo de la organización de eventos empresariales.
                                Descubre cómo estas tendencias están transformando la manera en que se planifican y ejecutan los eventos empresariales para crear experiencias inolvidables.                            </p>
                            <Link to="/blog/eventos2" className="btn btn-light">Leer más</Link>
                        </div>
                    </div>
                </section>
            </div>

    );
};

export default Blog;