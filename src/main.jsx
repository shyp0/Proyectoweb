import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './styles.css';

//componentes
import Header from './header';
import Footer from './footer';
import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Inicio from './pages/Inicio';
import Dietas from './pages/Dietas';
import Recetas from './pages/Recetas';
import Acceso from './pages/Acceso';
import Registro from './pages/Registro';
import PublicarReceta from './pages/PublicarReceta';
import Sobrenosotros from './pages/Sobrenosotros';
import ComerSaludable from './pages/ComerSaludable';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

          <BrowserRouter>
            <Header/>
            <Routes>
          			<Route path="/" element={<Home />} />
                    <Route path="/fotos" element={<Galeria />} />
                    <Route path="/inicioSesion" element={<Inicio />} />
                    <Route path="/dietas" element={<Dietas />} />
                    <Route path="/recetas" element={<Recetas />} />
                    <Route path="/acceso" element={<Acceso />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/publicarreceta" element={<PublicarReceta />} />
                    <Route path="/sobrenosotros" element={<Sobrenosotros />} />
                    <Route path="/comersaludable" element={<ComerSaludable />} />
        	</Routes>
           
          </BrowserRouter>

          <Footer/>

    </React.StrictMode>
)
