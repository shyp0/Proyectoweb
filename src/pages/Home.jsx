import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Home extends Component {
    render() {
        return (
            <div class="wrap">
                <div class="wrap-texto">
                    <h1>Recetas saludables</h1>
                    <h2>¡Te ayudamos a vivir saludablemente!</h2>
                </div>
            </div>
        )
    }
}
export default Home;