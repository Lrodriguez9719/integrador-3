const moongose = require("mongoose");

const productoSchema = new moongose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
});

const Producto = moongose.model("Producto", productoSchema);
module.exports = Producto;