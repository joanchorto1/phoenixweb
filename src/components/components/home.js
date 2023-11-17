import Layout from "../layout/layout";
import React from "react";
import { Card, Carousel } from 'react-bootstrap';


const Home =() =>{
    return(<div>
            <>
                <Layout>

                    <div className="container mt-5">
                        {/* Descripción de la empresa */}
                        <section className="mb-5">
                            <h2 className="text-center mb-4">Marketing y Desarrollo de Aplicaciones Web</h2>
                            <p className="text-center">
                                Somos una empresa dedicada a proporcionar servicios de marketing y desarrollo de aplicaciones web. Ofrecemos soluciones innovadoras y personalizadas para satisfacer las necesidades de otras empresas.
                            </p>
                        </section>

                        {/* Carrusel de logos */}
                        <section className="mb-5">
                            <h2 className="text-center mb-4">Nuestros Clientes</h2>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://via.placeholder.com/800x400"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                {/* Agregar más elementos del carrusel según sea necesario */}
                            </Carousel>
                        </section>

                        {/* Tarjetas de servicios */}
                        <section className="mb-5">
                            <h2 className="text-center mb-4">Nuestros Servicios</h2>
                            <div className="row">
                                <div className="col-md-4">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Servicio A</Card.Title>
                                            <Card.Text>
                                                Descripción del Servicio A.
                                            </Card.Text>
                                            <Card.Text className="text-muted">Precio: $XXX</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>

                                <div className="col-md-4">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Servicio B</Card.Title>
                                            <Card.Text>
                                                Descripción del Servicio B.
                                            </Card.Text>
                                            <Card.Text className="text-muted">Precio: $XXX</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>

                                <div className="col-md-4">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Servicio C</Card.Title>
                                            <Card.Text>
                                                Descripción del Servicio C.
                                            </Card.Text>
                                            <Card.Text className="text-muted">Precio: $XXX</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </section>
                    </div>

                </Layout>
            </>
        </div>);
};
export default Home;