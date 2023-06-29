import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

const Formulario = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);
  const [verificar, setVerificar] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerificar(true);
  }

  const validarFormulario = () => {
    const errores = {};

    if (!nombre) {
      errores.nombre = 'El nombre es obligatorio';
    }

    if (!apellido) {
      errores.apellido = 'El apellido es obligatorio';
    }

    if (!email) {
      errores.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errores.email = 'El email no es válido';
    }

    if (!contrasena) {
      errores.contrasena = 'La contraseña es obligatoria';
    } else if (contrasena.length < 6) {
      errores.contrasena = 'La contraseña debe tener al menos 6 caracteres';
    }
    if (!confirmarContrasena) {
      errores.confirmarContrasena = 'Debes confirmar la contraseña';
    } else if (confirmarContrasena !== contrasena) {
      errores.confirmarContrasena = 'Las contraseñas no coinciden';
    }

    setErrors(errores);

    if (Object.keys(errores).length === 0) {
      // Realizar la lógica de envío del formulario
      guardarDatos();
      console.log('Formulario válido');
    }
  };
  // e.preventDefault();
  const guardarDatos = async () => {
    const url = 'http://localhost:3000/registro'; // Reemplaza con la URL correcta de tu backend

    const newUser = {
      nombre: nombre,
      email: email,
      apellido: apellido,
      contrasena: contrasena,
      /* falta guardar la imagen de la receta */
    };
    console.log(newUser);

    try {
      const response = await axios.put(url, newUser);
      if (response.error != "El correo electrónico ya está registrado") {
        console.log('Usuario guardado con éxito:', response.data);
        alert('¡Los datos del usuario se han guardado correctamente!')
        navigate('/Acceso')
      }
    } catch (error) {
      alert('Usuario ya registrado')
      formRef.current.reset();

      console.error('Error al guardar el usuario:', error);
    }
  };

  return (
    <div className="container-registrar">
      <div className="formulario2">
        <Form name="registro" id="registro" ref={formRef}>
          <h5>Crear cuenta</h5>
          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control class="controls" className={errors.nombre ? 'controls error' : 'controls success'} type="text" placeholder="Nombre" id="nombre" name="nombre" onChange={(e) => setNombre(e.target.value)} />
            {errors.nombre && <span>{errors.nombre}</span>}
          </Form.Group>
          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control class="controls" className={errors.apellido ? 'controls error' : 'controls success'} type="text" placeholder="Apellido" id="apellido" name="apellido" onChange={(e) => setApellido(e.target.value)} />
            {errors.apellido && <span>{errors.apellido}</span>}
          </Form.Group>
          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control class="controls" type="email" className={errors.email ? 'controls error' : 'controls success'} placeholder="Correo electrónico" id="correo" name="correo" onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <span>{errors.email}</span>}
          </Form.Group>
          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control class="controls" className={errors.contrasena ? 'controls error' : 'controls success'} type="password" placeholder="Contraseña" id="contrasena" name="contrasena" onChange={(e) => setContrasena(e.target.value)} />
            {errors.contrasena && <span>{errors.contrasena}</span>}
          </Form.Group>
          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control class="controls" className={errors.confirmarContrasena ? 'controls error' : 'controls success'} type="password" placeholder="Repetir contraseña" id="recontrasena" name="recontrasena" onChange={(e) => setConfirmarContrasena(e.target.value)} />
            {errors.confirmarContrasena && <span>{errors.confirmarContrasena}</span>}
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
          </Form.Group>
          <Button className="registrar" disabled={!verificar} onClick={validarFormulario} >Registrar</Button>{' '}
        </Form>
      </div>
    </div>
  );
};

export default Formulario;
