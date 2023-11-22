
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/components/home";
import Contact from "./components/components/contact";
import About from "./components/components/about";
import Projects from "./components/components/projects";
import Services from "./components/components/services";
import Clients from "./components/components/clients";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/clients' element={<Clients/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/services' element={<Services/>}/>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
