import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Contacto.css';

const Contacto = () => {
  const [form, setForm] = useState({
    contact_name: '',
    contact_email: '',
    contact_message: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
      e.preventDefault();
      alert('Mensaje enviado. Gracias por contactarnos!');
      setForm({
        contact_name: '',
        contact_email: '',
        contact_message: '',
      });
    };

  return (
    <>
      <Navbar activeLink="contacto" />
      
      <main className="contact-form">
        <div className="container">
          <div className="form">
            <h3 className="heading">Contáctanos</h3>
            <p className="text">
              Estamos aqui para ti! En que te podemos ayudar?
            </p>
            <form className='form-container' onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  type="text"
                  name="contact_name"
                  className="name"
                  placeholder="Ingresa tu nombre"
                  value={form.contact_name}
                  onChange={handleChange}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  name="contact_email"
                  className="email"
                  placeholder="Ingresa tu email"
                  value={form.contact_email}
                  onChange={handleChange}
                />
              </div>
              <div className="inputBox">
                <textarea
                  name="contact_message"
                  className="message"
                  placeholder="Escribe tu mensaje"
                  value={form.contact_message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="btn">Enviar</button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contacto;