import React from 'react';
import "bootstrap/js/src/util/backdrop";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Layout = ({children}) => {
    return (
        <>

            <header style={{ backgroundColor: '#3498db', padding: '0.5rem 0', paddingBottom: '0' }}>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img className="navbar-logo w-25" src="https://www.clker.com/cliparts/G/D/U/1/Q/1/phoenix-white-hi.png" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => document.getElementById("navbarNav").classList.toggle("show")}>  <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link bs-primary-text" href="/" style={{ fontSize: '1.2rem' }}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link bs-primary-text" href="/services" style={{ fontSize: '1.2rem' }}>Servicios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link bs-primary-text" href="/projects" style={{ fontSize: '1.2rem' }}>Proyectos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link bs-primary-text" href="/clients" style={{ fontSize: '1.2rem' }}>Clientes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link bs-primary-text" href="/about" style={{ fontSize: '1.2rem' }}>Sobre Nosotros</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link bs-primary-text" href="/contact" style={{ fontSize: '1.2rem' }}>Contacta</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>


            <main>{children}</main>

            <footer style={{backgroundColor: '#3498db', color: '#fff', padding: '2rem 0'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 w-25 ">
                            <img className="navbar-logo w-50"
                                 src="https://www.clker.com/cliparts/G/D/U/1/Q/1/phoenix-white-hi.png" alt=""/>
                        </div>
                        <div className="col-md-6 ">
                            <h5 className={"alert-primary"}>Contacto</h5>
                            <p>Dirección: Tu dirección</p>
                            <p>Email: tu@email.com</p>
                            <p>Teléfono: +123 456 789</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layout;