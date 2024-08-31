import React from 'react';
import { useParams } from 'react-router-dom';

function Detalleproducto() {
  const { id } = useParams();
  const producto = { id, name: 'Espada de Aragorn', price: 120.00, description: 'Espada utilizada por Aragorn.' };

  return (
    <div>
      <h2>{producto.name}</h2>
      <p>Precio: ${producto.precio.toFixed(2)}</p>
      <p>{producto.descripccion}</p>
    </div>
  );
}

export default Detalleproducto;
