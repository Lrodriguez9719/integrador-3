const mongoose = require('mongoose');

// Conexión a la base de datos MongoDB
const connectDB = async (MONGO_URI) => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Conexión a MongoDB exitosa');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1); // Salir del proceso si hay un error de conexión
  }
};

module.exports = connectDB; // Exportamos la función de conexión