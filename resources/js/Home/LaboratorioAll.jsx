import React, { useEffect, useState } from 'react';
import Config from '../Config';

const LaboratorioAll = () => {
  const [laboratorio, setLaboratorio] = useState();

  useEffect(() => {
    getLaboratorio();
  }, []);

  const getLaboratorio = async () => {
    const response = await Config.getLaboratorio();
    setLaboratorio(response.data);
  };

  const handleEdit = (id) => {
    window.location.href = `laboratorio/editar/${id}`;
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el Laboratorio con ID: ${id}?`);
    if (confirmDelete) {
      try {
        await Config.deleteLaboratorio(id); 
        alert(`Laboratorio con ID: ${id} eliminado correctamente.`);
        setLaboratorio(laboratorio.filter((lab) => lab.id !== id));
      } catch (error) {
        console.error('Error al eliminar el Laboratorio:', error);
        alert('No se pudo eliminar el Laboratorio.');
      }
    }
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
          <h3 className="card-title text-center mb-4">Listado de Laboratorios</h3>
            <table className="table table-striped table-hover table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Id</th>
                  <th>Codigo</th>
                  <th>Nombre</th>   
                  <th>Direccion</th>
                  <th>Telefono</th>                  
                  <th>Marca_id</th>
                  <th>Acciones</th>

                </tr>
              </thead>
              <tbody>
                {!laboratorio ? (
                  <tr>       <td colSpan="8" className="text-center">Cargando...</td>
                  </tr>
                ) : (
                  laboratorio.map((laboratorio) => (
                    <tr key={laboratorio.id}>
                      <td>{laboratorio.id}</td>
                      <td>{laboratorio.codLab}</td>
                      <td>{laboratorio.nombreLab}</td>
                      <td>{laboratorio.direcionLab}</td>
                      <td>{laboratorio.telefonoLab}</td>
                      <td>{laboratorio.marca_id}</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm  me-2"
                          onClick={() => handleEdit(laboratorio.id)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(laboratorio.id)}
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

export default LaboratorioAll;