import React, { useState } from 'react';
import Config from '../Config'; 

const ProveedorCreate = () => {
  const [proveedor, setProveedor] = useState({
    codigo: '',
    nombre: '',
    ruc: '',
    telefono: '',
    direccion: '',
    
  });

  
  const handleProveedorChange = (e) => {
    const { name, value } = e.target;
    setProveedor({ ...proveedor, [name]: value });
    if (name === 'codigo' && value.length <= 4) {
      setProveedor({ ...proveedor, [name]: value });
    } else if (name !== 'codigo') {
      setProveedor({ ...proveedor, [name]: value });
    }
  };

  // Función para manejar el envío del formulario de Proveedor
  const handleProveedorSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Config.createProveedor(proveedor);
      alert('Proveedor creado exitosamente');
      setProveedor({
        codigo: '',
        nombre: '',
        ruc: '',
        telefono: '',
        direccion: '',
       
      }); // Limpiar los campos después de la creación
    } catch (error) {
      alert('Error al crear el proveedor');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Crear Proveedor</h2>
      <form onSubmit={handleProveedorSubmit}>
        <div className="mb-3">
          <label htmlFor="codigo" className="form-label">Código del Proveedor</label>
          <input
            type="text"
            className="form-control"
            id="codigo"
            name="codigo"
            value={proveedor.codigo}
            onChange={handleProveedorChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre del Proveedor</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={proveedor.nombre}
            onChange={handleProveedorChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ruc" className="form-label">RUC del Proveedor</label>
          <input
            type="text"
            className="form-control"
            id="ruc"
            name="ruc"
            value={proveedor.ruc}
            onChange={handleProveedorChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono del Proveedor</label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            name="telefono"
            value={proveedor.telefono}
            onChange={handleProveedorChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección del Proveedor</label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            name="direccion"
            value={proveedor.direccion}
            onChange={handleProveedorChange}
            required
            maxLength={4}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Crear Proveedor</button>
      </form>
    </div>
  );
};

export default ProveedorCreate;
