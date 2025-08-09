import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { uploadProducto } from '../../services/productosService';
import './Alta.css';

const Alta = () => {
  const [form, setForm] = useState({
    product_name: '',
    product_description: '',
    product_price: '',
    product_image_url: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const validate = () => {
    if (!form.product_name || !form.product_description || !form.product_price || !form.product_image_url) {
      setError('Todos los campos son obligatorios.');
      return false;
    }
    if (isNaN(form.product_price) || Number(form.product_price) <= 0) {
      setError('El precio debe ser un número positivo.');
      return false;
    }
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await uploadProducto(form);
      setSuccess('Producto agregado exitosamente.');
      setForm({
        product_name: '',
        product_description: '',
        product_price: '',
        product_image_url: ''
      });
    } catch (err) {
      setError('Error al agregar el producto.');
    }
  };

  return (
    <>
      <Navbar activeLink="alta" />
      
      <main className="contact-form">
        <div className="alta-container">
          <div className="form">
            <h3 className="heading">Alta de Producto</h3>
            <p className="text">
              Por favor completa este formulario para agregar nuevos artículos.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  type="text"
                  name="product_name"
                  className="product_name"
                  placeholder="Nombre del Artículo"
                  value={form.product_name}
                  onChange={handleChange}
                />
              </div>
              <div className="inputBox">
                <textarea
                  name="product_description"
                  className="product_description"
                  placeholder="Descripción del Artículo"
                  value={form.product_description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="inputBox">
                <input
                  type="number"
                  name="product_price"
                  className="product_price"
                  placeholder="Precio del Artículo"
                  value={form.product_price}
                  onChange={handleChange}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  name="product_image_url"
                  className="product_image_url"
                  placeholder="URL de la Imagen del Artículo"
                  value={form.product_image_url}
                  onChange={handleChange}
                />
              </div>
              <br />
              <button className="btn">Agregar Artículo</button>
              {error && <div className="error">{error}</div>}
              {success && <div className="success">{success}</div>}
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Alta;