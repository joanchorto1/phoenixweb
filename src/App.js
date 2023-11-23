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

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/clients' element={<Clients/>}/>
              <Route path='/services' element={<Services/>}/>
              <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
              <Route path='/cookie-notice' element={<CookieNotice/>}/>
              <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
