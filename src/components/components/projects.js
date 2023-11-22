import React from 'react';
import Layout from "../layout/layout";

const Projects = () => {
    return (
        <Layout>
            <div className="container mt-5">
                <section style={{marginBottom:'10%'}}>
                    <h2 className="text-center mb-4">Nuestros Proyectos</h2>
                    <p>
                        En Phoenix Communication, nos enorgullece compartir algunos de nuestros proyectos destacados. Cada
                        proyecto refleja nuestro compromiso con la excelencia y la satisfacción del cliente.
                    </p>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img
                                    src="https://via.placeholder.com/300"
                                    className="card-img-top"
                                    alt="Proyecto 1"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Proyecto 1</h5>
                                    <p className="card-text">Breve descripción del proyecto 1.</p>
                                    <a href="#" className="btn btn-primary">
                                        Ver Detalles
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img
                                    src="https://via.placeholder.com/300"
                                    className="card-img-top"
                                    alt="Proyecto 2"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Proyecto 2</h5>
                                    <p className="card-text">Breve descripción del proyecto 2.</p>
                                    <a href="#" className="btn btn-primary">
                                        Ver Detalles
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img
                                    src="https://via.placeholder.com/300"
                                    className="card-img-top"
                                    alt="Proyecto 3"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Proyecto 3</h5>
                                    <p className="card-text">Breve descripción del proyecto 3.</p>
                                    <a href="#" className="btn btn-primary">
                                        Ver Detalles
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Agregar más proyectos según sea necesario */}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Projects;
