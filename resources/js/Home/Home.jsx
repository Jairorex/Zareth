import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaDollarSign, FaListAlt } from "react-icons/fa"; 

const Home = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mt-5">
      
      <div className="row justify-content-center">
      
        <div className="col-12 text-center mb-4">
          <h2>Hora Local</h2>
          <div className="display-4">{time}</div>
        </div>

    
        <div className="col-12 col-md-4 text-center mb-3">
          <Link to="/admin/venta/crear" className="btn btn-primary btn-lg w-100 mb-2">
            <FaDollarSign className="me-2" /> Registrar Venta
          </Link>
          <Link to="/admin/compra/crear" className="btn btn-success btn-lg w-100 mb-2">
            <FaShoppingCart className="me-2" /> Registrar Compra
          </Link>
          <Link to="/admin/producto" className="btn btn-info btn-lg w-100">
            <FaListAlt className="me-2" /> Listar Productos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
