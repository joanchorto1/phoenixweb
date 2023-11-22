import React from "react";
import { Button, Card, Carousel } from 'react-bootstrap';
import Layout from "../layout/layout";

const growthData = [
    { month: 'Mes 1', leads: 50 },
    { month: 'Mes 2', leads: 80 },
    { month: 'Mes 3', leads: 120 },
    { month: 'Mes 4', leads: 200 },
    { month: 'Mes 5', leads: 300 },
    { month: 'Mes 6', leads: 450 },
];

const Home = () => {

    const calculatePath = () => {
        const maxY = Math.max(...growthData.map((data) => data.leads));
        const pathData = growthData.map((data, index) => {
            const x = (index / (growthData.length - 1)) * 100;
            const y = ((maxY - data.leads) / maxY) * 100;
            return `${x},${y}`;
        });
        return `M${pathData.join(' L')}`;
    };

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
                    <h2 className={"mb-4"}>Phoenix Group</h2>
                    <p className="text-center">
                        Bienvenidos a Phoenix Group, donde la creatividad y la innovación se encuentran.
                        Somos una empresa dedicada al mundo del marketing, diseño gráfico y programación,
                        fusionando habilidades para ofrecer soluciones integrales a nuestros clientes.
                        En Phoenix, no solo creamos, sino que también conectamos ideas con resultados.
                    </p>
                    <Button variant="outline-light" href={"/about"}>Saber más</Button>
                </div>
            </section>

            {/* Carrusel de Logos */}
            <section className="mb-5 text-center">
                <h2 className="mb-4">Nuestros Clientes</h2>
                <Carousel className="d-inline">
                    <Carousel.Item>
                        <img className="d-inline w-25"
                             src="https://www.dsigno.es/blog/wp-content/uploads/2022/05/Movistar-Logo-300x169.png"
                             alt="Cliente 1" />
                        {/* Agregar más elementos del carrusel según sea necesario */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-inline w-25"
                             src="https://www.dsigno.es/blog/wp-content/uploads/2022/05/Logo_Corte_Ingles.svg_-300x169.png"
                             alt="Cliente 2" />
                        {/* Agregar más elementos del carrusel según sea necesario */}
                    </Carousel.Item>
                </Carousel>
                <Button  variant="outline-light" href={"/clients"} style={{ marginTop: '5%', backgroundColor: '#2c3e50' }}>Ver más clientes</Button>
            </section>

            {/* Información de Servicios */}
            <section className="text-center " style={{backgroundColor: '#2c3e50', paddingTop:'2%'}}>
                <h2 className="mb-4  text-white">Nuestros Servicios</h2>
                <div className="row" >
                    <div className="col-md-12 mb-4">
                        <div style={{backgroundColor: '#2c3e50'}} className="shadow p-3 mb-5 text-white rounded">
                            <h5 className="mt-3">MARKETING</h5>
                            <p>
                                Ofrecemos soluciones integrales de marketing digital, desde la gestión de redes sociales
                                hasta estrategias avanzadas de generación de leads.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-12 mb-4">
                        <div style={{backgroundColor: '#2c3e50'}} className="shadow p-3 mb-5 text-white rounded">
                            <h5 className="mt-3">DESARROLLO IT</h5>
                            <p>
                                Desarrollamos software personalizado, implementamos sistemas ERP para una gestión
                                empresarial eficiente y creamos aplicaciones web innovadoras.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-12 mb-4">
                        <div style={{backgroundColor: '#2c3e50'}} className="shadow p-3 mb-5 text-white rounded">
                            <h5 className="mt-3">DISEÑO GRÁFICO</h5>
                            <p>
                                Transformamos ideas en imágenes impactantes, desde el diseño de logos y carteles hasta
                                la creación de contenido visual para redes sociales.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-12 ">
                        <div style={{backgroundColor: '#2c3e50'}} className="shadow p-3 mb-5 text-white rounded">
                            <h5 className="mt-3">GESTIÓN DE EVENTOS</h5>
                            <p>
                                Nos encargamos de la organización completa de eventos, desde la planificación hasta la
                                ejecución, incluyendo la contratación de personal y el alquiler de infraestructuras.
                            </p>
                        </div>
                    </div>
                    <div style={{backgroundColor: '#2c3e50',width: '100%', alignItems:'center'}} className={'mb-4'}>
                        <Button variant="outline-light" className="mt-4"><a href="/services" style={{ color: "white" }}>Saber más</a></Button>
                    </div>

                </div>

            </section>

            {/*Grafico*/}
            <section className="mb-5 text-center">
                <h2 className="mb-4 mt-3">Crecimiento de Clientes</h2>
                <div className="row">
                    <div className="col-md-12">
                        <svg viewBox="0 0 100 100" width="100%" height="200">
                            <path d={calculatePath()} fill="none" stroke="#3498db" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
                <div className="row mt-3">
                    {growthData.map((data) => (
                        <div key={data.month} className="col-md-2">
                            <p className="mb-0">{data.month}</p>
                            <p className="font-weight-bold">{data.leads} Leads</p>
                        </div>
                    ))}
                </div>
                <div className="mt-3">
                    <a style={{backgroundColor:'#2c3e50'}} href="/contact" className="btn btn-primary">
                        Contacta
                    </a>
                </div>
            </section>
            {/* Tarjetas de Tarifas */}
            <section className="mb-5 mt-3 text-center" style={{backgroundColor: '#2c3e50', paddingBottom:'5%'}} >
                <h2 className="mb-4 pt-3 text-white" >Nuestras Tarifas</h2>
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
                                <Button style={{backgroundColor: '#2c3e50'}} variant="outline-light" href={"/contact"} className="align-self-end">
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
                                <Button style={{backgroundColor: '#2c3e50'}} variant="outline-light" href={"/contact"} className="align-self-end">
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
                                <Button style={{backgroundColor: '#2c3e50'}} variant="outline-light" href={"/contact"} className="align-self-end">
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
