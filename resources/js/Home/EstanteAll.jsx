import React, { useEffect, useState } from 'react';
import Config from '../Config';

const EstanteAll = () => {
  const [estante, setEstante] = useState();

  useEffect(() => {
    getEstante();
  }, []);

  const getEstante = async () => {
    const response = await Config.getEstante();
    setEstante(response.data);
  };

  const handleEdit = (id) => {
    window.location.href = `estante/editar/${id}`;
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el estante con ID: ${id}?`);
    if (confirmDelete) {
      try {
        await Config.deleteEstante(id); 
        alert(`estante con ID: ${id} eliminado correctamente.`);
        setEstante(estante.filter((estante) => estante.id !== id));
      } catch (error) {
        console.error('Error al eliminar el estante:', error);
        alert('No se pudo eliminar el estante.');
      }
    }
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
          <h3 className="card-title text-center mb-4">Listado de Estantes</h3>
            <table className="table table-striped table-hover table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Id</th>
                  <th>Codigo</th>
                  <th>Descripcion</th>                  
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {!estante ? (
                  <tr> <td colSpan="8" className="text-center">Cargando...</td>
                  </tr>
                ) : (
                  estante.map((estante) => (
                    <tr key={estante.id}>
                      <td>{estante.id}</td>
                      <td>{estante.codigoE}</td>
                      <td>{estante.descripcionE}</td>
                     
                      <td>
                        <button
                          className="btn btn-primary btn-sm  me-2"
                          onClick={() => handleEdit(estante.id)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(estante.id)}
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

export default EstanteAll;