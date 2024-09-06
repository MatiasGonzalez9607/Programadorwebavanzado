const Registro = () => (
  <div className="form-container">
  <h1 className="page-title">Registro</h1>
  <form>
    <div className="form-group">
      <label htmlFor="username">Nombre de Usuario</label>
      <input type="text" id="username" name="username" required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div className="form-group">
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" name="password" required />
    </div>
    <button type="submit" className="button">Registrarse</button>
  </form>
</div>
  );
  
  export default Registro;
  