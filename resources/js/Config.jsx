import axios from "axios";

const base_api_url = "http://localhost:8000/api/v1";

export default {
    getProductoAll: (data) => axios.get(`${base_api_url}/admin/producto`, data),
    createProducto: (data) => axios.post(`${base_api_url}/admin/producto`, data),

    getEstante: (data) => axios.get(`${base_api_url}/admin/estante`, data),
    createEstante: (data) => axios.post(`${base_api_url}/admin/estante`, data),

    getMarca: (data) => axios.get(`${base_api_url}/admin/marca`, data),
    createMarca: (data) => axios.post(`${base_api_url}/admin/marca`, data),

    getProveedor: (data) => axios.get(`${base_api_url}/admin/proveedor`, data),
    createProveedor: (data) => axios.post(`${base_api_url}/admin/proveedor`, data),

    getTipo: (data) => axios.get(`${base_api_url}/admin/tipo`, data),
    createTipoProducto: (data) => axios.post(`${base_api_url}/admin/tipo`, data),

    getLaboratorio: (data) => axios.get(`${base_api_url}/admin/laboratorio`, data),
    createLaboratorio: (data) => axios.post(`${base_api_url}/admin/laboratorio`, data),

    getVenta: (data) => axios.get(`${base_api_url}/admin/venta`, data),
    createVenta: (data) => axios.post(`${base_api_url}/admin/venta`, data),

    getCompra: (data) => axios.get(`${base_api_url}/admin/compra`, data),
    createCompra: (data) => axios.post(`${base_api_url}/admin/compra`, data),
};
