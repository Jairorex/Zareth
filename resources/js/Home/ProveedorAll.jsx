import React, { useEffect, useState } from 'react';
import Config from '../Config';

const ProveedorAll = () => {
  const [proveedor, setProveedor] = useState();

  useEffect(() => {
    getProveedor();
  }, []);

  const getProveedor = async () => {
    const response = await Config.getProveedor();
    setProveedor(response.data);
  };

  const handleEdit = (id) => {
    window.location.href = `proveedor/editar/${id}`;
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el proveedor con ID: ${id}?`);
    if (confirmDelete) {
      try {
        await Config.deleteProveedor(id); 
        alert(`Proveedor con ID: ${id} eliminado correctamente.`);
        setProveedor(proveedor.filter((prov) => prov.id !== id));
      } catch (error) {
        console.error('Error al eliminar el Proveedor:', error);
        alert('No se pudo eliminar el Proveedor.');
      }
    }
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
          <h3 className="card-title text-center mb-4">Listado de Proveedores</h3>
            <table className="table table-striped table-hover table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Id</th>
                  <th>Codigo</th>
                  <th>Nombre</th> 
                  <th>Ruc</th> 
                  <th>Telefono</th>
                  <th>Direccion</th>  
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {!proveedor ? (
                  <tr>     <td colSpan="8" className="text-center">Cargando...</td>
                  </tr>
                ) : (
                  proveedor.map((proveedor) => (
                    <tr key={proveedor.id}>
                      <td>{proveedor.id}</td>
                      <td>{proveedor.codigo}</td>
                      <td>{proveedor.nombre}</td>
                      <td>{proveedor.ruc}</td>
                      <td>{proveedor.telefono}</td>
                      <td>{proveedor.direccion}</td>
                     
                      <td>
                        <button
                          className="btn btn-primary btn-sm  me-2"
                          onClick={() => handleEdit(proveedor.id)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(proveedor.id)}
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

export default ProveedorAll;