import React, { useEffect, useState } from 'react';
import Config from '../Config';

const CompraAll = () => {
  const [compra, setCompra] = useState();

  useEffect(() => {
    getCompra();
  }, []);

  const getCompra = async () => {
    const response = await Config.getCompra();
    setCompra(response.data);
  };

  const handleEdit = (id) => {
    console.log(`Editar Compra con ID: ${id}`);
    
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar Compra con ID: ${id}?`);
    if (confirmDelete) {
      console.log(`Eliminar Compra con ID: ${id}`);
     
    }
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <table className="table table-striped table-hover table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Id</th>
                  <th>Codigo</th>
                  <th>Fecha</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Descripcion</th>
                  <th>Producto_id</th>
                  <th>Proveedores_id</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {!compra ? (
                  <tr>
                    <td colSpan="8" className="text-center">Cargando...</td>
                  </tr>
                ) : (
                  compra.map((compra) => (
                    <tr key={compra.id}>
                      <td>{compra.id}</td>
                      <td>{compra.codCompra}</td>
                      <td>{compra.fecha}</td>
                      <td>{compra.cantidad}</td>
                      <td>{compra.PrecioC}</td>
                      <td>{compra.descripcion}</td>
                      <td>{compra.producto_id}</td>
                      <td>{compra.proveedores_id}</td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleEdit(venta.id)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(venta.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompraAll;
