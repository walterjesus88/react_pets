import axios from 'axios';

// Definir la URL base de la API
const API_URL = 'http://localhost:8000/api/snippets/';

// Servicio para obtener datos (GET)
export const getSnippets = async () => {
  try {
    console.log('fetchData');
    const response = await axios.get(`${API_URL}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
};


export const getSnippetId = async (id) => {
    try {
      console.log('fetchData');
      const response = await axios.get(`${API_URL}` + id);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      throw error;
    }
  };

// Servicio para enviar datos (POST)
export const postSnippets = async (data) => {
  try {
    //const response = await axios.post(`${API_URL}`, data);
    console.log(data);
    const response = await axios.post(`${API_URL}`, data, {
        headers: {
          'Content-Type': 'application/json', // Ajusta según lo que necesites
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Si necesitas un token de autorización
        },
      });

    return response.data;

  } catch (error) {
    console.error('Error al enviar los datos:', error);
    throw error;
  }
};
