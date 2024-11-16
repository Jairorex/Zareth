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
    console.log(`Editar Laboratorio con ID: ${id}`);
    // Aquí puedes redirigir o mostrar un formulario de edición
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el Laboratorio con ID: ${id}?`);
    if (confirmDelete) {
      console.log(`Eliminar Laboratorio con ID: ${id}`);
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
                          className="btn btn-warning btn-sm me-2"
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