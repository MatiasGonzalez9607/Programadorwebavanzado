import React from 'react';

function Registro() {
  return (
    <div>
      <h2>Registro</h2>
      <form>
        <label>Email:</label>
        <input type="email" required />
        <br />
        <label>Contraseña:</label>
        <input type="password" required />
        <br />
        <label>Nombre:</label>
        <input type="text" required />
        <br />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Registro;
