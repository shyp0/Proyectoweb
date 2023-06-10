import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="lg" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img class="logo" src="src/assets/Logo.png"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/"></Nav.Link>
            <NavDropdown title="Recetas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Nivel fácil</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Nivel medio</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Nivel difícil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/recetas">
                Ver todas las recetas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/dietas">Dietas</Nav.Link>
            <Nav.Link href="/sobrenosotros">Sobre nosotros</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>

          <img class="person" src="src/assets/person.png"></img>
          <NavDropdown id="navbarScrollingDropdown">
              <NavDropdown.Item href="/acceso">Acceder</NavDropdown.Item>
              <NavDropdown.Item href="/registro">Crear cuenta</NavDropdown.Item>
              <NavDropdown.Item href="/publicarreceta">Publicar Receta</NavDropdown.Item>
              <NavDropdown.Item href="/comersaludable">¿Por qué comer sano?</NavDropdown.Item>
          </NavDropdown>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

/*import React from 'react';
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
export default Header;*/