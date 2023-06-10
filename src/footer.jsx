import Card from 'react-bootstrap/Card';
import { Link, Route, Routes } from 'react-router-dom';
import './styles.css';

function Footer() {
  return (
    <Card className="text-center">
      <Card.Header>Menú</Card.Header>
      <Card.Body>
        <ul class="nav flex-column">
          <li>
            <Card.Link style={{textDecoration: "none"}} href="/">Inicio</Card.Link>
          </li>
          <li class="nav-item">
            <Card.Link style={{textDecoration: "none"}} href="/recetas">Recetas</Card.Link>
          </li>
          <li class="nav-item">
            <Card.Link style={{textDecoration: "none"}} href="/sobrenosotros">Sobre nosotros</Card.Link>
          </li>
        </ul>
      </Card.Body>
      <Card.Footer className="text-muted">Ⓒ Recetas saludables</Card.Footer>
    </Card>
  );
}

export default Footer;