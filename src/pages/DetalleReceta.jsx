import Recetas from '../assets/recetas.json'
import { useState, useEffect } from 'react';

function DetalleReceta() {

    const [param, setParam] = useState(1);
    let receta_encontrada = "";
    useEffect(() => {
        setParam(new URLSearchParams(window.location.search).get("id"));
        console.log(param);
    }, [])

    receta_encontrada = Recetas[param - 1];
    console.log(receta_encontrada.id);

    if (receta_encontrada != "") {
        return (
            <div style={{textAlign: "center"}}>

                <div class="container" style={{textAlign: "center"}}>
                    <div>
                        <h1>{receta_encontrada.nombre_receta}</h1>
                        <h5>{receta_encontrada.descripcion}</h5>
                        <p>
                            <h6 class="text-body-secondary">Tiempo: 20 minutos</h6>
                        </p>
                        <br />
                    </div>
                </div>

                <div class="card mb-3" style={{ maxWidth: "800px"}}>
                    <br />
                    <div class="row g-0">
                        <div class="col-md-12">
                            <img src={receta_encontrada.imagen} alt="..." style={{ maxWidth: "800px"}}></img>
                            <p><small class="text-body-secondary">Valoración: </small></p>
                        </div>
                        <div class="col-md-12" style={{ textAlign: "center" }}>
                            <div class="card-body">
                                <h5 class="card-title">Ingredientes (para 4 personas)</h5>
                                <p class="card-text">
                                    {
                                        receta_encontrada.ingredientes && receta_encontrada.ingredientes.map(data => {
                                            return (
                                                <li>
                                                    {data.nombre_ing}
                                                </li>
                                            )
                                        })
                                    }
                                    <br /><br />
                                    <h5>Elaboración</h5>
                                    {
                                        receta_encontrada.preparacion && receta_encontrada.preparacion.map(data => {
                                            return (
                                                <li>
                                                    {data.pasos}
                                                </li>
                                            )
                                        })
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    }
    return null;
}

export default DetalleReceta;