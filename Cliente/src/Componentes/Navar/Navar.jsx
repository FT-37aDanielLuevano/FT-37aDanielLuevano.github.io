import logo from './Logo/logo.png';
import '../Navar/Navar.css'
const Navar = () => {
  const  Rutas = ['Home','About','Contacto','Proyectos']
  // const Btns = ['INISIAR SESSION', 'CERRAR SESSION']
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand logo" href="/Home">
            <img src={logo} alt="logo" />
          </a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
           
          <ul class="navbar-nav ">
             {
              Rutas.map((Ruta) => (
                
                <li class="nav-item">
                
                <a class="nav-link active" aria-current="page" href={Ruta}>
                 {Ruta}
                </a>
                </li>
              
             
              ))
             }
              </ul>
              
           
           
          </div>
         
          
        </div>
       
      </nav>
    </div>
  );
};

export default Navar;
