import Layout from "../layout/layout";
import React from "react";
import {Button, Card, Carousel} from 'react-bootstrap';


const Home = () => {
    return (

        <Layout>
            {/* Sección de Bienvenida */}
            <section
                className="mb-0"
                style={{
                    backgroundImage: 'url("https://media.licdn.com/dms/image/C4D12AQFvR6webwTsKw/article-cover_image-shrink_720_1280/0/1533823206296?e=2147483647&v=beta&t=wZN4Py-PYNTGQa6WCk1HVhivWC8SWcoIYFN1LdI1b9A")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    width: '100%',
                    height: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="container text-center">
                    <h2 className={"mb-4"}>Phoenix Communication</h2>
                    <p className="text-center">
                        Bienvenidos a Phoenix Communication, donde la creatividad y la innovación se encuentran.
                        Somos una empresa dedicada al mundo del marketing, diseño gráfico y programación,
                        fusionando habilidades para ofrecer soluciones integrales a nuestros clientes.
                        En Phoenix, no solo creamos, sino que también conectamos ideas con resultados.
                    </p>
                    <Button variant="primary" href={"/about"}>Saber más</Button>
                </div>
            </section>

            {/* Carrusel de Logos */}
            <section className="mb-5 text-center">
                <h2 className="mb-4">Nuestros Clientes</h2>
                <Carousel className="d-inline">
                    <Carousel.Item>
                        <img className="d-inline w-25"
                             src="https://www.dsigno.es/blog/wp-content/uploads/2022/05/Movistar-Logo-300x169.png"
                             alt="Cliente 1"/>
                        {/* Agregar más elementos del carrusel según sea necesario */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-inline w-25"
                             src="https://www.dsigno.es/blog/wp-content/uploads/2022/05/Logo_Corte_Ingles.svg_-300x169.png"
                             alt="Cliente 2"/>
                        {/* Agregar más elementos del carrusel según sea necesario */}
                    </Carousel.Item>
                </Carousel>
                <Button variant="primary" href={"/clients"} style={{marginTop: '5%'}}>Ver más clientes</Button>
            </section>

            {/* Información de Servicios */}
            <section className="text-center">
                <h2 className="mb-4">Nuestros Servicios</h2>
                <div className="row">
                    <div className="col-md-12 mb-4">
                        <div className="shadow p-3 mb-5 bg-primary text-white rounded">
                            <h5 className="mt-3">MARKETING</h5>
                            <p>
                                Ofrecemos soluciones integrales de marketing digital, desde la gestión de redes sociales
                                hasta estrategias avanzadas de generación de leads.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-12 mb-4">
                        <div className="shadow p-3 mb-5 bg-success text-white rounded">
                            <h5 className="mt-3">DESARROLLO IT</h5>
                            <p>
                                Desarrollamos software personalizado, implementamos sistemas ERP para una gestión
                                empresarial eficiente y creamos aplicaciones web innovadoras.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-12 mb-4">
                        <div className="shadow p-3 mb-5 bg-info text-white rounded">
                            <h5 className="mt-3">DISEÑO GRÁFICO</h5>
                            <p>
                                Transformamos ideas en imágenes impactantes, desde el diseño de logos y carteles hasta
                                la creación de contenido visual para redes sociales.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-12 mb-4">
                        <div className="shadow p-3 mb-5 bg-warning text-dark rounded">
                            <h5 className="mt-3">GESTIÓN DE EVENTOS</h5>
                            <p>
                                Nos encargamos de la organización completa de eventos, desde la planificación hasta la
                                ejecución, incluyendo la contratación de personal y el alquiler de infraestructuras.
                            </p>
                        </div>
                    </div>
                </div>
                <Button variant="primary" className="mt-4"><a href="/services" style={{color: "white"}}>Saber
                    más</a></Button>
            </section>
            {/*Grafico*/}

 


            {/* Tarjetas de Tarifas */}
            <section className="mb-5 text-center" style={{marginBottom: '10%'}}>
                <h2 className="mb-4">Nuestras Tarifas</h2>
                <div className="row">
                    <div className="col-md-4">
                        <Card className="h-100 border-0 shadow">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-center mb-3">Phoenix Estándar</Card.Title>
                                <Card.Text className="flex-grow-1">
                                    <ul className="list-unstyled">
                                        <li>1 proyecto a la vez</li>
                                        <li>Entrega de 5-7 días</li>
                                        <li>LandingPage</li>
                                        <li>Gestión RRSS</li>
                                        <li>Diseño gráfico</li>
                                    </ul>
                                </Card.Text>
                                <Card.Text className="text-center mb-3 text-muted">Precio: 200€/mes</Card.Text>
                                <Button variant="primary" href={"/contact"} className="align-self-end">
                                    Contrátanos
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card className="h-100 border-0 shadow">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-center mb-3">Pro Phoenix</Card.Title>
                                <Card.Text className="flex-grow-1">
                                    <ul className="list-unstyled">
                                        <li>2 proyectos a la vez</li>
                                        <li>Entrega de 5-7 días</li>
                                        <li>LandingPage</li>
                                        <li>Gestión RRSS</li>
                                        <li>Diseño gráfico</li>
                                    </ul>
                                </Card.Text>
                                <Card.Text className="text-center mb-3 text-muted">Precio: 220€/mes</Card.Text>
                                <Button variant="primary" href={"/contact"} className="align-self-end">
                                    Contrátanos
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card className="h-100 border-0 shadow">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-center mb-3">Phoenix Deluxe</Card.Title>
                                <Card.Text className="flex-grow-1">
                                    <ul className="list-unstyled">
                                        <li>4 proyectos a la vez</li>
                                        <li>Entrega de 5-7 días</li>
                                        <li>LandingPage</li>
                                        <li>Gestión RRSS</li>
                                        <li>Diseño gráfico</li>
                                    </ul>
                                </Card.Text>
                                <Card.Text className="text-center mb-3 text-muted">Precio: 300€/mes</Card.Text>
                                <Button variant="primary" href={"/contact"} className="align-self-end">
                                    Contrátanos
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>

        </Layout>

    );
};

export default Home;
