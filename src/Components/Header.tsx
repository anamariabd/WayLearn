import React from 'react';
import 'bootstrap-material-design'
import logo from '../img/Group 10.png'


const Header: React.FC<{titulo:string}> = ({titulo}) => {
  return (
    <div className="row">
        <div className="col">
          <div className="row">
            <img id="imglogo1" src={logo} alt = "logo"/>
          </div>
          <div className="row" id="barra1">
            <div className="col-9">
              <p id="txtLogo">{titulo}</p>
            </div>
              <div className="col-3" id="botonera1">
                
                <a type="button" href="/login" className="btn" id="bis">Iniciar sesion</a>
                <a type="button" href="/register" className="btn" id="br">Registrarse</a>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Header;