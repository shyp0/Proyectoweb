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
        return (
            <div style={{display: "flex", justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

                <div class="container" style={{textAlign: "center"}}>
                    <div>
                        <h1>{recetaEncontrada.nombre}</h1>
                        <h5>{recetaEncontrada.descripcion}</h5>
                        <br />
                    </div>
                </div>

                <div class="card mb-3" style={{ maxWidth: "800px"}}>
                    <br />
                    <div class="row g-0">
                        <div class="col-md-12" style={{display: "flex", justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                            
                            <p><small class="text-body-secondary">Valoración: </small></p>
                        </div>
                        <div class="col-md-12" style={{ textAlign: "center" }}>
                            <div class="card-body">
                                <h5 class="card-title">Ingredientes (para 4 personas)</h5>
                                <p class="card-text">
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

    // if (recetaEncontrada != "") {
    //     return (
    //         <div style={{display: "flex", justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

    //             <div class="container" style={{textAlign: "center"}}>
    //                 <div>
    //                     <h1>{recetaEncontrada.nombre_receta}</h1>
    //                     <h5>{recetaEncontrada.descripcion}</h5>
    //                     <p>
    //                         <h6 class="text-body-secondary">Tiempo: 20 minutos</h6>
    //                     </p>
    //                     <br />
    //                 </div>
    //             </div>

    //             <div class="card mb-3" style={{ maxWidth: "800px"}}>
    //                 <br />
    //                 <div class="row g-0">
    //                     <div class="col-md-12" style={{display: "flex", justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    //                         <img src={recetaEncontrada.imagen} alt="..." style={{ maxWidth: "800px"}}></img>
    //                         <p><small class="text-body-secondary">Valoración: </small></p>
    //                     </div>
    //                     <div class="col-md-12" style={{ textAlign: "center" }}>
    //                         <div class="card-body">
    //                             <h5 class="card-title">Ingredientes (para 4 personas)</h5>
    //                             <p class="card-text">
    //                                 {
    //                                     recetaEncontrada.ingredientes && recetaEncontrada.ingredientes.map(data => {
    //                                         return (
    //                                             <li>
    //                                                 {data.nombre_ing}
    //                                             </li>
    //                                         )
    //                                     })
    //                                 }
    //                                 <br /><br />
    //                                 <h5>Elaboración</h5>
    //                                 {
    //                                     recetaEncontrada.preparacion && recetaEncontrada.preparacion.map(data => {
    //                                         return (
    //                                             <li>
    //                                                 {data.pasos}
    //                                             </li>
    //                                         )
    //                                     })
    //                                 }
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <br />
    //         </div>
    //     );
    // }
    // return null;
}

export default DetalleReceta;