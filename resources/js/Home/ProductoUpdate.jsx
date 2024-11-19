import React, { useState, useEffect } from 'react';
import Config from '../Config';
import { useNavigate, useParams } from 'react-router-dom';

const ProductoUpdate = () => {
  const { id } = useParams();  
  const navigate = useNavigate();


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
    fetchProducto();
  }, [id]);

  const fetchData = async () => {
    try {
      const laboratorioResponse = await Config.getLaboratorio();
      const estanteResponse = await Config.getEstante();
      const tipoResponse = await Config.getTipo();

      setLaboratorio(laboratorioResponse.data);
      setEstante(estanteResponse.data);
      setTipo(tipoResponse.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const fetchProducto = async () => {
    try {
      const response = await Config.getProductoById(id);
      console.log('Producto response:', response.data); 
      setProducto(response.data);
    } catch (error) {
      console.error('Error fetching producto:', error);  
      if (error.response) {
        console.error('Error del servidor:', error.response.data);
        alert(`Error del servidor: ${error.response.data.message || 'Ocurrió un error inesperado.'}`);
      } else if (error.request) {
        console.error('Error en la solicitud:', error.request);
        alert('No se recibió respuesta del servidor. Verifica tu conexión.');
      } else {
        console.error('Error inesperado:', error.message);
        alert(`Error inesperado: ${error.message}`);
      }
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Config.updateProducto(id, producto);
      alert('Producto actualizado exitosamente');
      navigate('/admin/producto'); 
    } catch (error) {
      if (error.response) {
        console.error('Error del servidor:', error.response.data);
        alert(`Error del servidor: ${error.response.data.message || 'Ocurrió un error inesperado.'}`);
      } else if (error.request) {
        console.error('Error en la solicitud:', error.request);
        alert('No se recibió respuesta del servidor. Verifica tu conexión.');
      } else {
        console.error('Error inesperado:', error.message);
        alert(`Error inesperado: ${error.message}`);
      }
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Editar Producto</h2>
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
            disabled
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nombrePD" className="form-label">Nombre del Producto</label>
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
          <label htmlFor="descripcionPD" className="form-label">Descripción</label>
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
            {estante.map((e) => (
              <option key={e.id} value={e.id}>
                {e.codigoE} - {e.descripcionE}
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
            {laboratorio.map((lab) => (
              <option key={lab.id} value={lab.id}>
                {lab.nombreLab}
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
            {tipo.map((t) => (
              <option key={t.id} value={t.id}>
                {t.nombreTP}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Actualizar Producto</button>
      </form>
    </div>
  );
};

export default ProductoUpdate;
