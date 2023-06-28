import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function NavScrollExample() {

  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [auth, setAuth] = useState('');
  const [tipo, setTipo] = useState('');
  const [message, setMessage] = useState('');
  // const [message,setMessage]= useState('');
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:3000')
      .then(res => {
        console.log(res.data);
        if (res.data.Status === "success") {
          setAuth(true);
          setUser(res.data.email);
          setTipo(res.data.tipo);
        } else {
          setAuth(false);
          setMessage(res.data.Message);
          // navigate('/Acceso'); // Reemplaza '/some-route' por la ruta a la que deseas navegar
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [navigate]);
  const handleLogout = () => {
    axios.get('http://localhost:3000/logout')
      .then(res => {
        if (res.data.Status === "success") {
          location.reload(true);
        } else {
          console.log("error")
        }

      })
      .catch(error => {
        console.log(error);
      });
  }

  const [nombre_receta, setNombre_receta] = useState('');
  const [receta_encontrada, setReceta_encontrada] = useState('');

  useEffect(() => {
    const fetchReceta = async () => {
      const response = await fetch("http://localhost:3000/buscarReceta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre: nombre_receta }),
      });

      const data = await response.json();
      setReceta_encontrada(data[0]);
      console.log(data);
      
    };

    if (nombre_receta) {
      fetchReceta();
    }
  }, [nombre_receta]);

  return (
    <div>
    <Navbar bg="lg" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img class="logo" src="src/assets/Logo.png"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/mostrarrecetas">Recetas</Nav.Link>
            <Nav.Link href="/dietas">Dietas</Nav.Link>
            <Nav.Link href="/sobrenosotros">Sobre nosotros</Nav.Link>
          </Nav>

          <img class="person" src="src/assets/person.png"></img>
          <NavDropdown id="navbarScrollingDropdown">
            <NavDropdown.Item href="/acceso">
            {
              auth ?
                <div>
                  <h5>Cuenta iniciada</h5>
                  <h5>{user}</h5>
                  <Button onClick={handleLogout}>Cerrar sesión</Button>
                </div>
                :
                <div>
                  <h3>Cuenta</h3>
                  <Link to="/Acceso">Iniciar sesión</Link>
                </div>
          }
            </NavDropdown.Item>
            <NavDropdown.Item href="/registro">Crear cuenta</NavDropdown.Item>
            {tipo === 'usuario' && (
                <NavDropdown.Item href="/publicarreceta">Publicar Receta</NavDropdown.Item>
            )}
            {tipo === 'admin' && (
                <NavDropdown.Item href="/eliminarreceta">Eliminar Receta</NavDropdown.Item>
            )}
            <NavDropdown.Item href="/comersaludable">¿Por qué comer sano?</NavDropdown.Item>
          </NavDropdown>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              onChange={(e)=> setNombre_receta(e.target.value)}
            />
            <Button variant="outline-success" href={`/detallereceta?id=${receta_encontrada.ID}`}>Buscar</Button>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
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