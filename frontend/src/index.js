import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
// import App from './App';
import Home from './pages/Home/Home';
import Alta from './pages/Alta/Alta';
import Nosotros from './pages/Nosotros/Nosotros';
import Contacto from './pages/Contacto/Contacto';
import DetalleProducto from './pages/DetalleProducto/DetalleProducto';
import { CartProvider } from './contexts/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alta" element={<Alta />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
