import axios from 'axios';

const API_URL = 'http://localhost:4000/autos/list';  // URL del back-end

// Obtener todos los autos
export const getAutos = async () => {
  try {
    const response = await axios.post(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los autos:', error);
    return [];
  }
};

// Crear un nuevo auto
export const createAuto = async (auto) => {
  try {
    const response = await axios.post('http://localhost:4000/autos/create', auto);
    return response.data;
  } catch (error) {
    console.error('Error al crear auto:', error);
  }
};

// Actualizar un auto
export const updateAuto = async (auto) => {
  try {
    const response = await axios.post('http://localhost:4000/autos/update', auto);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar auto:', error);
  }
};

// Eliminar un auto
export const deleteAuto = async (id) => {
  try {
    const response = await axios.post('http://localhost:4000/autos/delete', { id });
    return response.data;
  } catch (error) {
    console.error('Error al eliminar auto:', error);
  }
};
