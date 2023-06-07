import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Home extends Component {
    render() {
        return (
            <Carousel>
            <div>
                <img src="assets/1.png" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/2.png" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/3.png" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
        )
    }
}
export default Home;