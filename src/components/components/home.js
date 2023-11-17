import Layout from "../layout/layout";
const Home =() =>{
    return(<div className="App">
            <>
                <Layout>
                    <div className="Heade-titile">
                    <div>
                        <h1>Phoenix Communication</h1>
                    </div>
                    </div>
                    <div className={"Carrusel logos"}>
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="..." className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="..." className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="..." className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    </div>
                    <div className={"Descrupcio"}>
                        <div>
                            <h2>Descripcion:</h2>
                            <p>Monento mori</p>
                            <button><a href="/contact">Contactonos</a></button>
                        </div>
                    </div>
                    <div className={"Tarifas"}>
                        <span id={"Basic"}>
                            <h3>Basic plan</h3>
                            <ul>
                                <li>a</li>
                                <li>b</li>
                                <li>c</li>
                                <li>s</li>
                            </ul>
                            <button><a href="/contact">Contratar</a></button>
                        </span><span id={"Basic"}>
                            <h3>Basic plan</h3>
                            <ul>
                                <li>a</li>
                                <li>b</li>
                                <li>c</li>
                                <li>s</li>
                            </ul>
                            <button><a href="/contact">Contratar</a></button>
                        </span><span id={"Basic"}>
                            <h3>Basic plan</h3>
                            <ul>
                                <li>a</li>
                                <li>b</li>
                                <li>c</li>
                                <li>s</li>
                            </ul>
                            <button><a href="/contact">Contratar</a></button>
                        </span>


                    </div>

                </Layout>
            </>
        </div>);
};
export default Home;