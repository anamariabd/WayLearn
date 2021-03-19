import React from 'react';
import 'bootstrap-material-design'
import 'jquery'
import logo from '../img/Group 10.png'
import '../Header.css';

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
              <div className="col-3" id="botonera1">
                <button type="button" className="btn" id="bis">Iniciar sesion</button>
                <button type="button" className="btn" id="br">Registrarse</button>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Header;