const Producto = require("../models/productoModel");

const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json({
      status: "success",
      message: "Productos obtenidos correctamente",
      data: productos,
    });
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return res.status(500).json({
      status: "error",
      message: "Error al obtener los productos",
    });
  }
};

const obtenerProducto = async (req, res) => {
  const { id } = req.params;

  try {
    const producto = await Producto.findById(id);
    if (!producto) {
      return res.status(404).json({
        status: "error",
        message: "Producto no encontrado",
      });
    }
    res.json({
      status: "success",
      message: "Producto obtenido correctamente",
      data: producto,
    });
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    return res.status(500).json({
      status: "error",
      message: "Error al obtener el producto",
    });
  }
};

const añadirProducto = async (req, res) => {
  const {
    product_name,
    product_description,
    product_price,
    product_image_url,
  } = req.body;

  if (
    !product_name ||
    !product_description ||
    !product_price ||
    !product_image_url
  ) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos del producto",
    });
  }

  const datosProducto = {
    nombre: product_name,
    imagen: product_image_url,
    descripcion: product_description,
    precio: product_price,
  };

  console.log(datosProducto);

  try {
    const nuevoProducto = new Producto(datosProducto);
    await nuevoProducto.save();

    res.status(201).json({
      status: "success",
      message: "Producto añadido correctamente",
      data: nuevoProducto,
    });
  } catch (error) {
    console.error("Error al añadir el producto:", error);
    res.status(500).json({
      status: "error",
      message: "Error al añadir el producto",
    });
  }
};

const modificarProducto = async (req, res) => {
  const { id } = req.params;
  const {
    product_name,
    product_description,
    product_price,
    product_image_url,
  } = req.body;
  if (
    !product_name ||
    !product_description ||
    !product_price ||
    !product_image_url
  ) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos del producto",
    });
  }
  const datosProducto = {
    nombre: product_name,
    imagen: product_image_url,
    descripcion: product_description,
    precio: product_price,
  };
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(
      id,
      datosProducto,
      { new: true }
    );
    if (!productoActualizado) {
      return res.status(404).json({
        status: "error",
        message: "Producto no encontrado",
      });
    }
    res.json({
      status: "success",
      message: "Producto actualizado correctamente",
      data: productoActualizado,
    });
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    return res.status(500).json({
      status: "error",
      message: "Error al actualizar el producto",
    });
  }
};

const eliminarProducto = async (req, res) => {
  const { id } = req.params;

  try {
    const productoEliminado = await Producto.findByIdAndDelete(id);
    if (!productoEliminado) {
      return res.status(404).json({
        status: "error",
        message: "Producto no encontrado",
      });
    }
    res.json({
      status: "success",
      message: "Producto eliminado correctamente",
      data: productoEliminado,
    });
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    return res.status(500).json({
      status: "error",
      message: "Error al eliminar el producto",
    });
  }
};

module.exports = {
  obtenerProductos,
  obtenerProducto,
  añadirProducto,
  modificarProducto,
  eliminarProducto,
};
