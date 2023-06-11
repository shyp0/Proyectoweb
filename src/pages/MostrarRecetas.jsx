import Recetas from '../assets/recetas.json'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function MostrarRecetas(){
    return(
        <div>

            <div class="container">
                <br/><br/>
                <h1>Recetas saludables</h1>
            </div>
            
            {
                Recetas && Recetas.map( recetas => {
                    return(
                        <div key={ recetas.id }>
                            
                            <div class="row row-cols-1 row-cols-md-2 g-4" style={{paddingTop: "none", padding: "40px"}}>
                                <div class="col">
                                    <div class="card">
                                        <img src={recetas.imagen} class="card-img-top" alt=""></img>
                                        <div class="card-body">
                                            <h5 class="card-title" style={{textAlign: "center"}}>{recetas.nombre_receta}</h5>
                                            <p class="card-text" style={{textAlign: "center"}}>{recetas.descripcion}</p>
                                        </div>
                                        <div class="d-grid gap-2 d-md-block" style={{textAlign: "center"}}>
                                            <Button variant="success" href={`/detallereceta?id=${recetas.id}`}>Ver receta</Button>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}
export default MostrarRecetas;

/* <div class="row row-cols-1 row-cols-md-2 g-4" style="padding: 40px;" style="padding-top: none;">
                <div class="col">
                    <div class="card">
                        <img src="assets/receta1.jpg" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">{recetas.nombre_receta}</h5>
                            <p class="card-text" style="text-align: center;">{recetas.descripcion}</p>
                        </div>
                    </div>
                </div>
    </div>*/

/*                                      {
                                            recetas.ingredientes && recetas.ingredientes.map(data =>{
                                                return(
                                                    <p>
                                                        {data.nombre_ing}
                                                    </p>
                                                )
                                            })
                                        }

                                        {
                                            recetas.preparacion && recetas.preparacion.map(data =>{
                                                return(
                                                    <p>
                                                        {data.pasos}
                                                    </p>
                                                )
                                            })
                                        }*/

/*          <div class="container">
                <div class="card-body">
                    <h1 class="card-title" style={{textAlign: "center"}}>{recetas.nombre_receta}</h1>
                    <h5 class="card-text" style={{textAlign: "center"}}>{recetas.descripcion}</h5>
                    <p class="card-text" style={{textAlign: "center"}}>
                        <h6 class="text-body-secondary">Tiempo: 20 minutos</h6>
                    </p>
                    <br/>
                </div>
                <div class="card mb-3" style={{maxWidth: "10000px"}}>
                    <br/>
                    <div class="row g-0">
                        <div class="col-md-12">
                            <img src={recetas.imagen} class="img-fluid rounded-start" alt="...">
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
                    <br/>
                </div>*/