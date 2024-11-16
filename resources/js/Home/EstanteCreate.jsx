import React, { useState } from 'react';
import Config from '../Config'; 

const EstanteCreate = () => {
  const [estante, setEstante] = useState({
    codigoE: '',
    descripcionE: ''
  });

  const handleEstanteChange = (e) => {
    const { name, value } = e.target;
    setEstante({ ...estante, [name]: value });

    if (name === 'codigoE' && value.length <= 4) {
      setEstante({ ...estante, [name]: value });
    } else if (name !== 'codigoE') {
      setEstante({ ...estante, [name]: value });
    }
  };

  
  const handleEstanteSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Config.createEstante(estante);
      alert('Estante creado exitosamente');
      setEstante({
        codigoE: '',
        descripcionE: ''
      }); 
    } catch (error) {
      alert('Error al crear el estante');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Crear Estante</h2>
      <form onSubmit={handleEstanteSubmit}>
        <div className="mb-3">
          <label htmlFor="codigoE" className="form-label">Código del Estante</label>
          <input
            type="text"
            className="form-control"
            id="codigoE"
            name="codigoE"
            value={estante.codigoE}
            onChange={handleEstanteChange}
            required
            maxLength={4}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcionE" className="form-label">Descripción del Estante</label>
          <textarea
            className="form-control"
            id="descripcionE"
            name="descripcionE"
            value={estante.descripcionE}
            onChange={handleEstanteChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Crear Estante</button>
      </form>
    </div>
  );
};

export default EstanteCreate;
