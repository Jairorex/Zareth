import React, { useState, useEffect } from 'react';
import Config from '../Config';
import { useNavigate, useParams } from 'react-router-dom';

const MarcaUpdate = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [marca, setMarca] = useState({
    codigoM: '',
    nombreM: ''
  });

  useEffect(() => {
    fetchMarca();
  }, [id]);

  const fetchMarca = async () => {
    try {
      const response = await Config.getMarcaById(id); 
      setMarca(response.data);
    } catch (error) {
      console.error('Error al obtener la marca:', error);
      alert('No se pudo cargar la información de la marca.');
    }
  };

  const handleMarcaChange = (e) => {
    const { name, value } = e.target;
    if (name === 'codigoM' && value.length <= 4) {
      setMarca({ ...marca, [name]: value });
    } else if (name !== 'codigoM') {
      setMarca({ ...marca, [name]: value });
    }
  };

  const handleMarcaSubmit = async (e) => {
    e.preventDefault();
    try {
      await Config.updateMarca(id, marca); 
      alert('Marca actualizada exitosamente');
      navigate('/admin/marca'); 
    } catch (error) {
      console.error('Error al actualizar la marca:', error);
      alert('No se pudo actualizar la marca.');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Editar Marca</h2>
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
        <button type="submit" className="btn btn-primary">Actualizar Marca</button>
      </form>
    </div>
  );
};

export default MarcaUpdate;
