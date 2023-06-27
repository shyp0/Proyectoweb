import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles.css';
import axios from 'axios'

const EliminarReceta = () => {

    const [nombre_receta, setNombre_receta] = useState('');
    const [errors, setErrors] = useState({});

    const validarFormulariorecetas = (e) => {
        e.preventDefault();

        const errores = {};

        if (!nombre_receta) {
            errores.nombre_receta = 'El nombre de la receta es obligatorio';
        }
        setErrors(errores);

        if (Object.keys(errores).length === 0) {
            // Realizar la lógica de envío del formulario
            guardarDatos(); //
            console.log('Formulario válido');
        }

    };

    const guardarDatos = async () => {
        const url = 'http://localhost:3000/eliminarReceta'; // Reemplaza con la URL correcta de tu backend

        const nombre = nombre_receta;

        try {
            const response = await axios.delete(url, { data: { nombre } });
            console.log('Receta eliminada con éxito:', response.data);
            alert('¡Los datos de la receta se han eliminado correctamente!')
        } catch (error) {
            console.error('Error al eliminar la receta:', error);
        }
    };

    return (
        <div className="container">
            <h1>Eliminar receta</h1>
            <h4>
                ¡Ingresa el nombre de la receta que deseas eliminar!
            </h4>
            <br></br><br></br>
            <Form id='eliminarreceta' name='eliminarreceta'>
                <Form.Group className="mb-3" >
                    <Form.Label>Nombre de la receta</Form.Label>
                    <Form.Control type="text" className={errors.nombre_receta ? 'error' : 'success'} placeholder="Ingrese nombre de la receta" id="nombre_receta" onChange={(e) => setNombre_receta(e.target.value)} />
                    {errors.nombre_receta && <span>{errors.nombre_receta}</span>}
                </Form.Group>
                <Button variant="success" className="submit" onClick={validarFormulariorecetas}>Eliminar receta</Button>{' '}
            </Form>
        </div>
    );

};

export default EliminarReceta;
