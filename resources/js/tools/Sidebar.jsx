import React, { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Importar el contexto de autenticación
import "./Sidebar.css";

const Sidebar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [openMenus, setOpenMenus] = useState({
    productos: false,
    estantes: false,
    marcas: false,
    laboratorios: false,
    tiposProducto: false,
    proveedores: false,
    ventas: false,
    compras: false,
  });

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = (menu) => {
    setOpenMenus((prevState) => {
      const newState = { ...prevState, [menu]: !prevState[menu] };
      return newState;
    });
  };

  // Función de logout
  const handleLogout = () => {
    const confirmLogout = window.confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (confirmLogout) {
      logout(); // Llama a la función de logout
      navigate("/"); // Redirige a la página principal
    }
  };

  if (!isAuthenticated) {
    return null; // No renderiza la Sidebar si no está autenticado
  }

  return (
    <div className="sidebar">
     
      <div className="sidebar-content">
        <ul>
          {location.pathname !== '/' && (
            <li>
              <Link to="/admin" className="sidebar-button">
                Home
              </Link>
            </li>
          )}

          
          <li>
            <button onClick={() => toggleMenu("productos")} className="sidebar-button">
              Productos
            </button>
            {openMenus.productos && (
              <ul>
                <li><Link to="/admin/producto/crear">Crear Producto</Link></li>
                <li><Link to="/admin/producto">Listar Productos</Link></li>
              </ul>
            )}
          </li>


          <li>
            <button onClick={() => toggleMenu("estantes")} className="sidebar-button">
              Estantes
            </button>
            {openMenus.estantes && (
              <ul>
                <li><Link to="/admin/estante/crear">Crear Estante</Link></li>
                <li><Link to="/admin/estante">Listar Estantes</Link></li>
              </ul>
            )}
          </li>


          <li>
            <button onClick={() => toggleMenu("marcas")} className="sidebar-button">
              Marcas
            </button>
            {openMenus.marcas && (
              <ul>
                <li><Link to="/admin/marca/crear">Crear Marca</Link></li>
                <li><Link to="/admin/marca">Listar Marcas</Link></li>
              </ul>
            )}
          </li>

 
          <li>
            <button onClick={() => toggleMenu("laboratorios")} className="sidebar-button">
              Laboratorios
            </button>
            {openMenus.laboratorios && (
              <ul>
                <li><Link to="/admin/laboratorio/crear">Crear Laboratorio</Link></li>
                <li><Link to="/admin/laboratorio">Listar Laboratorios</Link></li>
              </ul>
            )}
          </li>

 
          <li>
            <button onClick={() => toggleMenu("tiposProducto")} className="sidebar-button">
              Tipos de Producto
            </button>
            {openMenus.tiposProducto && (
              <ul>
                <li><Link to="/admin/tipo/crear">Crear Tipo de Producto</Link></li>
                <li><Link to="/admin/tipo">Listar Tipos de Producto</Link></li>
              </ul>
            )}
          </li>


          <li>
            <button onClick={() => toggleMenu("proveedores")} className="sidebar-button">
              Proveedores
            </button>
            {openMenus.proveedores && (
              <ul>
                <li><Link to="/admin/proveedor/crear">Crear Proveedor</Link></li>
                <li><Link to="/admin/proveedor">Listar Proveedores</Link></li>
              </ul>
            )}
          </li>

          <li>
            <button onClick={() => toggleMenu("ventas")} className="sidebar-button">
              Ventas
            </button>
            {openMenus.ventas && (
              <ul>
                <li><Link to="/admin/venta/crear">Registrar Venta</Link></li>
                <li><Link to="/admin/venta">Listar Ventas</Link></li>
              </ul>
            )}
          </li>


          <li>
            <button onClick={() => toggleMenu("compras")} className="sidebar-button">
              Compras
            </button>
            {openMenus.compras && (
              <ul>
                <li><Link to="/admin/compra/crear">Registrar Compra</Link></li>
                <li><Link to="/admin/compra">Listar Compras</Link></li>
              </ul>
            )}
          </li>


          <li>
            <button onClick={handleLogout} className="sidebar-button logout-btn">
              Logout
            </button>
          </li>
        </ul>

       
      </div>
    </div>
  );
};

export default Sidebar;
