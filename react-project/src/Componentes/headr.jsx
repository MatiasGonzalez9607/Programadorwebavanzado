import React from 'react';
import { Link } from 'react-router-dom';

function Headr() {
  return (
    <header>
      <h1>Tienda de la Tierra Media</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/registro">Registro</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Headr;
