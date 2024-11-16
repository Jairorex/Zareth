import React, { useState, useEffect } from 'react';
import Config from '../Config'; 
const VentaCreate = () => {
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
    fetchProducto();
  }, []);

  const fetchProducto = async () => {
    const response = await Config.getProductoAll();
    setProducto(response.data);
  };

  
  const handleVentaChange = (e) => {
    const { name, value } = e.target;
    setVenta({ ...venta, [name]: value });
    if (name === 'codVenta' && value.length <= 4) {
      setVenta({ ...venta, [name]: value });
    } else if (name !== 'codVenta') {
      setVenta({ ...venta, [name]: value });
    }
  };

  
  const handleVentaSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Config.createVenta(venta);
      alert('Venta creada exitosamente');
      setVenta({
        codVenta: '',
        fecha: '',
        cantidad: '',
        PrecioV: '',
        descripcion: '',
        producto_id: ''
      }); 
    } catch (error) {
      console.error(error.response.data);
      alert('Error al crear la venta');
    }
  };

  

  return (
    <div className="container">
      <h2 className="mt-4">Crear Venta</h2>
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
          <label htmlFor="precioV" className="form-label">Precio</label>
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

        <button type="submit" className="btn btn-primary">Crear Venta</button>
      </form>
    </div>
  );
};

export default VentaCreate;
