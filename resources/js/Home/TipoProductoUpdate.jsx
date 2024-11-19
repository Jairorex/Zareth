import React, { useState, useEffect } from 'react';
import Config from '../Config';
import { useParams, useNavigate } from 'react-router-dom';

const TipoProductoUpdate = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [tipoProducto, setTipoProducto] = useState({
    nombreTP: '',
    descripcionTP: ''
  });

  useEffect(() => {
    fetchTipoProducto();
  }, [id]);

  const fetchTipoProducto = async () => {
    try {
      const response = await Config.getTipoById(id);
      setTipoProducto(response.data);
    } catch (error) {
      console.error('Error al obtener el tipo de producto:', error);
      alert('No se pudo cargar la información del tipo de producto.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTipoProducto({ ...tipoProducto, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await Config.updateTipo(id, tipoProducto);
      alert('Tipo de Producto actualizado exitosamente.');
      navigate('/admin/tipo'); 
    } catch (error) {
      console.error('Error al actualizar el tipo de producto:', error);
      alert('No se pudo actualizar el tipo de producto.');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Editar Tipo de Producto</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="nombreTP" className="form-label">Nombre del Tipo de Producto</label>
          <input
            type="text"
            className="form-control"
            id="nombreTP"
            name="nombreTP"
            value={tipoProducto.nombreTP}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcionTP" className="form-label">Descripción del Tipo de Producto</label>
          <textarea
            className="form-control"
            id="descripcionTP"
            name="descripcionTP"
            value={tipoProducto.descripcionTP}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Actualizar Tipo de Producto</button>
      </form>
    </div>
  );
};

export default TipoProductoUpdate;
