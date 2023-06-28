import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function MostrarRecetas() {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/obtenerRecetas')  // Reemplaza la URL con la dirección de tu backend
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setRecetas(data.data); // Almacena los datos de las recetas en el estado del componente
        }
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <div className="container">
        <br/><br/>
        <h1>Recetas saludables</h1>
      </div>

      {recetas.map(receta => (
        <div key={receta.ID}>
          <div className="row row-cols-1 row-cols-md-2 g-4" style={{paddingTop: "none", padding: "40px",display: "flex", justifyContent:"center",alignItems:"center",flexDirection:"column"}} >
            <div className="col">
              <div className="card">
                <img src={"http://localhost:3000/recetas/"+receta.imagen} className="card-img-top" alt=""></img>
                <div className="card-body">
                  <h5 className="card-title" style={{textAlign: "center"}}>{receta.nombre}</h5>
                  <p className="card-text" style={{textAlign: "center"}}>{receta.descripcion}</p>
                </div>
                <div className="d-grid gap-2 d-md-block" style={{textAlign: "center"}}>
                  <Button variant="success" href={`/detallereceta?id=${receta.ID}`}>Ver receta</Button>
                </div>
                <br/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MostrarRecetas;
