import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [user,setUser] =useState('');
    axios.defaults.withCredentials=true;
    useEffect(() => {
        axios.get('http://localhost:3000')
            .then(res => {
                if (res.data.valid) {
                    setUser(res.data.email)
                    
                }else{
                    navigate('/Acceso'); // Reemplaza '/some-route' por la ruta a la que deseas navegar
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, [navigate]);

    return (
        <div className="wrap">
            <div className="wrap-texto">
                <h1>Recetas saludables {user}</h1>
                <h2>¡Te ayudamos a vivir saludablemente!</h2>
            </div>
        </div>
    );
};

export default Home;
