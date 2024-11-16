import React, { useState, useEffect } from 'react';
import Config from '../Config';  

const ProductoCreate = () => {
  const [producto, setProducto] = useState({
    codigo: '',
    nombrePD: '',
    descripcionPD: '',
    cantidad: '',
    laboratorio_id: '',
    estante_id: '',
    tipo_producto_id: ''
  });
  
  const [laboratorio, setLaboratorio] = useState([]);
  const [estante, setEstante] = useState([]);
  const [tipo, setTipo] = useState([]);

  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const laboratorioResponse = await Config.getLaboratorio();
      const estanteResponse = await Config.getEstante();
      const tipoResponse = await Config.getTipo();

      setLaboratorio(laboratorioResponse.data);
      setEstante(estanteResponse.data);
      setTipo(tipoResponse.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
    if (name === 'codigo' && value.length <= 4) {
      setProducto({ ...producto, [name]: value });
    } else if (name !== 'codigo') {
      setProducto({ ...producto, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Config.createProducto(producto);
      alert('Producto creado exitosamente');
    } catch (error) {
      alert('Error al crear el producto');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Crear Producto</h2>
      <form onSubmit={handleSubmit}>
       
        <div className="mb-3">
          <label htmlFor="codigo" className="form-label">Código</label>
          <input
            type="text"
            className="form-control"
            id="codigo"
            name="codigo"
            value={producto.codigo}
            onChange={handleChange}
            required
            maxLength={4}
          />
        </div>

       
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre del Producto</label>
          <input
            type="text"
            className="form-control"
            id="nombrePD"
            name="nombrePD"
            value={producto.nombrePD}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <textarea
            className="form-control"
            id="descripcionPD"
            name="descripcionPD"
            value={producto.descripcionPD}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>

       
        <div className="mb-3">
          <label htmlFor="cantidad" className="form-label">Cantidad</label>
          <input
            type="number"
            className="form-control"
            id="cantidad"
            name="cantidad"
            value={producto.cantidad}
            onChange={handleChange}
            required
          />
        </div>

    
        <div className="mb-3">
          <label htmlFor="estante_id" className="form-label">Estante</label>
          <select
            className="form-select"
            id="estante_id"
            name="estante_id"
            value={producto.estante_id}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar Estante</option>
            {estante.map((estante) => (
              <option key={estante.id} value={estante.id}>
                {estante.codigoE} - {estante.descripcionE}
              </option>
            ))}
          </select>
        </div>

    
        <div className="mb-3">
          <label htmlFor="laboratorio_id" className="form-label">Laboratorio</label>
          <select
            className="form-select"
            id="laboratorio_id"
            name="laboratorio_id"
            value={producto.laboratorio_id}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar Laboratorio</option>
            {laboratorio.map((laboratorio) => (
              <option key={laboratorio.id} value={laboratorio.id}>
                {laboratorio.nombreLab}
              </option>
            ))}
          </select>
        </div>

       

       
        <div className="mb-3">
          <label htmlFor="tipo_producto_id" className="form-label">Tipo de Producto</label>
          <select
            className="form-select"
            id="tipo_producto_id"
            name="tipo_producto_id"
            value={producto.tipo_producto_id}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar Tipo</option>
            {tipo.map((tipo) => (
              <option key={tipo.id} value={tipo.id}>
                {tipo.nombreTP}
              </option>
            ))}
          </select>
        </div>

      
        <button type="submit" className="btn btn-primary">Crear Producto</button>
      </form>
    </div>
  );
};

export default ProductoCreate;
