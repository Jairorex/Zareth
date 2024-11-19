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
    window.location.href = `marca/editar/${id}`;

  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar la Marca con ID: ${id}?`);
    if (confirmDelete) {
      try {
        await Config.deleteMarca(id); 
        alert(`Marca con ID: ${id} eliminado correctamente.`);
        setMarca(marcaarca.filter((marca) => marca.id !== id));
      } catch (error) {
        console.error('Error al eliminar la Marca:', error);
        alert('No se pudo eliminar la Marca.');
      }
    }
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
          <h3 className="card-title text-center mb-4">Listado de Marcas</h3>
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
                          className="btn btn-primary btn-sm  me-2"
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