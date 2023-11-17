
import './App.css';
import Layout from "./components/layout/layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/components/home";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              {/*<Route path='/edit' element={<EditArtists/>}/>*/}
              {/*<Route path='/create' element={<CreateArtists/>}/>*/}
          </Routes>
      </BrowserRouter>

  );
}

export default App;
