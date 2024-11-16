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
    console.log(`Editar estante con ID: ${id}`);
    // Aquí puedes redirigir o mostrar un formulario de edición
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el estante con ID: ${id}?`);
    if (confirmDelete) {
      console.log(`Eliminar estante con ID: ${id}`);
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
                          className="btn btn-warning btn-sm me-2"
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