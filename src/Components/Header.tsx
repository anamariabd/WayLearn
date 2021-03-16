import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import logo from '../img/Group 10.png'

const Header: React.FC= () => {
  return (
    <div className="row">
  <div className="col">
      <div className="row">
          <img id="imglogo1" src={logo} alt = "logo"/>
      </div>
      <div className="row" id="barra1">
          <div className="col-9" >
              <p id="txtLogo">WayLearn</p>
          </div>
          <div className="row" id="botonera1">
              <button type="button" className="btn botonb1">Iniciar sesion</button>
              <button type="button" className="btn botonb1">Registrarse</button>
          </div>
      </div>
  </div>
</div>
  );
}

export default Header;