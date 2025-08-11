import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router';
import CartModal from '../CartModal/CartModal';
import { useCart } from '../../contexts/cartContext';
import './Navbar.css';

const Navbar = ({ activeLink }) => {
  const { cart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handler to close menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" id="logo" onClick={handleLinkClick}>
        <i className="fa-solid fa-gem"></i> Rouge
      </Link>
      <button
        className="hamburger-btn"
        aria-label="Abrir menú"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
      </button>
      <ul style={menuOpen ? { left: 0 } : { left: '-100%' }}>
        <li>
          <Link to="/" className={activeLink === "home" ? "active" : ""} onClick={handleLinkClick}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/nosotros" className={activeLink === "nosotros" ? "active" : ""} onClick={handleLinkClick}>
            Nosotros
          </Link>
        </li>
        <li>
          <Link to="/alta" className={activeLink === "alta" ? "active" : ""} onClick={handleLinkClick}>
            Alta de Producto
          </Link>
        </li>
        <li>
          <Link to="/contacto" className={activeLink === "contacto" ? "active" : ""} onClick={handleLinkClick}>
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