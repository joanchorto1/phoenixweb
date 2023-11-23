import React from "react";
import { Button,  Carousel } from 'react-bootstrap';
import Layout from "../layout/layout";
import LogoVidal from "../img/tomasvidal.png"
import LogoGastromar from "../img/Selecció_161.png"

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

            <section className="mb-5 text-center" style={{backgroundColor:'#2c3e50'}}>
                <h2 className="mb-4 text-white" style={{backgroundColor:'#2c3e50'}}>Nuestra Fortaleza</h2>
                <div className="row text-white" style={{backgroundColor:'#2c3e50'}}>
                    <div className="col-md-8 offset-md-2">
                        <p>
                            En Phoenix Group, nos destacamos por nuestra capacidad para fusionar creatividad y tecnología.
                            Nuestra fortaleza radica en la creación de soluciones innovadoras que impulsan el crecimiento de
                            nuestros clientes.
                        </p>
                        <p>
                            Con un equipo altamente calificado y un enfoque centrado en el cliente, trabajamos para convertir
                            ideas en resultados tangibles. Desde estrategias de marketing efectivas hasta desarrollo web
                            personalizado, estamos aquí para impulsar tu negocio hacia el éxito.
                        </p>
                    </div>
                </div>
            </section>
            <section className="mb-5 text-center">
                <h2 className="mb-4">Nuestros Clientes</h2>
                <Carousel className="d-inline">
                    <Carousel.Item>
                        <img className="d-inline w-25 h25"
                             src={LogoVidal}
                             alt="Piscines Tomas Vidal SL" />
                        {/* Agregar más elementos del carrusel según sea necesario */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-inline w-25"
                             src={LogoGastromar}   alt="Gastromar Tortosa" />
                        {/* Agregar más elementos del carrusel según sea necesario */}
                    </Carousel.Item>
                </Carousel>
                {/*<Button  variant="outline-light" href={"/clients"} style={{ marginTop: '5%', backgroundColor: '#2c3e50' }}>Ver más clientes</Button>*/}
            </section>
            <section className="mb-5 text-center text-white pb-3 pt-4" style={{backgroundColor:'#2c3e50'}}>
                <h2 className="mb-4">¿Listo para Potenciar tu Negocio?</h2>
                <p>
                    Descubre cómo Phoenix Group puede llevar tu empresa al siguiente nivel. Estamos aquí para ofrecerte
                    soluciones personalizadas que se alinean con tus objetivos comerciales.
                </p>
                <div style={{backgroundColor: '#2c3e50',width: '100%', alignItems:'center'}} className={'mb-4'}>
                    <Button variant="outline-light" className="mt-4"><a href="/contact" style={{ color: "white" }}>Contacta ahora!</a></Button>
                </div>
            </section>

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
                            <h5 className="mt-3">DESARROLLO WEB</h5>
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

        </Layout>
    );
};

export default Home;
