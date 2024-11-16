import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../tools/Sidebar';

const Layout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar: fijo en la izquierda */}
      <div style={{ width: '250px', flexShrink: 0 }}>
        <Sidebar />
      </div>

      {/* Contenido principal: dinámico */}
      <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
