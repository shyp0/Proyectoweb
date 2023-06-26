import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles.css';
import React, { useState,useRef,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Acceso=() => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [errors, setErrors] = useState({});
    const formRef = useRef(null);

    axios.defaults.withCredentials=true;
    useEffect(() => {
      axios.get('http://localhost:3000')
          .then(res => {
              if (res.data.valid) {
                  navigate('/');
                  
              }else{
                  navigate('/Acceso'); // Reemplaza '/some-route' por la ruta a la que deseas navegar
              }
          })
          .catch(error => {
              console.log(error);
          });
    }, [navigate]);
    const validarFormulario = (e) => {
        e.preventDefault();
        
        const errors={};
        if (!email) {
            errors.email = 'Debes Ingresar un email';
          } 
        if (!contrasena) {
            errors.contrasena = 'Debes ingresar una contraseña';
          } 
        
        setErrors(errors);
    
        if (Object.keys(errors).length === 0) {
            // Realizar la lógica de envío del formulario
            const data = {
              email: email,
              contrasena: contrasena,
        };
            axios.post('http://localhost:3000/validar', data)
            .then(response => {
              const data = response.data;

              if (data.mensaje === true) {
                // Las credenciales son válidas
                alert('Credenciales válidas');
                navigate('/');
              } else {
                // Las credenciales son inválidas
                alert('Credenciales inválidas');
                formRef.current.reset();
              }
            })
            .catch(error => {
              console.error(error);
            });
        }
        
    }; 
    // useEffect(() => {
    //     if (isLoggedIn) {
    //       history.push('/'); // Redirigir a la página principal (Home)
    //     }
    //   }, [isLoggedIn, history]);
        
 
      
    //   jsonData();
    return (
        <div className="container-acceder">
            <div className="formulario">
                <Form name="acceso" id="acceso" ref={formRef}>
                    <h5>Iniciar sesión</h5>
                    <Form.Group className="mb-3" >
                        <Form.Label></Form.Label>
                        <Form.Control class="controls1" type="email" className={errors.email ? 'controls error' : 'controls success'} placeholder="Correo electrónico" onChange={(e)=> setEmail(e.target.value)} />
                        {errors.email && <span>{errors.email}</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label></Form.Label>
                        <Form.Control class="controls1" type="password" className={errors.contrasena ? 'controls error' : 'controls success'} placeholder="Contraseña" onChange={(e)=> setContrasena(e.target.value)}/>
                        {errors.contrasena && <span>{errors.contrasena}</span>}
                    </Form.Group>
                    <Button className="registrar" onClick={validarFormulario}>Ingresar</Button>{' '}
                    <p className="contraseña">
                        <a href="#">¿Has olvidado tu contraseña?</a>
                    </p>
                </Form>
            </div>
        </div>
    );

};
export default Acceso;