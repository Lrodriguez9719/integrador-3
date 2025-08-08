const mongoose = require("mongoose");

// Define the schema for the carrito
const carritoSchema = new mongoose.Schema({
  productos: [
    {
      name: {
        type: String,
        required: true,
      },
      ID: {
        type: String,
        required: true,
      },
    },
  ],
});

// Create the model
const Carrito = mongoose.model("Carrito", carritoSchema);
module.exports = Carrito;