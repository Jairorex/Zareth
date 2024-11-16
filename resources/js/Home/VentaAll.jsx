import React, { useEffect, useState } from 'react';
import Config from '../Config';

const VentaAll = () => {
  const [venta, setVenta] = useState();

  useEffect(() => {
    getVenta();
  }, []);

  const getVenta = async () => {
    const response = await Config.getVenta();
    setVenta(response.data);
  };

  const handleEdit = (id) => {
    console.log(`Editar Venta con ID: ${id}`);
    
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar Venta con ID: ${id}?`);
    if (confirmDelete) {
      console.log(`Eliminar Venta con ID: ${id}`);
     
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
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {!venta ? (
                  <tr>
                    <td colSpan="8" className="text-center">Cargando...</td>
                  </tr>
                ) : (
                  venta.map((venta) => (
                    <tr key={venta.id}>
                      <td>{venta.id}</td>
                      <td>{venta.codVenta}</td>
                      <td>{venta.fecha}</td>
                      <td>{venta.cantidad}</td>
                      <td>{venta.PrecioV}</td>
                      <td>{venta.descripcion}</td>
                      <td>{venta.producto_id}</td>
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

export default VentaAll;
