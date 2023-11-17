import React from 'react';
import "bootstrap/js/src/util/backdrop";
import "bootstrap/dist/css/bootstrap.min.css"

import Backdrop from "bootstrap/js/src/util/backdrop";

const Layout = ({children}) => {
    return (
        <>
            <header style={{ backgroundColor: '#343a40', padding: '0.5rem 0', paddingBottom: '0' }}>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img className="navbar-logo w-25" src="https://png.pngtree.com/png-vector/20220704/ourmid/pngtree-phoenix-bird-logo-with-flaming-fire-body-for-game-team-png-image_5686330.png" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/" style={{ color: '#fff' }}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/services" style={{ color: '#fff' }}>Servicios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact" style={{ color: '#fff' }}>Contacta</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>


            <main>{children}</main>

            <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '2rem 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="footer-logo w-50 opacity-50" src="https://png.pngtree.com/png-vector/20220704/ourmid/pngtree-phoenix-bird-logo-with-flaming-fire-body-for-game-team-png-image_5686330.png" alt="" />
                        </div>
                        <div className="col-md-6">
                            <h5 style={{ color: '#dc3545' }}>Contacto</h5>
                            <p>Dirección: Tu dirección</p>
                            <p>Email: tu@email.com</p>
                            <p>Teléfono: +123 456 789</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout;