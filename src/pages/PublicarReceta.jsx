import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles.css';
import axios from 'axios'

const Formulariorecetas = () => {
//   const formu=document.getElementById("publicarreceta");
// // Formulariorecetas.addEventListener("submit",form);
// formu.addEventListener("submit",form);
  
  const [nombre_receta, setNombre_receta] = useState('');
  const [descripcion_receta, setDescripcion_receta] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [preparacion, setPreparacion] = useState('');
  const [imagen,setImagen] = useState('');
  const [dificultad,setDificultad] = useState('');
  const [errors, setErrors] = useState({});

  const validarFormulariorecetas = (e) => {
    e.preventDefault();

    const errores = {};

    if (!nombre_receta) {
      errores.nombre_receta = 'El nombre de la receta es obligatorio';
    }

    if (!descripcion_receta) {
      errores.descripcion_receta = 'La descripcion de la receta es obligatoria';
    } else if (descripcion_receta.length > 256) {
        errores.descripcion_receta = 'La descripcion debe tener menos de 256 caracteres';
    }

    if (!ingredientes) {
      errores.ingredientes = 'Los ingredientes son obligatorios';
    } else if (ingredientes.length > 256) {
        errores.ingredientes = 'La descripcion de ingredientes debe tener menos de 256 caracteres';
    }

    if (!preparacion) {
      errores.preparacion = 'La prepraracion es obligatoria';
    } else if (preparacion.length > 256) {
      errores.preparacion = 'La descripcion de la preparacion debe tener menos de 256 caracteres';
    }
    if (!dificultad) {
        errores.dificultad = 'Debes seleccionar al menos un nivel de receta';
    }

    if (!imagen) {
        errores.files = 'Debes registrar almenos 1 archivo';
    } 
    setErrors(errores);

    if (Object.keys(errores).length === 0) {
      // Realizar la lógica de envío del formulario
      guardarDatosEnJSON();
      console.log('Formulario válido');
    }
    
  };
    // e.preventDefault();
  const guardarDatosEnJSON = () => {
      const jsonFilePath = 'src/assets/prueba.json';

      const jsonData = async()=>{ 
        let data=await axios.get(jsonFilePath);
        data=data.data;
        console.log(data);
        const newReceta = {
          "id": data.recetas.slice(-1)[0].id+1,
          "nombre_receta" : nombre_receta,
          "descripcion" : descripcion_receta,
          "ingredientes" : [{"nombre_ing":ingredientes}],
          "preparacion" : [{"pasos":preparacion}],
          "imagen" : imagen,
       };
      //  console.log(data.recetas.slice(-1)[0].id+1)
      //  console.log(newReceta);
       data.recetas.push(newReceta);
      }
      jsonData();
      

      
     

};
  


  
  return (
    <div class="container">
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
                <Form.Control as="textarea" className={errors.preparacion ? 'error' : 'success'} rows={3} placeholder="Ingrese la elaboración paso a paso de la receta" id="preparacion:receta" onChange={(e)=> setPreparacion(e.target.value)}/>
                {errors.preparacion && <span>{errors.preparacion}</span>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Nivel de receta</Form.Label>                
                    <Form.Select value={dificultad} className={errors.dificultad ? 'error' : ''} onChange={(e)=> setDificultad(e.target.value)}>
                        <option value=""> seleccione nivel de receta</option>
                        <option value="facil">Nivel fácil</option>
                        <option value="medio">Nivel medio</option>
                        <option value="dificil">Nivel difícil</option>
                    </Form.Select>
                    {errors.dificultad && <span>{errors.dificultad}</span>}
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Selecione una(s) foto(s) de la receta</Form.Label>
                <Form.Control type="file" className={errors.files ? 'error' : ''} multiple onChange={(e)=> setImagen(e.target.value)}/>
                {errors.imagen && <span>{errors.imagen}</span>}
            </Form.Group>
            <Button variant="success" onClick={validarFormulariorecetas}>Publicar receta</Button>{' '}
        </Form>
        
    
    </div>
    
);
    
};

export default Formulariorecetas;
