import { Link } from 'react-router';
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="social_icons">
        <li>
          <a href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li>
          <Link to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/nosotros">
            Nosotros
          </Link>
        </li>
        <li>
          <Link to="/alta">
            Alta
          </Link>
        </li>
        <li>
          <Link to="/contacto">
            Contacto
          </Link>
        </li>
      </ul>
      <p>
        ©2025 Rouge | Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;