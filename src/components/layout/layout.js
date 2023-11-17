import React from 'react';
import "bootstrap/js/src/util/backdrop";
import "bootstrap/dist/css/bootstrap-grid.min.css"
import Backdrop from "bootstrap/js/src/util/backdrop";
const Layout =({children}) =>{
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Servicios</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>

            </header>
            <main>{children}</main>
            <footer>
                <div className="blockquote-footer">
                    <div className="h-25 d-inline-block" >
                        <img className="img-fluid" alt="Responsive image" src="https://www.creativefabrica.com/wp-content/uploads/2022/08/03/Phoenix-Logo-of-Mythological-Bird-Graphics-35417559-1.jpg" />
                    </div>

                        <p className="text-sm leading-6 text-gray-300">Making the world a better place through constructing elegant hierarchies.</p>
                        <div className="flex space-x-6">

                        </div>
                </div>
            </footer>
        </>
    )
}

export default Layout;