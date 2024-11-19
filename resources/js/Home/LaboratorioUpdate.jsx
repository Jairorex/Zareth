import React, { useState, useEffect } from 'react';
import Config from '../Config'; 
import { useNavigate, useParams } from 'react-router-dom';

const LaboratorioUpdate = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [laboratorio, setLaboratorio] = useState({
    codLab: '',
    nombreLab: '',
    direcionLab: '',
    telefonoLab: '',
    marca_id: ''
  });

  const [marca, setMarca] = useState([]);

  useEffect(() => {
    fetchLaboratorio();
    fetchMarcas();
  }, [id]);

  const fetchLaboratorio = async () => {
    try {
      const response = await Config.getLaboratorioById(id); 
      setLaboratorio(response.data);
    } catch (error) {
      console.error("Error al obtener el laboratorio:", error);
      alert('No se pudo cargar la información del laboratorio.');
    }
  };

  const fetchMarcas = async () => {
    try {
      const response = await Config.getMarca();
      setMarca(response.data);
    } catch (error) {
      console.error("Error al obtener las marcas:", error);
    }
  };

  const handleLaboratorioChange = (e) => {
    const { name, value } = e.target;
    if (name === 'codLab' && value.length <= 4) {
      setLaboratorio({ ...laboratorio, [name]: value });
    } else if (name !== 'codLab') {
      setLaboratorio({ ...laboratorio, [name]: value });
    }
  };

  const handleLaboratorioSubmit = async (e) => {
    e.preventDefault();
    try {
      await Config.updateLaboratorio(id, laboratorio); 
      alert('Laboratorio actualizado exitosamente');
      navigate('/admin/laboratorio'); 
    } catch (error) {
      console.error("Error al actualizar el laboratorio:", error);
      alert('No se pudo actualizar el laboratorio.');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Editar Laboratorio</h2>
      <form onSubmit={handleLaboratorioSubmit}>
        <div className="mb-3">
          <label htmlFor="codLab" className="form-label">Código de Laboratorio</label>
          <input
            type="text"
            className="form-control"
            id="codLab"
            name="codLab"
            value={laboratorio.codLab}
            onChange={handleLaboratorioChange}
            required
            maxLength={4}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nombreLab" className="form-label">Nombre del Laboratorio</label>
          <input
            type="text"
            className="form-control"
            id="nombreLab"
            name="nombreLab"
            value={laboratorio.nombreLab}
            onChange={handleLaboratorioChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direcionLab" className="form-label">Dirección del Laboratorio</label>
          <input
            type="text"
            className="form-control"
            id="direcionLab"
            name="direcionLab"
            value={laboratorio.direcionLab}
            onChange={handleLaboratorioChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefonoLab" className="form-label">Teléfono del Laboratorio</label>
          <input
            type="tel"
            className="form-control"
            id="telefonoLab"
            name="telefonoLab"
            value={laboratorio.telefonoLab}
            onChange={handleLaboratorioChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="marca_id" className="form-label">Marca</label>
          <select
            className="form-select"
            id="marca_id"
            name="marca_id"
            value={laboratorio.marca_id}
            onChange={handleLaboratorioChange}
            required
          >
            <option value="">Seleccionar Marca</option>
            {marca.map((m) => (
              <option key={m.id} value={m.id}>
                {m.nombreM}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Actualizar Laboratorio</button>
      </form>
    </div>
  );
};

export default LaboratorioUpdate;
