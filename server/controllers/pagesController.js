const Producto = require("../models/productoModel");

const indexApp = async (req, res) => {
  const productos = await Producto.find();

  res.render("index", { productos });
};

const altaApp = (req, res) => {
  res.render("alta");
};

const contactoApp = (req, res) => {
  res.render("contacto");
};

const nosotrosApp = (req, res) => {
  res.render("nosotros");
};

const altaProductoApp = async (req, res) => {
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
    const nuevoProducto = new Producto(datosProducto);
    await nuevoProducto.save();

    res.redirect("/");
  } catch (error) {
    console.error("Error al añadir el producto:", error);
    res.status(500).json({
      status: "error",
      message: "Error al añadir el producto",
    });
  }
};

module.exports = {
  indexApp,
  altaApp,
  contactoApp,
  nosotrosApp,
  altaProductoApp,
};
