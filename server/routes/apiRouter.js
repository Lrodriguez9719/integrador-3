// Importamos el router de express
const express = require('express');

// Creamos el router
const router = express.Router();

// Importamos los controladores
const {
  obtenerProductos,
  obtenerProducto,
  añadirProducto,
  modificarProducto,
  eliminarProducto,
} = require('../controllers/productoController');

const {
  añadirProductosAlCarrito,
} = require('../controllers/carritoController');

// Definimos las rutas
router.get('/productos', obtenerProductos); // Para obtener todos los productos
router.get('/productos/:id', obtenerProducto); // Para obtener un producto específico por ID
router.post('/productos', añadirProducto); // Para añadir un nuevo producto
router.put('/productos/:id', modificarProducto); // Para actualizar un producto específico por ID
router.delete('/productos/:id', eliminarProducto); // Para eliminar un producto específico por ID
router.post("/carrito", añadirProductosAlCarrito); // Para añadir productos al carrito

// Exportamos el router
module.exports = router;