import React from "react";
import "../styles.css";

function Dietas() {
  return (
    <div class="container">
      <div>
        <h1>Tipos de dietas</h1>
        <h4>
          Podríamos describir el término dieta cómo aquellos hábitos alimentarios
          que constituyen nuestra alimentación diaria. Las dietas varían
          dependiendo de la persona, los gustos o necesidades de cada uno.
        </h4>
        <br></br><br></br>
      </div>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src="src/assets/dieta-keto.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Dieta keto</h5>
              <p class="card-text">
                La dieta keto o cetogénica restringe la ingesta de alimentos ricos en carbohidratos, como los cereales, el azúcar e incluso ciertas verduras y frutas
                (como, por ejemplo, estas), en favor de alimentos ricos en grasas buenas y proteínas, como el pescado azul o el aguacate.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="src/assets/dieta-mediterranea.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Dieta mediterranea</h5>
              <p class="card-text">
                La dieta estilo mediterráneo tiene menos carnes y carbohidratos que una dieta estadounidense típica. También tiene más alimentos a base de vegetales y grasa
                monoinsaturada (buena). Las personas que viven en Italia, España y otros países en la región mediterránea han comido de esta manera durante siglos.
                Seguir la dieta mediterránea puede llevar a niveles de azúcar en sangre más estables, colesterol y triglicéridos más bajos y a un riesgo menor de desarrollar
                enfermedades cardíacas y otros problemas de salud.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="src/assets/dieta-flexible.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Dieta flexible</h5>
              <p class="card-text">
                La dieta flexible no implica comer lo que tengamos deseos en cantidades ilimitadas, sino que implica no erradicar ningún alimento de la dieta y en el marco de
                una alimentación variada, incluir alimentos placenteros.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="src/assets/dieta-vegetariana.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Dieta vegetariana</h5>
              <p class="card-text">
                La dieta vegetariana defiende únicamente el consumo de productos de origen vegetal, basando la alimentación en el consumo de legumbres, frutas, verduras u hortalizas
                eliminando así cualquier producto de origen animal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Dietas;