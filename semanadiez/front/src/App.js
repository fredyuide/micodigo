import './style.css';  // Ajusta la ruta según la ubicación del archivo CSS

import React, { useState } from 'react';
import AutosList from './components/AutosList';
import AutoForm from './components/AutoForm';

function App() {
  const [selectedAuto, setSelectedAuto] = useState(null);

  const handleSave = () => {
    setSelectedAuto(null);  // Cierra el formulario después de guardar
  };

  return (
    <div>
      {selectedAuto ? (
        <AutoForm autoToEdit={selectedAuto} onSave={handleSave} />
      ) : (
        <AutosList />
      )}
    </div>
  );
}

export default App;
