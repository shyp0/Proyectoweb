import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles.css';
import React, { useState } from 'react';
import axios from 'axios'

const Acceso=() => {

    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [errors, setErrors] = useState({});

    const validarFormulario = (e) => {
        e.preventDefault();

        const errores = {};
        const jsonFilePath = 'src/assets/login.json';
        const jsonData = async()=>{ 
            let data=await axios.get(jsonFilePath);
            data=data.data;
            console.log(data);
            const verificacion = {
              "email": data.cuentas.slice(-1)[0].nombre,
              "contrasena" : data.cuentas.slice(-1)[0].contrasena,
           };

        //    console.log(verificacion.email);
        //    console.log(verificacion.contrasena);
        if (!email) {
            errores.email = 'Debes Ingresar un email';
          } else if (email !== verificacion.email) {
            errores.email = 'El email no coincide';
        }
        if (!contrasena) {
            errores.contrasena = 'Debes ingresar una contraseña';
          } else if (contrasena !== verificacion.contrasena) {
            errores.contrasena = 'La contraseña no coincide';
        }
        
        setErrors(errores);
    
        if (Object.keys(errores).length === 0) {
          // Realizar la lógica de envío del formulario
          console.log('Formulario válido');
        }
    }; 
        jsonData();
        
}    
      
    //   jsonData();
    return (
        <div class="container-acceder">
            <div class="formulario">
                <Form name="acceso" id="acceso">
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
                    <p class="contraseña">
                        <a href="#">¿Has olvidado tu contraseña?</a>
                    </p>
                </Form>
            </div>
        </div>
    );

};
export default Acceso;