import React, { useState } from 'react';
import './Contacto.css'; // Importar el archivo CSS para el estilo

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor o mostrarlos en la consola.
    console.log(`Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}`);
    alert('Datos Enviados al correo con exito!!!');

    // Luego puedes restablecer los campos del formulario si lo deseas.
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Teléfono:
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <button type="submit">Enviar</button>
    </form>
   
  );
  
};

export default ContactForm;