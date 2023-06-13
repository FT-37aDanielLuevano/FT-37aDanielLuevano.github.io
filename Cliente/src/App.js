
import './App.css';


import {Routes,Route} from 'react-router-dom';
import Navar from './Componentes/Navar/Navar';
import About from './Componentes/About/About';
import Contacto from './Componentes/Contacto/Contacto';
import Proyectos from './Componentes/Proyectos/Proyectos';
import Home from './Componentes/Home/Home';
import Footer from './Componentes/Pie_pagina/Footer';



function App() {
  return (
    <div className="App">
      <Navar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="/Proyectos" element={<Proyectos/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
