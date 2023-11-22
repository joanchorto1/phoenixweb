import React from 'react';
import logoImage from '../img/phoenixlogo.png';
import logoImage2 from '../img/phoenixlogo2.png';



const Layout = ({ children }) => {
    return (
        <>
            <header style={{ backgroundColor: '#2c3e50', padding: '0.5rem 0', paddingBottom: '0' }}>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img className="navbar-logo w-50" src={logoImage} alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => document.getElementById("navbarNav").classList.toggle("show")}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/" style={{ fontSize: '1.2rem', color: '#fff' }}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/services" style={{ fontSize: '1.2rem', color: '#fff' }}>Servicios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/clients" style={{ fontSize: '1.2rem', color: '#fff' }}>Clientes</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="/about" style={{ fontSize: '1.2rem', color: '#fff' }}>SobreNosotros</a>
                                </li>
                                <li className="nav-item ">
                                       <a className="nav-link  " href="/contact" style={{ fontSize: '1.2rem', color: '#fff' }}>Contacta</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main>{children}</main>

            <footer style={{ backgroundColor: '#2c3e50', color: '#fff', padding: '2rem 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 w-25">
                            <img className="navbar-logo w-75" src={logoImage2} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h5>Contacto</h5>
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