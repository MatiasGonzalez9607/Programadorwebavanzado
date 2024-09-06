import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import './App.css';


function App() { 
  return (
    <Router>
      <Navbar />
      <div className="content"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} /> 
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

