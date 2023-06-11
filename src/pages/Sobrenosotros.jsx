import React from "react";
import "../styles.css";
import Carousel from 'react-bootstrap/Carousel';

function Sobrenosotros() {
    return(
        <div class="container">
            <h1>¡Sobre nosotros!</h1>
            <h3>Somos un grupo de estudiantes de Ingeniería Civil Informática de la Pontificia Universidad Católica de Valparaíso.
                Estamos liderando un proyecto con el fin de apoyar y motivar a la población a vivir saludablemente, garantizando una vida sana
                y promover el bienestar para todos, independiente de la edad.
            </h3>

            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="src/assets/sede-informatica1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>| Escuela de Ingeniería Informática PUCV | Brasil 2950, Valparaíso |</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="src/assets/sede-informatica2.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>| Escuela de Ingeniería Informática PUCV | Brasil 2950, Valparaíso |</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="src/assets/casa-central.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>| Casa central PUCV | Brasil 2241, Valparaíso |</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default Sobrenosotros;