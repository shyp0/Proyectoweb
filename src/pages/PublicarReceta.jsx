import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Formulariorecetas = () => {
  const navigate = useNavigate();
  const [nombre_receta, setNombre_receta] = useState('');
  const [descripcion_receta, setDescripcion_receta] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [preparacion, setPreparacion] = useState('');
  const [imagen,setImagen] = useState('');
  const [errors, setErrors] = useState({});

  const validarFormulariorecetas = (e) => {
    e.preventDefault();

    const errores = {};

    if (!nombre_receta) {
      errores.nombre_receta = 'El nombre de la receta es obligatorio';
    }

    if (!descripcion_receta) {
      errores.descripcion_receta = 'La descripcion de la receta es obligatoria';
    } else if (descripcion_receta.length > 500) {
        errores.descripcion_receta = 'La descripcion debe tener menos de 500 caracteres';
    }

    if (!ingredientes) {
      errores.ingredientes = 'Los ingredientes son obligatorios';
    } else if (ingredientes.length > 500) {
        errores.ingredientes = 'La descripcion de ingredientes debe tener menos de 500 caracteres';
    }

    if (!preparacion) {
      errores.preparacion = 'La prepraracion es obligatoria';
    } else if (preparacion.length > 1000) {
      errores.preparacion = 'La descripcion de la preparacion debe tener menos de 1000 caracteres';
    }

    if (!imagen) {
        errores.files = 'Debes registrar almenos 1 archivo';
    } 
    setErrors(errores);

    if (Object.keys(errores).length === 0) {
      // Realizar la lógica de envío del formulario
      guardarDatos(); //
      console.log('Formulario válido');
    }
    
  };
    // e.preventDefault();
    const guardarDatos = async () => {
    const url = 'http://localhost:3000/agregarReceta'; // Reemplaza con la URL correcta de tu backend
    const formData = new FormData();
    formData.append('imagen', imagen); 
    formData.append('nombre',nombre_receta);
    formData.append('descripcion',descripcion_receta);
    formData.append('ingredientes',ingredientes);
    formData.append('preparacion',preparacion);
    
    try {
      const response = await axios.put(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Establece el encabezado adecuado para el envío de archivos
      },
    });
      console.log('Receta guardada con éxito:', response.data);
      alert('¡Los datos de la receta se han guardado correctamente!')
      navigate('/');
    } catch (error) {
      console.error('Error al guardar la receta:', error);
    }
  };

  return (
    <div className="container">
      <h1>Publicar receta</h1>
      <h4>
          Puedes publicar la receta que deseas, ¡siempre y cuando sea saludable!
      </h4>
      <br></br><br></br>
      <Form id='publicarreceta' name='publicarreceta'>
          <Form.Group className="mb-3" >
              <Form.Label>Nombre de la receta</Form.Label>
              <Form.Control type="text" className={errors.nombre_receta ? 'error' : 'success'} placeholder="Ingrese nombre de la receta" id="nombre_receta" onChange={(e)=> setNombre_receta(e.target.value)} />
              {errors.nombre_receta && <span>{errors.nombre_receta}</span>}
          </Form.Group>
          <Form.Group className="mb-3"  >
              <Form.Label>Descripción de la receta</Form.Label>
              <Form.Control as="textarea" className={errors.descripcion_receta ? 'error' : 'success'} rows={3} placeholder="Ingrese descripción de la receta" id="descripcion_receta" onChange={(e)=> setDescripcion_receta(e.target.value)}/>
              {errors.descripcion_receta && <span>{errors.descripcion_receta}</span>}
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Ingredientes</Form.Label>
              <Form.Control as="textarea" className={errors.ingredientes ? 'error' : 'success'} rows={3} placeholder="Ingrese los ingredientes de la receta" id="ingredientes_receta" onChange={(e)=> setIngredientes(e.target.value)}/>
              {errors.ingredientes && <span>{errors.ingredientes}</span>}
          </Form.Group>
          <Form.Group className="mb-3" >
              <Form.Label>Preparación</Form.Label>
              <Form.Control as="textarea" className={errors.preparacion ? 'error' : 'success'} rows={3} placeholder="Ingrese la elaboración paso a paso de la receta" id="preparacion_receta" onChange={(e)=> setPreparacion(e.target.value)}/>
              {errors.preparacion && <span>{errors.preparacion}</span>}
          </Form.Group>
          <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Selecione una(s) foto(s) de la receta</Form.Label>
              <Form.Control type="file" className={errors.files ? 'error' : ''}multiple onChange={(e) => {
                  const files = e.target.files;
                  if (files && files.length > 0) {
                    // Aquí puedes agregar lógica adicional para manejar múltiples archivos si es necesario
                    const file = files[0];
                    setImagen(file);
                  }
                }}
/>
          </Form.Group>
          <Button variant="success" className="submit" onClick={validarFormulariorecetas}>Publicar receta</Button>{' '}
      </Form>
    </div>
  );
    
};

export default Formulariorecetas;
