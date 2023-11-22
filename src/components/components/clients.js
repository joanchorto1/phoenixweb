import React from 'react';
import Layout from '../layout/layout';

const Clients = () => {
    return (
        <Layout>
            <div className="container mt-5">
                <section>
                    <h2 className="text-center mb-4">Nuestros Clientes Satisfechos</h2>
                    <p>
                        En Phoenix Group, hemos tenido el privilegio de trabajar con una variedad de clientes en
                        diferentes industrias. Aquí te presentamos algunos de nuestros clientes satisfechos.
                    </p>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img
                                    src="https://via.placeholder.com/300"
                                    className="card-img-top"
                                    alt="Cliente 1"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Cliente 1</h5>
                                    <p className="card-text">Breve descripción del Cliente 1 y su experiencia con nosotros.</p>
                                    {/*<a href="#" className="btn btn-primary">*/}
                                    {/*    Ver Detalles*/}
                                    {/*</a>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img
                                    src="https://via.placeholder.com/300"
                                    className="card-img-top"
                                    alt="Cliente 2"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Cliente 2</h5>
                                    <p className="card-text">Breve descripción del Cliente 2 y su experiencia con nosotros.</p>
                                    {/*<a href="#" className="btn btn-primary">*/}
                                    {/*    Ver Detalles*/}
                                    {/*</a>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img
                                    src="https://via.placeholder.com/300"
                                    className="card-img-top"
                                    alt="Cliente 3"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Cliente 3</h5>
                                    <p className="card-text">Breve descripción del Cliente 3 y su experiencia con nosotros.</p>
                                    {/*<a href="#" className="btn btn-primary">*/}
                                    {/*    Ver Detalles*/}
                                    {/*</a>*/}
                                </div>
                            </div>
                        </div>
                        {/* Agregar más clientes según sea necesario */}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Clients;
