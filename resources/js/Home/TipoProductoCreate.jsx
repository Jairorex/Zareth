import React, { useState } from 'react';
import Config from '../Config'; 
import { useNavigate } from 'react-router-dom';

const TipoProductoCreate = () => {
  const navigate = useNavigate();
  const [tipoProducto, setTipoProducto] = useState({
    nombreTP: '',
    descripcionTP: ''
  });

 
  const handleTipoProductoChange = (e) => {
    const { name, value } = e.target;
    setTipoProducto({ ...tipoProducto, [name]: value });
   
  };

  
  const handleTipoProductoSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Config.createTipoProducto(tipoProducto);
      alert('Tipo de Producto creado exitosamente');
      setTipoProducto({
        nombreTP: '',
        descripcionTP: ''
      }); 
      navigate('/admin/tipo'); 
    } catch (error) {
      alert('Error al crear el Tipo de Producto');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Crear Tipo de Producto</h2>
      <form onSubmit={handleTipoProductoSubmit}>
        <div className="mb-3">
          <label htmlFor="nombreTP" className="form-label">Nombre del Tipo de Producto</label>
          <input
            type="text"
            className="form-control"
            id="nombreTP"
            name="nombreTP"
            value={tipoProducto.nombreTP}
            onChange={handleTipoProductoChange}
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
            onChange={handleTipoProductoChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Crear Tipo de Producto</button>
      </form>
    </div>
  );
};

export default TipoProductoCreate;
