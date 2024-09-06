import { Link ,useParams } from 'react-router-dom';
import productos from '../Data/products';
import './../App.css';

const ProductoDetalle = () => {
  const { id } = useParams(); 
  const producto = productos.find((prod) => prod.id === parseInt(id, 10)); 

  if (!producto) {
    return <p>Producto no encontrado.</p>; 
  }

  return (
    <div className="container-detalle">
      <h2 className="titulo-producto">{producto.nombre}</h2>
      <p className="precio-producto">Precio: ${producto.precio}</p>
      <p className="info-producto">Stock: {producto.stock}</p>
      <p className="info-producto">Código: {producto.codigo}</p>
      <p className="info-producto">Descripción: {producto.descripcion}</p>
      
      <Link to="/productos" className="back-button">
        Volver a productos
      </Link>
    </div>
  );
};

export default ProductoDetalle;
