import img from '../Home/Experiencias/portafolio.jfif'
const Footer = () => {
  return (
    
    <footer class="seccion-oscura d-flex flex-column align-items-center justify-content-center footer"> 
      <img class="footer-logo" src={img} alt="Logo del portafolio" height={30} width={60} />
      <p class="footer-texto text-center">Aprendo y creo todos los días. Creemos un proyecto juntos.</p>
      <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="https://github.com/FT-37aDanielLuevano" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/danny-ruiz-9b7a24175/" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-envelope"></i>
        </a>
      </div>
      <div class="derechos-de-autor">Creado por Daniel ruiz  (2022) &#169;</div>
    </footer>
  )
}

 export default  Footer 