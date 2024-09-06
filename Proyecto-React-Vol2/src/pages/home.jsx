import { Link } from 'react-router-dom';
import './../App.css'

const Home = () => {
  return (
    <div className="container-home">
      <h1>Bienvenido a La llave de Durin</h1>
      <p>Explora nuestra colección de objetos legendarios de la Tierra Media.</p>
      <Link to="/productos">
      <button>Ver Productos</button>
      </Link>
    </div>
  );
};




export default Home;
