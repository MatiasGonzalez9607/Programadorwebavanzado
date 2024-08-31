import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Paginas/home';
import Listaproducto from './Paginas/lista-producto';
import Detalleproducto from './Paginas/detalle-producto';
import Registro from './Paginas/registro';
import Login from './Paginas/login';
import Header from './Componentes/headr'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Listaproducto />} />
        <Route path="/productos/:id" element={<Detalleproducto />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;




