import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './Home/Home';

import ProveedorUpdate from './Home/ProveedorUpdate';
import ProveedoreAll from './Home/ProveedorAll';
import ProveedoreCreate from './Home/ProveedorCreate';

import EstanteUpdate from './Home/EstanteUpdate';
import EstanteAll from './Home/EstanteAll';
import EstanteCreate from './Home/EstanteCreate';

import TipoProductoUpdate from './Home/TipoProductoUpdate';
import TipoProductoAll from './Home/TipoProductoAll';
import TipoProductoCreate from './Home/TipoProductoCreate';

import LaboratorioUpdate from './Home/LaboratorioUpdate';
import LaboratorioAll from './Home/LaboratorioAll';
import LaboratorioCreate from './Home/LaboratorioCreate';

import MarcaUpdate from './Home/MarcaUpdate';
import MarcaAll from './Home/MarcaAll';
import MarcaCreate from './Home/MarcaCreate';

import VentaCreate from './Home/VentaCreate';
import VentaAll from './Home/VentaAll';
import VentaUpdate from './Home/VentaUpdate'

import CompraCreate from './Home/CompraCreate';
import CompraUpdate from './Home/CompraUpdate';
import CompraAll from './Home/CompraAll';

import ProductoCreate from './Home/ProductoCreate';
import ProductoAll from './Home/ProductoAll';
import ProductoUpdate from './Home/ProductoUpdate';

import Login from './Layouts/Login';
import Layout from './Layouts/Layout';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './tools/AuthContext'; 







const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Redirección inicial */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Ruta de Login */}
          <Route path="/login" element={<Login />} />

         
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Home />} />

            
            <Route path="producto/crear" element={<ProductoCreate />} />
            <Route path="producto" element={<ProductoAll />} />
            <Route path='producto/editar/:id' element={<ProductoUpdate/>}/>

            
            <Route path="estante/crear" element={<EstanteCreate />} />
            <Route path="estante" element={<EstanteAll />} />
            <Route path='estante/editar/:id' element={<EstanteUpdate/>}/>
            
            
            <Route path="marca/crear" element={<MarcaCreate />} />
            <Route path="marca" element={<MarcaAll />} />
            <Route path='marca/editar/:id' element={<MarcaUpdate/>}/>
            
            
            <Route path="laboratorio/crear" element={<LaboratorioCreate />} />
            <Route path="laboratorio" element={<LaboratorioAll />} />
            <Route path='laboratorio/editar/:id' element={<LaboratorioUpdate/>}/>
            

            <Route path="tipo/crear" element={<TipoProductoCreate />} />
            <Route path="tipo" element={<TipoProductoAll />} />
            <Route path='tipo/editar/:id' element={<TipoProductoUpdate/>}/>
            
            
            <Route path="proveedor/crear" element={<ProveedoreCreate />} />
            <Route path="proveedor" element={<ProveedoreAll />} />
            <Route path='proveedor/editar/:id' element={<ProveedorUpdate/>}/>
            
            
            <Route path="venta/crear" element={<VentaCreate />} />
            <Route path="venta" element={<VentaAll />} />
            <Route path='venta/editar/:id' element={<VentaUpdate/>}/>

            
            <Route path="compra/crear" element={<CompraCreate />} />
            <Route path="compra" element={<CompraAll />} />
            <Route path='compra/editar/:id' element={<CompraUpdate/>}/>
          
          
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

if (document.getElementById('root')) {
  const Index = ReactDOM.createRoot(document.getElementById('root'));
  Index.render(<App />);
}
