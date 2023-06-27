import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './styles.css';

//componentes
import Home from './pages/Home';
import Header from './header';
import Footer from './footer';
import Dietas from './pages/Dietas';
import MostrarRecetas from './pages/MostrarRecetas';
import Acceso from './pages/Acceso';
import Registro from './pages/Registro';
import PublicarReceta from './pages/PublicarReceta';
import Sobrenosotros from './pages/Sobrenosotros';
import ComerSaludable from './pages/ComerSaludable';
import DetalleReceta from './pages/DetalleReceta';
import EliminarReceta from './pages/EliminarReceta';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

          <BrowserRouter>
            <Header/>
            <Routes>
          			<Route path="/" element={<Home />} />
                    <Route path="/dietas" element={<Dietas />} />
                    <Route path="/mostrarrecetas" element={<MostrarRecetas />} />
                    <Route path="/acceso" element={<Acceso />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/publicarreceta" element={<PublicarReceta />} />
                    <Route path="/sobrenosotros" element={<Sobrenosotros />} />
                    <Route path="/comersaludable" element={<ComerSaludable />} />
                    <Route path="/detallereceta" element={<DetalleReceta />} />
                    <Route path="/eliminarreceta" element={<EliminarReceta />} />
        	</Routes>
           
          </BrowserRouter>

          <Footer/>

    </React.StrictMode>
)
