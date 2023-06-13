
import img from "./imagenes/hero.jpg";
import imagen from "../Home/Experiencias/WhatsApp Image 2023-06-07 at 00.42.56.jpg"

const About = () => {
  return (
    <div>
       <section class="hero align-items-stretch">
        <div class="hero-principal d-flex flex-column justify-content-center align-items-center">
          <img
            class="hero-imagen-desarrollador rounded-circle"
            src={imagen}
            alt="Foto de Danny Ruiz"
            width={70}
            height={80}
          />
          <h1>Hola, soy Daniel Ruiz</h1>
          <h2>Desarrollo sitios web y escribo artículos sobre programación.</h2>
        </div>
        <div class="hero-inferior">
          <img
            class="hero-inferior-imagen img-fluid"
            src={img}
            alt="Monitor, laptop y logos de HTML, CSS, JavaScript y React."
          />
        </div>
      </section>
      <section id="sobre-mi" class="sobre-mi seccion-oscura">
        <div class="contenedor">
          <h2 class="seccion-titulo">Conoce a Daniel ruiz</h2>
          <p class="seccion-texto">
            Soy desarrollador Full Stack con Experiencia en proyectos personales y de forma grupal 
            en colaboracion para el instituto, Tecnologias como React node js express redux Bases de 
            Datos Relacionales como postgres SQL y  Mongo DB no relacional.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About