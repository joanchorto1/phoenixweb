// Archivo: blog.js
import React from "react";
import Layout from "../layout/layout";
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <Layout>
            <div className="container mt-5">
                <h2 className="text-center">Blog de Phoenix Group</h2>

                {/* Sección de Marketing Digital */}
                <section className="mb-4">
                    <h3 className="section-title pb-3">Marketing Digital</h3>
                    <div style={{ backgroundColor: '#2c3e50' }} className="blog-article card  text-white mb-4">
                        <div className="card-body">
                            <h4 className="card-title">5 Estrategias para Mejorar tu Presencia en Redes Sociales</h4>
                            <p className="card-text">
                                Descubre las mejores prácticas para destacar en las redes sociales y aumentar la visibilidad de tu marca.
                            </p>
                            <Link to="/blog/marketing1" className="btn btn-light">Leer más</Link>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#2c3e50' }} className="blog-article card  text-white">
                        <div className="card-body">
                            <h4 className="card-title">Guía Completa de Email Marketing para Principiantes</h4>
                            <p className="card-text">
                                Aprende los secretos detrás de una campaña de email marketing efectiva y cómo llegar a tu audiencia de manera impactante.
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
                            <h4 className="card-title">Tendencias Actuales en Desarrollo Web: Lo que Debes Saber</h4>
                            <p className="card-text">
                                Exploramos las últimas tendencias en desarrollo web y cómo pueden impactar positivamente tu presencia en línea.
                            </p>
                            <Link to="/blog/desarrollo1" className="btn btn-light">Leer más</Link>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#2c3e50' }} className="blog-article card  text-white">
                        <div className="card-body">
                            <h4 className="card-title">Cómo Elegir la Plataforma de Desarrollo Adecuada para tu Sitio Web</h4>
                            <p className="card-text">
                                Una guía detallada para ayudarte a seleccionar la plataforma de desarrollo web que mejor se adapte a tus necesidades.
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
                            <h4 className="card-title">Principios Básicos del Diseño Gráfico que Todo Emprendedor Debe Conocer</h4>
                            <p className="card-text">
                                Descubre los principios esenciales del diseño gráfico y cómo aplicarlos para mejorar la imagen de tu marca.
                            </p>
                            <Link to="/blog/diseno1" className="btn btn-light">Leer más</Link>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#2c3e50' }} className="blog-article card text-white ">
                        <div className="card-body">
                            <h4 className="card-title">Cómo Crear un Logotipo Impactante: Guía Paso a Paso</h4>
                            <p className="card-text">
                                Una guía detallada para diseñar un logotipo memorable que represente la identidad única de tu empresa.
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
                            <h4 className="card-title">Claves para una Organización Exitosa de Eventos Corporativos</h4>
                            <p className="card-text">
                                Descubre las claves para organizar eventos corporativos exitosos que dejen una impresión duradera en tus invitados.
                            </p>
                            <Link to="/blog/eventos1" className="btn btn-light">Leer más</Link>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#2c3e50' }} className="blog-article card text-white mb-4">
                        <div className="card-body">
                            <h4 className="card-title">Cómo Elegir el Mejor Espacio para tu Evento Empresarial</h4>
                            <p className="card-text">
                                Una guía práctica para seleccionar el espacio perfecto que se alinee con la visión de tu evento empresarial.
                            </p>
                            <Link to="/blog/eventos2" className="btn btn-light">Leer más</Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Blog;