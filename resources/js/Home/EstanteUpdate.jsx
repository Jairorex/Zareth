import React, { useState, useEffect } from 'react';
import Config from '../Config';
import { useNavigate, useParams } from 'react-router-dom';

const EstanteUpdate = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [estante, setEstante] = useState({
    codigoE: '',
    descripcionE: ''
  });

  useEffect(() => {
    fetchEstante();
  }, [id]);

  const fetchEstante = async () => {
    try {
      const response = await Config.getEstanteById(id); 
      setEstante(response.data);
    } catch (error) {
      console.error('Error al obtener el estante:', error);
      alert('No se pudo cargar la información del estante.');
    }
  };

  const handleEstanteChange = (e) => {
    const { name, value } = e.target;
    if (name === 'codigoE' && value.length <= 4) {
      setEstante({ ...estante, [name]: value });
    } else if (name !== 'codigoE') {
      setEstante({ ...estante, [name]: value });
    }
  };

  const handleEstanteSubmit = async (e) => {
    e.preventDefault();
    try {
      await Config.updateEstante(id, estante); 
      alert('Estante actualizado exitosamente');
      navigate('/admin/estante'); 
    } catch (error) {
      console.error('Error al actualizar el estante:', error);
      alert('No se pudo actualizar el estante. Por favor, inténtalo nuevamente.');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Editar Estante</h2>
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
        <button type="submit" className="btn btn-primary">Actualizar Estante</button>
      </form>
    </div>
  );
};

export default EstanteUpdate;
