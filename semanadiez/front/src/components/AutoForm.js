import React, { useState, useEffect } from 'react';
import { createAuto, updateAuto } from '../services/autosService';

const AutoForm = ({ autoToEdit, onSave }) => {
  const [auto, setAuto] = useState({
    brand: '',
    npassengers: '',
    color: '',
    nengine: '',
    model: '',
  });

  useEffect(() => {
    if (autoToEdit) {
      setAuto(autoToEdit); // Si hay un auto para editar, lo cargamos
    }
  }, [autoToEdit]);

  const handleChange = (e) => {
    setAuto({ ...auto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (auto.id) {
      await updateAuto(auto);
    } else {
      await createAuto(auto);
    }
    onSave();  // Llamar a onSave después de guardar
  };

  return (
    <div>
      <h1>{auto.id ? 'Editar Auto' : 'Crear Nuevo Auto'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="brand"
          value={auto.brand}
          onChange={handleChange}
          placeholder="Marca"
        />
        <input
          name="npassengers"
          type="number"
          value={auto.npassengers}
          onChange={handleChange}
          placeholder="Pasajeros"
        />
        <input
          name="color"
          value={auto.color}
          onChange={handleChange}
          placeholder="Color"
        />
        <input
          name="nengine"
          value={auto.nengine}
          onChange={handleChange}
          placeholder="Motor"
        />
        <input
          name="model"
          value={auto.model}
          onChange={handleChange}
          placeholder="Modelo"
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default AutoForm;
