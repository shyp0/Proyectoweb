function Footer(){
    return(
      <footer>

        <div class="card text-center">

          <div class="card-header"></div>

          <div class="card-body">
            <h5 class="card-title">Menú</h5>
            <hr size="3px" color="black"/>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="recetas.html">Recetas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sobre nosotros</a>
              </li>
            </ul>

            <div class="rrss">
              <button>
                <img src="src/assets/Icon-fb.png" width="20px" height="20px"></img>
              </button>
              <button>
                <img src="src/assets/Icon-wsp.png" width="20px" height="20px"></img>
              </button>
              <button>
                <img src="src/assets/Icon-ig.png" width="20px" height="20px"></img>
              </button>
            </div>

          </div>

          <div class="card-footer text-body-secondary">
            Ⓒ Recetas saludables
          </div>
          
        </div>

      </footer>
      
    );
}
export default Footer;