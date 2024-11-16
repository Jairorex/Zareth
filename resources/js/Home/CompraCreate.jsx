import React, { useState, useEffect } from 'react';
import Config from '../Config'; // Asegúrate de que tienes Config configurado

const CompraCreate = () => {
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

  // Obtener productos y proveedores
  useEffect(() => {
    fetchProducto();
    fetchProveedor();
  }, []);

  const fetchProducto = async () => {
    const response = await Config.getProductoAll();
    setProducto(response.data);
  };

  const fetchProveedor = async () => {
    const response = await Config.getProveedor();
    setProveedor(response.data);
  };

 
  const handleCompraChange = (e) => {
    const { name, value } = e.target;
    setCompra({ ...compra, [name]: value });
    if (name === 'codCompra' && value.length <= 4) {
      setCompra({ ...compra, [name]: value });
    } else if (name !== 'codCompra') {
      setCompra({ ...compra, [name]: value });
    }
  };


  const handleCompraSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Config.createCompra(compra);
      alert('Compra creada exitosamente');
      setCompra({
        codCompra: '',
        fecha: '',
        cantidad: '',
        PrecioC: '',
        descripcion: '',
        producto_id: '',
        proveedores_id: ''
      });
    } catch (error) {
      alert('Error al crear la compra');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Crear Compra</h2>
      <form onSubmit={handleCompraSubmit}>
        <div className="mb-3">
          <label htmlFor="codCompra" className="form-label">Código de Compra</label>
          <input
            type="text"
            className="form-control"
            id="codCompra"
            name="codCompra"
            value={compra.codCompra}
            onChange={handleCompraChange}
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
            value={compra.fecha}
            onChange={handleCompraChange}
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
            onChange={handleCompraChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="precioC" className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            id="PrecioC"
            name="PrecioC"
            value={compra.PrecioC}
            onChange={handleCompraChange}
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
            onChange={handleCompraChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="producto_id" className="form-label">Producto</label>
          <select
            className="form-select"
            id="producto_id"
            name="producto_id"
            value={compra.producto_id}
            onChange={handleCompraChange}
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

        <div className="mb-3">
          <label htmlFor="proveedores_id" className="form-label">Proveedor</label>
          <select
            className="form-select"
            id="proveedores_id"
            name="proveedores_id"
            value={compra.proveedores_id}
            onChange={handleCompraChange}
            required
          >
            <option value="">Seleccione un Proveedor</option>
            {proveedor.map((proveedor) => (
              <option key={proveedor.id} value={proveedor.id}>
                {proveedor.nombre}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Crear Compra</button>
      </form>
    </div>
  );
};

export default CompraCreate;
