import React, { useState, useEffect } from 'react';
import Config from '../Config';
import { useNavigate, useParams } from 'react-router-dom';

const CompraUpdate = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [compra, setCompra] = useState({
    codCompra: '',
    fecha: '',
    cantidad: '',
    PrecioC: '',
    descripcion: '',
    producto_id: '',
    proveedores_id: ''
  });

  const [producto, setProducto] = useState([]);
  const [proveedor, setProveedor] = useState([]);

  useEffect(() => {
    fetchData();
    fetchCompra();
  }, [id]);

  const fetchData = async () => {
    try {
      const productoResponse = await Config.getProductoAll(); 
      const proveedorResponse = await Config.getProveedor();

      setProducto(productoResponse.data);
      setProveedor(proveedorResponse.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const fetchCompra = async () => {
    try {
      const response = await Config.getCompraById(id);
      setCompra(response.data);
    } catch (error) {
      console.error('Error fetching compra:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompra({ ...compra, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        
        const dataToUpdate = { ...compra };
        delete dataToUpdate.producto;
        delete dataToUpdate.proveedor;

        console.log('Datos enviados al backend:', dataToUpdate);

        await Config.updateCompra(id, dataToUpdate); 
        alert('Compra actualizada exitosamente');
        navigate('/admin/compra'); 
    } catch (error) {
        console.error('Error al actualizar la compra:', error);

        if (error.response) {
            console.error('Respuesta del servidor:', error.response.data);
            alert(`Error del servidor: ${error.response.data.message || 'Ocurrió un error inesperado.'}`);
        } else if (error.request) {
            console.error('Solicitud fallida:', error.request);
            alert('No se recibió respuesta del servidor. Verifica tu conexión.');
        } else {
            console.error('Error desconocido:', error.message);
            alert(`Error inesperado: ${error.message}`);
        }
    }
};



  return (
    <div className="container">
      <h2 className="mt-4">Editar Compra</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="codCompra" className="form-label">Código de Compra</label>
          <input
            type="text"
            className="form-control"
            id="codCompra"
            name="codCompra"
            value={compra.codCompra}
            onChange={handleChange}
            required
            disabled
            maxLength={4}
          />
        </div>

       

        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">Fecha</label>
          <input
            type="date"
            className="form-control"
            id="fecha"
            name="fecha"
            value={compra.fecha}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cantidad" className="form-label">Cantidad</label>
          <input
            type="number"
            className="form-control"
            id="cantidad"
            name="cantidad"
            value={compra.cantidad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="PrecioC" className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            id="PrecioC"
            name="PrecioC"
            value={compra.PrecioC}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <textarea
            className="form-control"
            id="descripcion"
            name="descripcion"
            value={compra.descripcion}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="producto_id" className="form-label">Producto</label>
          <select
            className="form-select"
            id="producto_id"
            name="producto_id"
            value={compra.producto_id}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar Producto</option>
            {producto.map((producto) => (
              <option key={producto.id} value={producto.id}>
                {producto.nombrePD}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="proveedores_id" className="form-label">Proveedor</label>
          <select
            className="form-select"
            id="proveedores_id"
            name="proveedores_id"
            value={compra.proveedores_id}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar Proveedor</option>
            {proveedor.map((proveedor) => (
              <option key={proveedor.id} value={proveedor.id}>
                {proveedor.nombre}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Actualizar Compra</button>
      </form>
    </div>
  );
};

export default CompraUpdate;
