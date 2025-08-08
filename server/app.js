// Configuramos nuestro servidor
const express = require("express"); // framework para crear servidores
const morgan = require("morgan"); // middleware para loguear las peticiones
const hbs = require("hbs"); // motor de plantillas para renderizar html
const path = require("path"); // librería para trabajar con rutas

// Importamos las rutas
const routes = require('./routes/pagesRouter'); // Importamos las rutas de las páginas
const apiRoutes = require('./routes/apiRouter'); // Importamos las rutas de productos

// Creamos el servidor
const app = express();

// Configuramos el middleware
app.use(morgan("dev")); // loguea las peticiones en la consola
app.use(express.json()); // parsea el body de las peticiones a json
app.use(express.urlencoded({ extended: true })); // parsea el body de las peticiones a json
app.use(express.static(path.join(__dirname, "public"))); // 2v

// Configuramos el motor de plantillas
app.set("view engine", "hbs"); // configuramos el motor de plantillas
app.set("views", path.join(__dirname, "views")); // configuramos la carpeta de vistas
hbs.registerPartials(path.join(__dirname, "views/partials")); // configuramos la carpeta de parciales

// Configuramos las rutas
app.use('/', routes);
app.use("/api", apiRoutes);

// Middleware para errores
// Middleware 404 al final de todas tus rutas
app.use((req, res) => {
  console.log(`Ruta no encontrada: ${req.url}`);
  res.status(404).send("<h1>404 - Página no encontrada</h1>");
});

// Middleware para manejar errores 500
app.use((err, req, res, next) => {
  console.error(err.stack); // Imprime el error en la consola
  res.status(500).send("<h1>500 - Error interno del servidor</h1>");
});

// Exportamos el servidor
module.exports = app; // exportamos el servidor para usarlo en otros archivos