import axios from "axios";

const base_api_url = "http://localhost:8000/api/v1";

export default {
    getProductoAll: (data) => axios.get(`${base_api_url}/admin/producto`, data),
    createProducto: (data) => axios.post(`${base_api_url}/admin/producto`, data),
    deleteProducto: (id) => axios.delete(`${base_api_url}/admin/producto/${id}`),
    getProductoById: (id) => axios.get(`${base_api_url}/admin/producto/${id}`),
    updateProducto: (id, data) => axios.put(`${base_api_url}/admin/producto/${id}`, data),


    getEstante: (data) => axios.get(`${base_api_url}/admin/estante`, data),
    createEstante: (data) => axios.post(`${base_api_url}/admin/estante`, data),
    deleteEstante: (id) => axios.delete(`${base_api_url}/admin/estante/${id}`),
    getEstanteById: (id) => axios.get(`${base_api_url}/admin/estante/${id}`),
    updateEstante: (id, data) => axios.put(`${base_api_url}/admin/estante/${id}`, data),

    getMarca: (data) => axios.get(`${base_api_url}/admin/marca`, data),
    createMarca: (data) => axios.post(`${base_api_url}/admin/marca`, data),
    deleteMarca: (id) => axios.delete(`${base_api_url}/admin/marca/${id}`),
    getMarcaById: (id) => axios.get(`${base_api_url}/admin/marca/${id}`),
    updateMarca: (id, data) => axios.put(`${base_api_url}/admin/marca/${id}`, data),

    getProveedor: (data) => axios.get(`${base_api_url}/admin/proveedor`, data),
    createProveedor: (data) => axios.post(`${base_api_url}/admin/proveedor`, data),
    deleteProveedor: (id) => axios.delete(`${base_api_url}/admin/proveedor/${id}`),
    getProveedorById: (id) => axios.get(`${base_api_url}/admin/proveedor/${id}`),
    updateProveedor: (id, data) => axios.put(`${base_api_url}/admin/proveedor/${id}`, data),

    getTipo: (data) => axios.get(`${base_api_url}/admin/tipo`, data),
    createTipoProducto: (data) => axios.post(`${base_api_url}/admin/tipo`, data),
    deleteTipo: (id) => axios.delete(`${base_api_url}/admin/tipo/${id}`),
    getTipoById: (id) => axios.get(`${base_api_url}/admin/tipo/${id}`),
    updateTipo: (id, data) => axios.put(`${base_api_url}/admin/tipo/${id}`, data),

    getLaboratorio: (data) => axios.get(`${base_api_url}/admin/laboratorio`, data),
    createLaboratorio: (data) => axios.post(`${base_api_url}/admin/laboratorio`, data),
    deleteLaboratorio: (id) => axios.delete(`${base_api_url}/admin/laboratorio/${id}`),
    getLaboratorioById: (id) => axios.get(`${base_api_url}/admin/laboratorio/${id}`),
    updateLaboratorio: (id, data) => axios.put(`${base_api_url}/admin/laboratorio/${id}`, data),

    getVenta: (data) => axios.get(`${base_api_url}/admin/venta`, data),
    createVenta: (data) => axios.post(`${base_api_url}/admin/venta`, data),
    deleteVenta: (id) => axios.delete(`${base_api_url}/admin/venta/${id}`),
    getVentaById: (id) => axios.get(`${base_api_url}/admin/venta/${id}`),
    updateVenta: (id, data) => axios.put(`${base_api_url}/admin/venta/${id}`, data),

    getCompra: (data) => axios.get(`${base_api_url}/admin/compra`, data),
    createCompra: (data) => axios.post(`${base_api_url}/admin/compra`, data),
    deleteCompra: (id) => axios.delete(`${base_api_url}/admin/compra/${id}`),
    getCompraById: (id) => axios.get(`${base_api_url}/admin/compra/${id}`),
    updateCompra: (id, data) => axios.put(`${base_api_url}/admin/compra/${id}`, data),
};
