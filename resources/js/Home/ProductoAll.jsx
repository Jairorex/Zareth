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

    window.location.href = `producto/editar/${id}`;
   
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el producto con ID: ${id}?`);
    if (confirmDelete) {
      try {
        await Config.deleteProducto(id); 
        alert(`Producto con ID: ${id} eliminado correctamente.`);
        setProducto(producto.filter((prod) => prod.id !== id));
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
        alert('No se pudo eliminar el producto.');
      }
    }
  };
  

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
          <h3 className="card-title text-center mb-4">Listado de Productos</h3>
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
                      <td>{producto.estante_id || "Sin estante"}</td>
                      <td>{producto.tipo_producto_id || "Sin tipo de producto"}</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm  me-2"
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
