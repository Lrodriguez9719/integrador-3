import axios from 'axios';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const fetchProductos = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/api/productos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching productos:', error);
    throw error;
  }
};

export const uploadProducto = async (producto) => {
  try {
    const response = await axios.post(`${SERVER_URL}/api/productos`, producto);
    return response.data;
  } catch (error) {
    console.error('Error uploading producto:', error);
    throw error;
  }
};

export const fetchProductoById = async (id) => {
  try {
    const response = await axios.get(`${SERVER_URL}/api/productos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching producto by ID:', error);
    throw error;
  }
};

export const cartCheckout = async (productos) => {
  try {
    const cartProducts = productos.map(item => ({
      name: item.nombre,
      id: item._id,
    }));
    const response = await axios.post(`${SERVER_URL}/api/carrito`, { productos: cartProducts });
    return response.data;
  } catch (error) {
    console.error('Error during cart checkout:', error);
    throw error;
  }
};