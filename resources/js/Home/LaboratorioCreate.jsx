import React, { useState, useEffect } from 'react';
import Config from '../Config'; 

const LaboratorioCreate = () => {
  const [laboratorio, setLaboratorio] = useState({
    codLab: '',
    nombreLab: '',
    direcionLab: '',
    telefonoLab: '',
    marca_id: ''
  });

  const [marca, setMarca] = useState([]);

  useEffect(() => {
    const fetchMarca = async () => {
      try {
        const response = await Config.getMarca();
        setMarca(response.data);  
      } catch (error) {
        console.error("Error al obtener las marcas:", error);
      }
    };
    fetchMarca();
  }, []); 

  const handleLaboratorioChange = (e) => {
    const { name, value } = e.target;
    setLaboratorio({ ...laboratorio, [name]: value });
    if (name === 'codLab' && value.length <= 4) {
      setLaboratorio({ ...laboratorio, [name]: value });
    } else if (name !== 'codLab') {
      setLaboratorio({ ...laboratorio, [name]: value });
    }
  };

  const handleLaboratorioSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Config.createLaboratorio(laboratorio);
      alert('Laboratorio creado exitosamente');
    } catch (error) {
      alert('Error al crear el laboratorio');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Crear Laboratorio</h2>
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
          <label htmlFor="direccionLab" className="form-label">Dirección del Laboratorio</label>
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
            {marca.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombreM} 
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Crear Laboratorio</button>
      </form>
    </div>
  );
};

export default LaboratorioCreate;
