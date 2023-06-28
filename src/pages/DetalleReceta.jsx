import Recetas from '../assets/recetas.json'
import { useState, useEffect } from 'react';

function DetalleReceta() {

    const [param, setParam] = useState(null);
    const [recetaEncontrada, setRecetaEncontrada] = useState(null);
  
    useEffect(() => {
      setParam(new URLSearchParams(window.location.search).get("id"));
    }, []);
  
    useEffect(() => {
      const fetchReceta = async () => {
        const response = await fetch("http://localhost:3000/encontrarReceta", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: param }),
        });
  
        const data = await response.json();
        setRecetaEncontrada(data[0]);
        
      };
  
      if (param) {
        fetchReceta();
      }
    }, [param]);
    
    if (recetaEncontrada) {
      console.log(recetaEncontrada.imagen);
        return (
            <div style={{display: "flex", justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

                <div className="container" style={{textAlign: "center"}}>
                    <div>
                        <h1>{recetaEncontrada.nombre}</h1>
                        <h5>{recetaEncontrada.descripcion}</h5>
                        <br />
                    </div>
                </div>

                <div className="card mb-3" style={{ maxWidth: "800px"}}>
                    <br />
                    <div className="row g-0">
                        <div className="col-md-12" style={{display: "flex", justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                          
                            <img src={"http://localhost:3000/recetas/"+recetaEncontrada.imagen} alt="" />
                        </div>
                        <div className="col-md-12" style={{ textAlign: "center" }}>
                            <div className="card-body">
                                <h5 className="card-title">Ingredientes (para 4 personas)</h5>
                                <p className="card-text">
                                    {recetaEncontrada.ingredientes}
                                    <br /><br />
                                    <h5>Elaboración</h5>
                                    {recetaEncontrada.preparacion}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    } else {
      return <div>Cargando ...</div>;
    }


}

export default DetalleReceta;