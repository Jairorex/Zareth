import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
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

  const toggleMenu = (key) => {
    setOpenMenus((prev) => {
      const newState = {};
      Object.keys(prev).forEach((menuKey) => {
        newState[menuKey] = menuKey === key ? !prev[menuKey] : false; // Abre solo el seleccionado, cierra los demás
      });
      return newState;
    });
  };
  
 
  const handleLogout = () => {
    if (window.confirm("¿Estás seguro de que deseas cerrar sesión?")) {
      logout();
      navigate("/");
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="d-flex flex-column vh-100 bg-primary text-white p-3 sidebar">
      <div className="text-center mb-4">
        <img
          src="/img/logo.png"
          alt="Logo"
          className="img-fluid mb-2"
          style={{ maxWidth: "200px" }}
        />
        <h5 className="fw-bold">Farmacia Zareth</h5>
      </div>

      <div className="flex-grow-1">
        <ul className="nav flex-column">
          {location.pathname !== "/" && (
            <li className="nav-item mb-2">
              <Link to="/admin" className="btn btn-primary w-100 text-start">
                <i className="bi bi-house-door me-2"></i> Home
              </Link>
            </li>
          )}

          {[
            {
              label: "Productos",
              key: "productos",
              links: [
                { to: "/admin/producto/crear", text: "Crear Producto" },
                { to: "/admin/producto", text: "Listar Productos" },
              ],
            },
            {
              label: "Estantes",
              key: "estantes",
              links: [
                { to: "/admin/estante/crear", text: "Crear Estante" },
                { to: "/admin/estante", text: "Listar Estantes" },
              ],
            },
            {
              label: "Marcas",
              key: "marcas",
              links: [
                { to: "/admin/marca/crear", text: "Crear Marca" },
                { to: "/admin/marca", text: "Listar Marcas" },
              ],
            },
            {
              label: "Laboratorios",
              key: "laboratorios",
              links: [
                { to: "/admin/laboratorio/crear", text: "Crear Laboratorio" },
                { to: "/admin/laboratorio", text: "Listar Laboratorios" },
              ],
            },
            {
              label: "Tipos de Producto",
              key: "tiposProducto",
              links: [
                { to: "/admin/tipo/crear", text: "Crear Tipo de Producto" },
                { to: "/admin/tipo", text: "Listar Tipos de Producto" },
              ],
            },
            {
              label: "Proveedores",
              key: "proveedores",
              links: [
                { to: "/admin/proveedor/crear", text: "Crear Proveedor" },
                { to: "/admin/proveedor", text: "Listar Proveedores" },
              ],
            },
            {
              label: "Ventas",
              key: "ventas",
              links: [
                { to: "/admin/venta/crear", text: "Registrar Venta" },
                { to: "/admin/venta", text: "Listar Ventas" },
              ],
            },
            {
              label: "Compras",
              key: "compras",
              links: [
                { to: "/admin/compra/crear", text: "Registrar Compra" },
                { to: "/admin/compra", text: "Listar Compras" },
              ],
            },
          ].map((menu) => (
            <li className="nav-item mb-2" key={menu.key}>
              <button
                className="btn btn-primary w-100 text-start"
                onClick={() => toggleMenu(menu.key)}
              >
                <i className="bi bi-box me-2"></i> {menu.label}
                <i
                  className={`bi bi-chevron-${
                    openMenus[menu.key] ? "down" : "right"
                  } ms-2 text-white`}
                ></i>
              </button>
              {openMenus[menu.key] && (
                <ul className="nav flex-column ms-3 mt-1">
                  {menu.links.map((link, index) => (
                    <li key={index} className="nav-item">
                      <Link className="nav-link text-white" to={link.to}>
                        <i className="bi bi-arrow-right-short"></i> {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      
    
      </div>
      <div className="mt-auto">
        <button onClick={handleLogout} className="btn btn-danger w-100">
          <i className="bi bi-box-arrow-right me-2"></i> Logout
        </button>
      </div>
    </div>
    );
};

export default Sidebar;