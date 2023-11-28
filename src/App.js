import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/components/home";
import Contact from "./components/components/contact";
import About from "./components/components/about";
import Services from "./components/components/services";
import Clients from "./components/components/clients";
import PrivacyPolicy from "./components/components/privacy-policy";
import CookieNotice from "./components/components/cookie-notice";
import TermsAndConditions from "./components/components/terms-and-conditions";
import Blog from "./components/components/blog";
import MarketingDigital1 from "./components/articles/marketingDigital1";
import MarketingDigital2 from "./components/articles/marketingDigital2";
import DesarrolloWeb1 from "./components/articles/desarrolloWeb1";
import DesarrolloWeb2 from "./components/articles/desarrolloWeb2";
import DisenoGrafico1 from "./components/articles/disenoGrafico1";
import DisenoGrafico2 from "./components/articles/disenoGrafico2";
import Eventos2 from "./components/articles/eventos2";
import Eventos1 from "./components/articles/eventos1";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contacto' element={<Contact/>}/>
                <Route path='/sobrenosotros' element={<About/>}/>
                <Route path='/clientes' element={<Clients/>}/>
                <Route path='/servicios' element={<Services/>}/>
                <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
                <Route path='/cookie-notice' element={<CookieNotice/>}/>
                <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
                <Route path='/blog' element={<Blog/>}/>
                {/* Rutas de artículos de blog */}
                <Route path='/blog/marketing1' element={<MarketingDigital1/>}/>
                <Route path='/blog/marketing2' element={<MarketingDigital2/>}/>
                <Route path='/blog/desarrollo1' element={<DesarrolloWeb1/>}/>
                <Route path='/blog/desarrollo2' element={<DesarrolloWeb2/>}/>
                <Route path='/blog/diseno1' element={<DisenoGrafico1/>}/>
                <Route path='/blog/diseno2' element={<DisenoGrafico2/>}/>
                <Route path='/blog/eventos1' element={<Eventos1/>}/>
                <Route path='/blog/eventos2' element={<Eventos2/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default App;