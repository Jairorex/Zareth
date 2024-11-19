import React, { useState, useEffect } from 'react';
import Config from '../Config';
import { useParams, useNavigate } from 'react-router-dom';

const ProveedorUpdate = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [proveedor, setProveedor] = useState({
    codigo: '',
    nombre: '',
    ruc: '',
    telefono: '',
    direccion: '',
  });

  useEffect(() => {
    fetchProveedor();
  }, [id]);

  const fetchProveedor = async () => {
    try {
      const response = await Config.getProveedorById(id); 
      setProveedor(response.data);
    } catch (error) {
      console.error('Error al obtener el proveedor:', error);
      alert('No se pudo cargar la información del proveedor.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProveedor({ ...proveedor, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await Config.updateProveedor(id, proveedor); 
      alert('Proveedor actualizado exitosamente.');
      navigate('/admin/proveedor'); 
    } catch (error) {
      console.error('Error al actualizar el proveedor:', error);
      alert('No se pudo actualizar el proveedor.');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Editar Proveedor</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="codigo" className="form-label">Código</label>
          <input
            type="text"
            className="form-control"
            id="codigo"
            name="codigo"
            value={proveedor.codigo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={proveedor.nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ruc" className="form-label">RUC</label>
          <input
            type="text"
            className="form-control"
            id="ruc"
            name="ruc"
            value={proveedor.ruc}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            name="telefono"
            value={proveedor.telefono}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            name="direccion"
            value={proveedor.direccion}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Actualizar Proveedor</button>
      </form>
    </div>
  );
};

export default ProveedorUpdate;
