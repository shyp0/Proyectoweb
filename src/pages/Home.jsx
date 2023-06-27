import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [user,setUser] =useState('');
    const [auth,setAuth] = useState('');
    const [message,setMessage]=useState('');
    // const [message,setMessage]= useState('');
    axios.defaults.withCredentials=true;
    useEffect(() => {
        axios.get('http://localhost:3000')
            .then(res => {
                if (res.data.Status==="success") {
                    setAuth(true);
                    setUser(res.data.email)
                    
                }else{
                    setAuth(false);
                    setMessage(res.data.Message);
                    // navigate('/Acceso'); // Reemplaza '/some-route' por la ruta a la que deseas navegar
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, [navigate]);
        const handleLogout = () =>{
            axios.get('http://localhost:3000/logout')
            .then(res => {
                if(res.data.Status==="success"){
                    location.reload(true);
                }else{
                    console.log("error")
                }
                
            })
            .catch(error => {
                console.log(error);
            });
        }
    return (

        <div className="wrap">
            {
                auth?
                <div>
                    <h3>autorized</h3>
                    <button onClick={handleLogout}> logout</button>
                </div>
                 :
                 <div>
                     <h3>message</h3>
                     <Link to="/Acceso"> Login Now</Link>
                 </div>
            }
            <div className="wrap-texto">
                <h1>Recetas saludables {user}</h1>
                <h2>¡Te ayudamos a vivir saludablemente!</h2>
            </div>
        </div>
    );
};

export default Home;
