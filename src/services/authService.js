// src/services/authService.js
export const fetchToken = async (username, password) => {
    const response = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  
    if (!response.ok) throw new Error("Error al obtener el token");
  
    const data = await response.json();
    return data.access; // Retorna el token de acceso
  };
  

