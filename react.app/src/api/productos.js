import axios from './axios';

export const getProductos = () => axios.get(`/ConsultarProductos`);

export const addProducto = (formData) => axios.post(`/CrearProductos`,formData);

export const deleteProducto = (id) =>axios.delete(`/EliminarProducto/${id}`)

export const updateProducto = (formData) =>axios.put(`/EditarProductos`, formData)