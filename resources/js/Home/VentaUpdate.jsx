import React, { useState, useEffect } from 'react';
import Config from '../Config'; 
import { useParams, useNavigate } from 'react-router-dom';

const VentaUpdate = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [venta, setVenta] = useState({
    codVenta: '',
    fecha: '',
    cantidad: '',
    PrecioV: '',
    descripcion: '',
    producto_id: ''
  });

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    fetchVenta();
    fetchProducto();
  }, [id]);


  const fetchVenta = async () => {
    try {
      const response = await Config.getVentaById(id);
      setVenta(response.data);
    } catch (error) {
      console.error('Error al obtener la venta:', error);
      alert('No se pudo cargar la información de la venta.');
    }
  };


  const fetchProducto = async () => {
    try {
      const response = await Config.getProductoAll();
      setProducto(response.data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  const handleVentaChange = (e) => {
    const { name, value } = e.target;
    setVenta({ ...venta, [name]: value });
  };

  const handleVentaSubmit = async (e) => {
    e.preventDefault();
    
        
        try {
        
            const dataToUpdate = { ...venta };
            delete dataToUpdate.producto;
            
    
            console.log('Datos enviados al backend:', dataToUpdate);
    
            await Config.updateVenta(id, dataToUpdate); 
            alert('Venta actualizada exitosamente');
            navigate('/admin/venta'); 
        } catch (error) {
            console.error('Error al actualizar la venta:', error);
    
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
      <h2 className="mt-4">Editar Venta</h2>
      <form onSubmit={handleVentaSubmit}>
        <div className="mb-3">
          <label htmlFor="codVenta" className="form-label">Código de Venta</label>
          <input
            type="text"
            className="form-control"
            id="codVenta"
            name="codVenta"
            value={venta.codVenta}
            onChange={handleVentaChange}
            required
            maxLength={10}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">Fecha</label>
          <input
            type="datetime-local"
            className="form-control"
            id="fecha"
            name="fecha"
            value={venta.fecha}
            onChange={handleVentaChange}
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
            value={venta.cantidad}
            onChange={handleVentaChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="PrecioV" className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            id="PrecioV"
            name="PrecioV"
            value={venta.PrecioV}
            onChange={handleVentaChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <textarea
            className="form-control"
            id="descripcion"
            name="descripcion"
            value={venta.descripcion}
            onChange={handleVentaChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="producto_id" className="form-label">Producto</label>
          <select
            className="form-select"
            id="producto_id"
            name="producto_id"
            value={venta.producto_id}
            onChange={handleVentaChange}
            required
          >
            <option value="">Seleccione un Producto</option>
            {producto.map((producto) => (
              <option key={producto.id} value={producto.id}>
                {producto.nombrePD}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Actualizar Venta</button>
      </form>
    </div>
  );
};

export default VentaUpdate;
