//importamos la configuración de dotenv
require('dotenv').config();

// Importamos el servidor
const app = require('./app');

// Importamos el puerto y la uri de la base de datos
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Importamos la conexión a la base de datos
const connectDB = require('./conexion/mongoConnection');
connectDB(MONGO_URI); // conectamos a la base de datos

// levantamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`); // mostramos un mensaje en la consola
});