const Carrito = require("../models/carritoModel");

const añadirProductosAlCarrito = async (req, res) => {
  const { productos } = req.body;

  const productosCarrito = productos.map((producto) => {
    return {
      name: producto.name,
      ID: producto.id,
    }
  });

  console.log(
    "Los siguientes productos seran comprados: ",
    productosCarrito
  );

  try {
    // Validate the input
    if (!Array.isArray(productos) || productos.length === 0) {
      return res.status(400).json({
        status: "error",
        message: "El cuerpo de la solicitud debe contener un array de productos.",
      });
    }

    const carrito = new Carrito({
      productos: productosCarrito,
    });
    await carrito.save();

    res.status(200).json({
      status: "success",
      message: "Productos añadidos al carrito correctamente",
      data: carrito,
    });
  } catch (error) {
    console.error("Error al añadir productos al carrito:", error);
    return res.status(500).json({
      status: "error",
      message: "Error al añadir productos al carrito",
    });
  }
}

module.exports = {
  añadirProductosAlCarrito,
};