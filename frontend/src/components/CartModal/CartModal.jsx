import { useCart } from '../../contexts/cartContext';
import { cartCheckout } from '../../services/productosService';
import { useState } from 'react';
import './CartModal.css';

const CartModal = ({ onClose }) => {
  const { cart, emptyCart, removeFromCart } = useCart();
  const [error, setError] = useState(null);

  console.log(cart);

  const handleCheckout = async () => {
    try {
      setError(null);
      await cartCheckout(cart);
      alert('Compra realizada con éxito!');
      emptyCart();
      onClose();
    } catch (err) {
      setError('Hubo un error al procesar la compra. Intenta nuevamente.');
      console.error(err);
    }
  };

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Tu carrito</h2>
        {error && <p className="error-message">{error}</p>}
        {cart.length === 0 ? (
          <p className="empty-cart-message">
            El carrito está vacío.
          </p>
        ) : (
          <ul className="cart-items-list">
            {cart.map((item, idx) => (
              <li key={idx} className="cart-item">
                <img src={item.imagen} alt={item.nombre} className="cart-item-img" />
                <div className="cart-item-details">
                  <span>{item.nombre}</span>
                  <span className="cart-item-price">${item.precio}</span>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(idx)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={handleCheckout}
          disabled={cart.length === 0}
          className={`checkout-btn${cart.length === 0 ? ' disabled' : ''}`}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default CartModal;