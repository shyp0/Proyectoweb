import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    return (
        <div className="wrap">
            
            <div className="wrap-texto">
                <h1>Recetas saludables</h1>
                <h2>¡Te ayudamos a vivir saludablemente!</h2>
            </div>
        </div>
    );
};

export default Home;
