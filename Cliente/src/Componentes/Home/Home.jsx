import "./Home.css";

import Estudios from "./Experiencias/estudios.png";
import Desarrollo_web from "./Experiencias/desarrollo-web.jpg";
import Articulos from "./Experiencias/articulos.jpg";
import proyecto_1 from "../Proyectos/proyectos/proyecto-1.jpg";
import proyecto_4 from "./Experiencias/Proyecto_4.jfif"
import proyecto_3 from "../Proyectos/proyectos/img/backend.png"





const Home = () => { 
  return (
    <div className="container-fluid Home">
     
      <section class="container-fluid experiencias">
        <div class="container">
          <div class="row">
            <div class="col order-last">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Desarrollo Web</h3>
                  <img src={Desarrollo_web} alt="Desarrollo-web" />
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras laoreet, odio eget fringilla scelerisque, sem purus
                    fringilla mauris, nec ultricies nisl nisl sit amet dolor.
                    Donec et venenatis nunc, vel hendrerit ex. Vestibulum sapien
                    ipsum, rutrum eget est et, ultricies sagittis urna. In non
                    volutpat est. Vestibulum diam sapien, ultrices et euismod
                    at, ultrices ut odio. Nullam in massa et elit ultrices
                    suscipit. Proin lacinia leo ac posuere placerat.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Articulos</h3>
                  <img src={Articulos} alt="Articulos" />
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras laoreet, odio eget fringilla scelerisque, sem purus
                    fringilla mauris, nec ultricies nisl nisl sit amet dolor.
                    Donec et venenatis nunc, vel hendrerit ex. Vestibulum sapien
                    ipsum, rutrum eget est et, ultricies sagittis urna. In non
                    volutpat est. Vestibulum diam sapien, ultrices et euismod
                    at, ultrices ut odio. Nullam in massa et elit ultrices
                    suscipit. Proin lacinia leo ac posuere placerat.
                  </p>
                </div>
              </div>
            </div>
            <div class="col order-first">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Estudios</h3>
                  <img src={Estudios} alt="Estudios" />
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras laoreet, odio eget fringilla scelerisque, sem purus
                    fringilla mauris, nec ultricies nisl nisl sit amet dolor.
                    Donec et venenatis nunc, vel hendrerit ex. Vestibulum sapien
                    ipsum, rutrum eget est et, ultricies sagittis urna. In non
                    volutpat est. Vestibulum diam sapien, ultrices et euismod
                    at, ultrices ut odio. Nullam in massa et elit ultrices
                    suscipit. Proin lacinia leo ac posuere placerat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Seccion de proyectos  */}
    
      <section className="container-fluid Testimonios-carrusel ">
        <h2 class="seccion-titulo">Proyectos Recientes</h2>
        <h3 class="seccion-descripcion">
          Estos son algunos de los proyectos en los que e trabajado en los ultimos meses 
        </h3>
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
           
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src={proyecto_1} class="d-block " alt="..." width="100%" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Proyecto Rick and Morty</h5>
                <p>
                  Proyecto Front End Development
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={proyecto_4} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Proyecto Pokemon Backend y Front end </h5>
                <p>
                  Proyecto Front End Development y Back end
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={proyecto_3} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Backend Utilizando node js y express</h5>
                <p>
                  Backend Utilizando Node.js y Express
                </p>
              </div>
            </div>
           
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      
      
    </div>
  )
  
};

export default Home;
