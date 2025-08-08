// Importamos el router de express
const express = require('express');

// Creamos el router
const router = express.Router();

// Importamos el controlador
const {
  indexApp,
  altaApp,
  contactoApp,
  nosotrosApp,
  altaProductoApp
} = require('../controllers/pagesController');

// Definimos las rutas
router.get('/', indexApp);
router.get('/alta', altaApp);
router.get('/contacto', contactoApp);
router.get('/nosotros', nosotrosApp);
router.post("/submit", altaProductoApp)

// Exportamos el router
module.exports = router;