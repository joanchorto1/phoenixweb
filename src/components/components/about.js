import Layout from "../layout/layout";
import React from "react";



const About = () => {
    return (
        <Layout>
            <div className={"container"} style={{marginTop:'10%'}}>
                <section  className={"justify-content-around"} style={{marginBottom:'10%' }}>
                    <h2 className="text-center mb-4">Acerca de Nosotros</h2>
                    <p>
                        En Phoenix Communication, no solo creamos soluciones; creamos conexiones significativas.
                        Nuestra historia es una fusión de creatividad, innovación y dedicación. Como una empresa joven
                        con sede en la hermosa provincia de Tarragona, estamos decididos a dejar una huella duradera en
                        el mundo del marketing, diseño gráfico y desarrollo web.
                    </p>
                    <p>
                        Nos enorgullece ser un equipo apasionado de profesionales jóvenes, impulsados por la
                        excelencia y el deseo de superar las expectativas. Cada miembro de nuestro equipo aporta una
                        perspectiva única y habilidades especializadas, creando un ambiente colaborativo que inspira la
                        innovación.
                    </p>
                    <div>
                        <h3>Nuestra Filosofía</h3>
                        <p>
                            En Phoenix, creemos en la poderosa combinación de la creatividad y la tecnología. Esta
                            filosofía impulsa cada proyecto que emprendemos. Nos esforzamos por ofrecer soluciones
                            inteligentes y visualmente impactantes que no solo cumplen con los objetivos comerciales,
                            sino que también elevan la experiencia del usuario.
                        </p>
                    </div>
                    <div>
                        <h3>Nuestra Visión</h3>
                        <p>
                            Nuestra visión es ser líderes en la industria, marcando la pauta en términos de innovación
                            y calidad. Buscamos transformar la manera en que las empresas abordan el marketing y el
                            desarrollo web, brindando resultados tangibles y construyendo relaciones sólidas con
                            nuestros clientes.
                        </p>
                    </div>
                    <div>
                        <h3>Compromiso con la Excelencia</h3>
                        <p>
                            En cada proyecto, nos comprometemos con la excelencia en cada detalle. Desde el diseño
                            gráfico hasta el desarrollo web y la gestión de eventos, perseguimos la perfección con
                            pasión y dedicación. Creemos que el éxito no es solo un destino, sino un viaje continuo
                            hacia la mejora constante.
                        </p>
                    </div>
                    <p>
                        En Phoenix Communication, no solo somos un proveedor de servicios; somos un socio estratégico
                        en tu viaje hacia el éxito. Únete a nosotros mientras creamos, innovamos y conectamos ideas
                        con resultados extraordinarios.
                    </p>
                </section>
            </div>
        </Layout>
    );
};

export default About;