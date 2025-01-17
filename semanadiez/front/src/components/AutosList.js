import React, { useEffect, useState } from 'react';
import { getAutos, deleteAuto } from '../services/autosService';
import AutoForm from './AutoForm';  // Asegúrate de importar AutoForm para la creación y edición

const AutosList = () => {
  const [autos, setAutos] = useState([]);
  const [selectedAuto, setSelectedAuto] = useState(null); // Estado para el auto seleccionado
  const [isCreating, setIsCreating] = useState(false); // Estado para indicar si estamos creando un auto

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAutos();
      setAutos(data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteAuto(id);
    setAutos(autos.filter((auto) => auto.id !== id));
  };

  const handleUpdate = (auto) => {
    setSelectedAuto(auto);  // Establecer el auto a editar
    setIsCreating(false);  // Asegúrate de que no estamos en modo de creación
  };

  const handleCreate = () => {
    setSelectedAuto(null); // No hay un auto seleccionado para crear
    setIsCreating(true);   // Indicamos que estamos creando un auto
  };

  if (selectedAuto || isCreating) {
    return <AutoForm autoToEdit={selectedAuto} onSave={() => setSelectedAuto(null)} />;
  }

  return (
    <div className="container">
      <h1>Lista de Autos</h1>
      <button onClick={handleCreate}>Crear Auto</button> {/* Botón para crear auto */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Pasajeros</th>
            <th>Color</th>
            <th>Motor</th>
            <th>Modelo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {autos.map((auto) => (
            <tr key={auto.id}>
              <td>{auto.id}</td>
              <td>{auto.brand}</td>
              <td>{auto.npassengers}</td>
              <td>{auto.color}</td>
              <td>{auto.nengine}</td>
              <td>{auto.model}</td>
              <td>
                <button onClick={() => handleDelete(auto.id)}>Eliminar</button>
                <button onClick={() => handleUpdate(auto)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AutosList;
