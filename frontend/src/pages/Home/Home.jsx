import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';  
import Footer from '../../components/Footer/Footer';
import CardProducto from '../../components/CardProducto/CardProducto';
import { fetchProductos } from '../../services/productosService';
import './Home.css';

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductos()
      .then(data => setProductos(data.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar activeLink="home" />

      <section id="hero">
        <div className="hero_container">
          <div className="hero_info">
            <h1>¡Bienvenido a Rouge!</h1>
            <p>La mejor tienda de joyería en línea</p>
            <Link to="/nosotros" className="btn">Conócenos</Link>
          </div>
        </div>
      </section>

      <h2 className="section-title">
        Nuestra selección de productos
      </h2>

      <div className="product-container">
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <span>Cargando productos...</span>
          </div>
        ) : (
          productos.map(producto => (
            <CardProducto key={producto._id} producto={producto} />
          ))
        )}
      </div>

      <Footer />
    </>
  );
};

export default Home;