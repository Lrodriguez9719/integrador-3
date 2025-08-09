import { Link } from 'react-router';

const CardProducto = ({ producto }) => {
  return (
    <>
    <div className="product-card">
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="product-content">
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <p className="price">${producto.precio}</p>
        <Link to={`/producto/${producto._id}`} className="btn">Ver detalles</Link>
      </div>
    </div>
    </>
  );
}

export default CardProducto;