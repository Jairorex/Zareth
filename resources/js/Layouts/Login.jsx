import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useAuth } from '../tools/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Acceder al contexto de autenticación
  const { login } = useAuth();

  const handleLogin = () => {
    // Verificación de credenciales
    if (username === 'user1' && password === '1234') {
      // Llamar a la función login del contexto
      login(); // Esto actualizará el estado de autenticación en el contexto
      navigate('/admin'); // Redirigir a /admin
    } else {
      alert('Credenciales incorrectas. Intenta nuevamente.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">Iniciar Sesión</h5>

          {/* Formulario de login con Bootstrap */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Ingrese su nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary w-100" onClick={handleLogin}>
            Entrar
          </button>

        </div>
      </div>
    </div>
  );
};

export default Login;
