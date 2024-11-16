import React, { useEffect, useState } from 'react';
import Config from '../Config';

const ProductoAll = () => {
  const [producto, setProducto] = useState();

  useEffect(() => {
    getProductoAll();
  }, []);

  const getProductoAll = async () => {
    const response = await Config.getProductoAll();
    setProducto(response.data);
  };

  const handleEdit = (id) => {
    console.log(`Editar producto con ID: ${id}`);
    // Aquí puedes redirigir o mostrar un formulario de edición
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el producto con ID: ${id}?`);
    if (confirmDelete) {
      console.log(`Eliminar producto con ID: ${id}`);
      // Aquí puedes hacer la lógica para eliminar el producto
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
                  <th>Nombre del Producto</th>
                  <th>Descripcion del Producto</th>
                  <th>Cantidad</th>
                  <th>Laboratorio</th>
                  <th>Estante</th>
                  <th>Tipo de producto</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {!producto ? (
                  <tr>
                    <td colSpan="8" className="text-center">Cargando...</td>
                  </tr>
                ) : (
                  producto.map((producto) => (
                    <tr key={producto.id}>
                      <td>{producto.id}</td>
                      <td>{producto.codigo}</td>
                      <td>{producto.nombrePD}</td>
                      <td>{producto.descripcionPD}</td>
                      <td>{producto.cantidad}</td>
                      <td>{producto.laboratorio_id || "Sin laboratorio"}</td>
                      <td>{producto.estante_id?.nombre || "Sin estante"}</td>
                      <td>{producto.tipo_producto_id || "Sin tipo de producto"}</td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleEdit(producto.id)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(producto.id)}
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

export default ProductoAll;
