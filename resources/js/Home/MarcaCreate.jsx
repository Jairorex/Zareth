import React, { useState } from 'react';
import Config from '../Config'; 

const MarcaCreate = () => {
  const [marca, setMarca] = useState({
    codigoM: '',
    nombreM: ''
  });


  const handleMarcaChange = (e) => {
    const { name, value } = e.target;
    setMarca({ ...marca, [name]: value });
    if (name === 'codigoM' && value.length <= 4) {
      setMarca({ ...marca, [name]: value });
    } else if (name !== 'codigoM') {
      setMarca({ ...marca, [name]: value });
    }
  };


  const handleMarcaSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Config.createMarca(marca);
      alert('Marca creada exitosamente');
    } catch (error) {
      alert('Error al crear la marca');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Crear Marca</h2>
      <form onSubmit={handleMarcaSubmit}>
        <div className="mb-3">
          <label htmlFor="codigoM" className="form-label">Código de Marca</label>
          <input
            type="text"
            className="form-control"
            id="codigoM"
            name="codigoM"
            value={marca.codigoM}
            onChange={handleMarcaChange}
            required
            maxLength={4}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nombreM" className="form-label">Nombre de Marca</label>
          <input
            type="text"
            className="form-control"
            id="nombreM"
            name="nombreM"
            value={marca.nombreM}
            onChange={handleMarcaChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Crear Marca</button>
      </form>
    </div>
  );
};

export default MarcaCreate;
