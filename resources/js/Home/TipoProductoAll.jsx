import React, { useEffect, useState } from 'react';
import Config from '../Config';

const TipoProductoAll = () => {
  const [tipo, setTipo] = useState();

  useEffect(() => {
    getTipo();
  }, []);

  const getTipo = async () => {
    const response = await Config.getTipo();
    setTipo(response.data);
  };

  const handleEdit = (id) => {
    window.location.href = `tipo/editar/${id}`;
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el Tipo de Producto con ID: ${id}?`);
    if (confirmDelete) {
      try {
        await Config.deleteTipo(id); 
        alert(`Tipo de Producto con ID: ${id} eliminado correctamente.`);
        setTipo(tipo.filter((tipo) => tipo.id !== id));
      } catch (error) {
        console.error('Error al eliminar el tipo de producto:', error);
        alert('No se pudo eliminar el Tipo de Producto.');
      }
    }
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
          <h3 className="card-title text-center mb-4">Tipos de Productos</h3>
            <table className="table table-striped table-hover table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Descripcion</th>                  
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {!tipo ? (
                  <tr>        <td colSpan="8" className="text-center">Cargando...</td>
                  </tr>
                ) : (
                  tipo.map((tipo) => (
                    <tr key={tipo.id}>
                      <td>{tipo.id}</td>
                      <td>{tipo.nombreTP}</td>
                      <td>{tipo.descripcionTP}</td>
                     
                      <td>
                        <button
                          className="btn btn-primary btn-sm  me-2"
                          onClick={() => handleEdit(tipo.id)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(tipo.id)}
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

export default TipoProductoAll;