import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchProductoById } from '../../services/productosService';
import Navbar from '../../components/Navbar/Navbar';  
import Footer from '../../components/Footer/Footer';
import { useCart } from "../../contexts/cartContext";
import './DetalleProducto.css';

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const { addToCart } = useCart();

  const addProductoToCart = (producto) => {
    alert(`Producto ${producto.nombre} agregado al carrito`);
    addToCart(producto);
  }

  useEffect(() => {
    fetchProductoById(id).then(setProducto);
  }, [id]);

  if (!producto) {
    return <div className="loading">Cargando...</div>;
  }

  console.log(producto);

  return (
    <>
      <Navbar activeLink="home" />

      <div className="detalle-producto-container">
        <div className="detalle-producto-card">
          <img
            src={producto.data.imagen}
            alt={producto.data.nombre}
            className="detalle-producto-img"
          />
          <div className="detalle-producto-content">
            <h2>{producto.data.nombre}</h2>
            <p className="detalle-producto-descripcion">{producto.data.descripcion}</p>
            <p className="detalle-producto-precio">${producto.data.precio}</p>
            {/* Add more product details here if needed */}
            <button className="btn" onClick={() => addProductoToCart(producto.data)}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DetalleProducto;