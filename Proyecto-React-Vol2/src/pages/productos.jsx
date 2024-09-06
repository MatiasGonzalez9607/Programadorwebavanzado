import { Link } from 'react-router-dom';
import productos from '../Data/products'; 
import './../App.css'; 

const Productos = () => {
  return (
    <div className="container">
      <h2>Lista de Productos</h2>
      <div className="product-list">
        {productos.map((producto) => (
          <div key={producto.id} className="product-card">
            <h2>{producto.nombre}</h2>
            <p>Precio: ${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <Link to={`/producto/${producto.id}`}>
              <button>Ver Detalle</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
