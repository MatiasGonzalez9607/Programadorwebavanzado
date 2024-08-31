import React from 'react';
import { Link } from 'react-router-dom';

function Listaproducto() {
  const productos = [
    { id: 1, name: 'Espada de Aragorn', price: 120.00 },
    { id: 2, name: 'Anillo Único', price: 500.00 },
    { id: 3, name: 'Capa Élfica', price: 80.00 }
  ];

  return (
    <div>
      <h2>Listado de Productos</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <Link to={`/productos/${producto.id}`}>
              {producto.name} - ${producto.precio.toFixed(2)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listaproducto;
