import React, { useEffect, useState } from 'react';
import Config from '../Config';

const MarcaAll = () => {
  const [marca, setMarca] = useState();

  useEffect(() => {
    getMarca();
  }, []);

  const getMarca = async () => {
    const response = await Config.getMarca();
    setMarca(response.data);
  };

  const handleEdit = (id) => {
    console.log(`Editar marca con ID: ${id}`);

  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar la marca con ID: ${id}?`);
    if (confirmDelete) {
      console.log(`Eliminar marca con ID: ${id}`);
  
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
                  <th>Nombre</th>                  
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {!marca ? (
                  <tr>           <td colSpan="8" className="text-center">Cargando...</td>
                  </tr>
                ) : (
                  marca.map((marca) => (
                    <tr key={marca.id}>
                      <td>{marca.id}</td>
                      <td>{marca.codigoM}</td>
                      <td>{marca.nombreM}</td>
                     
                      <td>
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleEdit(marca.id)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(marca.id)}
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

export default MarcaAll;