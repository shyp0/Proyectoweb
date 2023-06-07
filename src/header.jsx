import React from 'react';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './styles.css';

function Header(){
    return (
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <ul className="navbar-nav mr-auto">
           <li> <Link className='logo' to={'/'}> <img class ="logo" src="src/assets/Logo.png"/> </Link></li>
           <li className="nav-item"><Link className="nav-link" to={'/'}>Home</Link></li>
           <li className="nav-item"><Link className="nav-link" to={'/fotos'}>Fotos</Link></li>
           <li className="nav-item"><Link className="nav-link" to={'/inicioSesion'}>Inicio Sesión</Link></li>
           </ul>
       </nav>
  );
}
export default Header;