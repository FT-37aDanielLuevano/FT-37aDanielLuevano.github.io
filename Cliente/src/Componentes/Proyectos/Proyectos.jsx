import proyecto_1 from "./proyectos/proyecto-1.jpg";
import proximamente from "./proyectos/proximamente.jpg";
import proyecto_4 from "./proyectos/img/proyecto-4.jfif"
import proyecto_5 from "./proyectos/img/backend.png"
import proyecto_6 from "./proyectos/img/proyecto_7.jfif"

const Proyectos = () => {
  return (
    <div>
       <section
        id="proyectos"
        class="proyectos-recientes seccion-clara d-flex flex-column"
      >
        <h2 class="seccion-titulo texto-negro">Mis proyectos recientes</h2>
        <h3 class="seccion-descripcion">
          Estos son algunos proyectos que he creado recientemente...
        </h3>

        <div class="container text-center proyectos-contenedor">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="proyecto">
                <img
                  src={proyecto_1}
                  alt="Proyecto 1"
                  width="100%"
                  height="300rem"
                />
                <div class="overlay">
                  <p>Proyecto 1</p>
                  <div class="iconos-contenedor">
                    <a href="https://github.com/FT-37aDanielLuevano?tab=repositories" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-github"></i>
                    </a>
                    <a href="https://github.com/FT-37aDanielLuevano/Rick--and--Morty" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="proyecto">
                <img
                  src={proyecto_5}
                  alt="Proyecto 2"
                  width="100%"
                  height="300rem"
                />
                <div class="overlay">
                  <p>Proyecto 2</p>
                  <div class="iconos-contenedor">
                    <a href="https://github.com/FT-37aDanielLuevano/Backend-node-js" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-github"></i>
                    </a>
                    <a href="https://github.com/FT-37aDanielLuevano/Backend-node-js" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="proyecto">
                <img
                  src={proyecto_6}
                  alt="Proyecto 3"
                  width="100%"
                  height="300rem"
                />
                <div class="overlay">
                  <p>Proyecto 3</p>
                  <div class="iconos-contenedor">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-github"></i>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="proyecto">
                <img
                  src={proyecto_4}
                  alt="Proyecto 4"
                  width="100%"
                  height="300rem"
                />
                <div class="overlay">
                  <p>Proyecto 4</p>
                  <div class="iconos-contenedor">
                    <a href="https://github.com/FT-37aDanielLuevano/PI-Pokemon-main" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-github"></i>
                    </a>
                    <a href="https://github.com/FT-37aDanielLuevano/PI-Pokemon-main" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="proyecto">
                <img
                  src={proximamente}
                  alt="Proyecto 5"
                  width="100%"
                  height="300rem"
                />
                <div class="overlay">
                  <p>Proyecto 5</p>
                  <div class="iconos-contenedor">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-github"></i>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="proyecto">
                <img
                  src={proximamente}
                  alt="Proyecto 6"
                  width="100%"
                  height="300rem"
                />
                <div class="overlay">
                  <p>Proyecto 6</p>
                  <div class="iconos-contenedor">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-github"></i>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="https://github.com/FT-37aDanielLuevano?tab=repositories" target="_blank" rel="noopener noreferrer">
          <button type="button" class="btn btn-info">
            Ver más proyectos
            <br />
            <i class="bi bi-arrow-right-circle-fill"></i>
          </button>
        </a>
      </section>
      
    </div>
  )
}

export default Proyectos