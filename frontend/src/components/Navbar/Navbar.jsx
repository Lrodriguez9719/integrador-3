import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router';
import CartModal from '../CartModal/CartModal';
import { useCart } from '../../contexts/cartContext';
import './Navbar.css';

const Navbar = ({ activeLink }) => {
  const { cart } = useCart();
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" id="logo">
        <i className="fa-solid fa-gem"></i> Rouge
      </Link>
      <input type="checkbox" id="hamburger" />
      <label htmlFor="hamburger">
        <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
      </label>
      <ul>
        <li>
          <Link to="/" className={activeLink === "home" ? "active" : ""}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/nosotros" className={activeLink === "nosotros" ? "active" : ""}>
            Nosotros
          </Link>
        </li>
        <li>
          <Link to="/alta" className={activeLink === "alta" ? "active" : ""}>
            Alta de Producto
          </Link>
        </li>
        <li>
          <Link to="/contacto" className={activeLink === "contacto" ? "active" : ""}>
            Contacto
          </Link>
        </li>
        <div className="cart-icon-container" onClick={() => setShowModal(true)}>
          <FaShoppingCart size={24} color="#fff" />
          <span className="cart-count">{cart.length}</span>
        </div>
      </ul>
      
      {showModal && <CartModal onClose={() => setShowModal(false)} />}
    </nav>
  )
}

export default Navbar;