import Recetas from '../assets/recetas.json'

function DetalleReceta(){
    return(
        <div>
            {
                Recetas && Recetas.map( recetas => {
                    return(
                        <div key={ recetas.id }>

                            <div class="container">
                                <div class="card-body">
                                    <h1 class="card-title" style={{textAlign: "center"}}>{recetas.nombre_receta}</h1>
                                    <h5 class="card-text" style={{textAlign: "center"}}>{recetas.descripcion}</h5>
                                    <p class="card-text" style={{textAlign: "center"}}>
                                        <h6 class="text-body-secondary">Tiempo: 20 minutos</h6>
                                    </p>
                                    <br/>
                                </div>
                            </div>

                            <div class="card mb-3" style={{maxWidth: "10000px"}}>
                                <br/>
                                <div class="row g-0">
                                    <div class="col-md-12">
                                        <img src={recetas.imagen} class="img-fluid rounded-start" alt="..."></img>
                                        <p class="card-text"><small class="text-body-secondary">Valoración: </small></p>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="card-body">
                                            <h5 class="card-title">Ingredientes (para 4 personas)</h5>
                                            <p class="card-text">
                                                <li>
                                                    {
                                                        recetas.ingredientes && recetas.ingredientes.map(data =>{
                                                            return(
                                                                <p>
                                                                    {data.nombre_ing}
                                                                </p>
                                                            )
                                                        })
                                                    }
                                                </li>

                                                <br/><br/>

                                                <h5>Elaboración</h5>
                                                <li>
                                                    {
                                                        recetas.preparacion && recetas.preparacion.map(data =>{
                                                            return(
                                                                <p>
                                                                    {data.pasos}
                                                                </p>
                                                            )
                                                        })
                                                    }
                                                </li>
                                            </p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default DetalleReceta;