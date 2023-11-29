import React, { useEffect } from "react";
import { Button, Carousel } from 'react-bootstrap';
import Layout from "../layout/layout";
import LogoVidal from "../img/tomasvidal.png";
import LogoGastromar from "../img/Selecció_161.png";
import { useMetaTags } from "../context/metaTagsContext";
import home1 from '../img/Home1.jpg';
import home2 from '../img/Home2.jpg';
import home3 from '../img/home3.jpg';
import Blog from "./blog";  // Importa el componente del blog

const growthData = [
    { month: 'Mes 1', leads: 50 },
    { month: 'Mes 2', leads: 80 },
    { month: 'Mes 3', leads: 120 },
    { month: 'Mes 4', leads: 200 },
    { month: 'Mes 5', leads: 300 },
    { month: 'Mes 6', leads: 450 },
];

const Home = () => {
    const { updateMetaTags } = useMetaTags();

    useEffect(() => {
        // Actualiza las metaetiquetas específicas para esta página
        updateMetaTags({
            title: 'Phoenix Group - Tu Socio en Marketing Digital y Desarrollo Web',
            description: 'Potencia tu negocio con Phoenix Group, tu agencia de Marketing Digital y Desarrollo Web en Tarragona y el Delta de l\'Ebre. Creatividad, tecnología y resultados tangibles.',
            // ... otras metaetiquetas específicas
        });
    }, [updateMetaTags]);

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
            <section className="mb-0" style={{
                backgroundImage: 'url("https://media.licdn.com/dms/image/C4D12AQFvR6webwTsKw/article-cover_image-shrink_720_1280/0/1533823206296?e=2147483647&v=beta&t=wZN4Py-PYNTGQa6WCk1HVhivWC8SWcoIYFN1LdI1b9A")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                width: '100%',
                height: '50vh',
                display: 'flex',
                alignItems: 'center',
            }}>
                <div className="container text-center">
                    <h1 className={"mb-4"}>Phoenix Group</h1>
                    <h2>Transformamos tu negocio con Marketing Digital y Desarrollo Web en Tarragona y el Delta de l'Ebre</h2>
                    <p className="text-center">
                        Descubre el poder de Phoenix Group. Fusionamos creatividad y tecnología para llevar tu negocio al siguiente nivel.
                    </p>
                    <Button variant="outline-light" href={"/sobrenosotros"}>Conoce más</Button>
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
                    <Button style={{ backgroundColor: '#2c3e50' }} href="/contacto" className="btn btn-primary">
                        Contacta
                    </Button>
                </div>
            </section>
            <section className="text-center " style={{ backgroundColor: '#2c3e50', paddingTop: '2%' }}>
                <h2 className="mb-4  text-white">Nuestros Servicios</h2>
                <div className="row" >
                    <div className="col-md-6 mb-4">
                        <div style={{ backgroundColor: '#2c3e50' }} className="shadow p-3 mb-5 text-white rounded">
                            <h5 className="mt-3">Marketing Digital</h5>
                            <p>
                                Potenciamos tu visibilidad con soluciones integrales de marketing digital, desde la gestión de redes sociales hasta estrategias avanzadas de generación de leads.
                            </p>
                            <p>
                                SEO, Redes Sociales, Estrategias de Marketing Digital
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div style={{ backgroundColor: '#2c3e50' }} className="shadow p-3 mb-5 text-white rounded">
                            <h5 className="mt-3">Desarrollo Web</h5>
                            <p>
                                Creamos experiencias únicas con desarrollo web personalizado, sistemas ERP eficientes y aplicaciones innovadoras adaptadas a tus necesidades.
                            </p>
                            <p>
                                Desarrollo de Software, Sistemas ERP, Aplicaciones Web
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div style={{ backgroundColor: '#2c3e50' }} className="shadow p-3 mb-5 text-white rounded">
                            <h5 className="mt-3">Diseño Gráfico</h5>
                            <p>
                                Transformamos ideas en imágenes impactantes, desde el diseño de logos hasta la creación de contenido visual para redes sociales, destacando tu marca en un mundo visualmente competitivo.
                            </p>
                            <p>
                                Diseño de Logos, Diseño Gráfico Impactante, Contenido Visual para Redes Sociales
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 ">
                        <div style={{ backgroundColor: '#2c3e50' }} className="shadow p-3 mb-5 text-white rounded">
                            <h5 className="mt-3">Gestión de Eventos</h5>
                            <p>
                                Organizamos eventos memorables desde la planificación hasta la ejecución, incluyendo la contratación de personal y el alquiler de infraestructuras.
                            </p>
                            <p>
                                Organización de Eventos, Planificación de Eventos, Eventos Memorables
                            </p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#2c3e50', width: '100%', alignItems: 'center' }} className={'mb-4'}>
                        <Button variant="outline-light" className="mt-4"><a href="/servicios" style={{ color: "white" }}>Descubre más</a></Button>
                    </div>
                </div>
            </section>


            <section className="mb-5 text-center pt-4 " >
                <h2 className="mb-4 ">Nuestra Fortaleza</h2>
                <div className="row " >
                    <div className="col-md-8 offset-md-2">
                        <p>
                            En Phoenix Group, destacamos por nuestra capacidad para fusionar creatividad y tecnología, creando soluciones innovadoras que impulsan el crecimiento de nuestros clientes.
                        </p>
                        <p>
                            Con un equipo altamente calificado y un enfoque centrado en el cliente, transformamos ideas en resultados tangibles, desde estrategias de marketing hasta desarrollo web personalizado.
                        </p>
                    </div>
                </div>
            </section>
            <section className="mb-5 text-center pb-3 " >
                <h2 className="mb-4">¿Listo para Potenciar tu Negocio?</h2>
                <p>
                    Descubre cómo Phoenix Group puede llevar tu empresa al siguiente nivel. Ofrecemos soluciones personalizadas alineadas con tus objetivos comerciales.
                </p>
                <div style={{ width: '100%', alignItems: 'center' }} className={'mb-4'}>
                    <Button style={{backgroundColor:'#2c3e50'}} className="mt-4"><a href="/contacto" style={{backgroundColor:'#2c3e50', color: "white" }}>Contacta ahora</a></Button>
                </div>
            </section>




            <section className="mb-5 text-center">
                <h2 className="mb-4">Nuestro Proceso de Trabajo</h2>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="mb-4">
                            <h3>Paso 1: Consulta Inicial</h3>
                            <p>
                                Comenzamos con una consulta para comprender tus objetivos, necesidades y requisitos específicos.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3>Paso 2: Estrategia Personalizada</h3>
                            <p>
                                Desarrollamos una estrategia personalizada que se alinee con tus metas comerciales y maximice los resultados.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3>Paso 3: Implementación y Desarrollo</h3>
                            <p>
                                Ponemos en marcha la estrategia acordada, ya sea a través de campañas de marketing, desarrollo web o diseño gráfico.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3>Paso 4: Seguimiento y Optimización</h3>
                            <p>
                                Realizamos un seguimiento continuo de los resultados y ajustamos la estrategia según sea necesario para mejorar el rendimiento.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <Button style={{ backgroundColor: '#2c3e50' }} variant="outline-light" className="mt-4"><a href="/contacto" style={{ color: "white" }}>¡Comienza Ahora!</a></Button>
                </div>
            </section>
            <section className="mb-5 text-center">
                <h2 className="mb-4">Nuestros Clientes</h2>
                <Carousel className="d-inline">
                    <Carousel.Item>
                        <img className="d-inline w-25 h25" src={LogoVidal} alt="Piscines Tomas Vidal SL" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-inline w-25" src={LogoGastromar} alt="Gastromar Tortosa" />
                    </Carousel.Item>
                </Carousel>
                {/*<div style={{ backgroundColor: '#2c3e50', width: '100%', alignItems: 'center' }} className={'mb-4'}>*/}
                {/*    <Button variant="outline-light" className="mt-4"><a href="/clients" style={{ color: "white" }}>Ver más clientes</a></Button>*/}
                {/*</div>*/}
            </section>
            <section className="mb-5 text-center pt-5">
                <h2 className="mb-4">Nuestro Equipo</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={home1} className="card-img-top" alt="Miembro del Equipo 1" />
                            <div className="card-body">
                                <h5 className="card-title">Joan Chortó</h5>
                                <p className="card-text">Desarrollador web y CTO</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={home2} className="card-img-top" alt="Miembro del Equipo 2" />
                            <div className="card-body">
                                <h5 className="card-title">Marc Alonso</h5>
                                <p className="card-text">Organizador de Eventos</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={home3} className="card-img-top" alt="Miembro del Equipo 3" />
                            <div className="card-body">
                                <h5 className="card-title">David Cano</h5>
                                <p className="card-text">Técnico de Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Blog />
        </Layout>
    );
};

export default Home;