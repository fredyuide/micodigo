import configs from "../configs/env";

export const Services = async (data = "", url) => {
  const requestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  console.log(`${configs.server.url}${url}`, requestInit);

  try {
    const response = await fetch(`${configs.server.url}${url}`, requestInit);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      throw new Error("La respuesta no es un JSON válido");
    }
  } catch (error) {
    console.log("Encontramos un error: ", error);
    return { error: error.message || "Error desconocido" };
  }
};