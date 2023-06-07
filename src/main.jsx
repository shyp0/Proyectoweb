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



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

          <BrowserRouter>
            <Header/>
            <Routes>
          			<Route path="/" element={<Home />} />
                    <Route path="/fotos" element={<Galeria />} />
                    <Route path="/inicioSesion" element={<Inicio />} />
        	</Routes>
           
          </BrowserRouter>

          <Footer/>

    </React.StrictMode>
)
