import React from 'react';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './styles.css';

function Header(){
    return (

      <nav class="navbar navbar-expand-lg navbar-light">
        <Link className='logo' to={'/'}> <img class ="logo" src="src/assets/Logo.png"/></Link>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link className="nav-link" to={'/'}>Inicio</Link>
          </li>
        

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Recetas
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Nivel fácil</a></li>
              <li><a class="dropdown-item" href="#">Nivel medio</a></li>
              <li><a class="dropdown-item" href="#">Nivel difícil</a></li>
              <li><hr class="dropdown-divider"></hr></li>
              <li><Link className="dropdown-item" to={'/recetas'}>Ver todas las recetas</Link></li>
            </ul>
          </li>

          <li class="navbar-nav mr-auto">
            <Link className="nav-link" to={'/dietas'}>Dietas</Link>
          </li>

          <li class="navbar-nav mr-auto">
            <Link className="nav-link" to={'/sobrenosotros'}>Sobre nosotros</Link>
          </li>
        </ul>

        </div>

          <form class="d-flex">
            <input class="form-control mr-sm-2" type="search" placeholder="Buscar recetas" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
          </form>

          <div class="nav-item dropdown">

            <li class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <button class="usuario">
                <img src="src/assets/person.png" height="30px" width="100%" alt="Responsive image" ></img>
              </button>
            </li>
            <ul class="dropdown-menu">
              <li><Link className="dropdown-item" to={'/acceso'}>Acceder</Link></li>
              <li><Link className="dropdown-item" to={'/registro'}>Crear cuenta</Link></li>
              <li><Link className="dropdown-item" to={'/publicarreceta'}>PublicarReceta</Link></li>
              <li><Link className="dropdown-item" to={'/comersaludable'}>¿Por qué comer saludable?</Link></li>
            </ul>
              
          </div>
      </nav>

  );
}
export default Header;