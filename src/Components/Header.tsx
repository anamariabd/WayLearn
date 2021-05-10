import React from 'react';
import {Row, Col } from 'react-bootstrap';
import 'bootstrap-material-design'
import logo from '../img/Group 10.png'


const Header: React.FC<{titulo:string}> = ({titulo}) => {
  return (
    <Row>
        <Col>
          <Row>
            <img id="imglogo1" src={logo} alt = "logo"/>
          </Row>
          <Row id="barra1">
            <div className="col-9">
              <p id="txtLogo">{titulo}</p>
            </div>
              <div className="col-3" id="botonera1">
                
                <a type="button" href="/login" className="btn" id="bis">Iniciar sesion</a>
                <a type="button" href="/register" className="btn" id="br">Registrarse</a>
              </div>
          </Row>
        </Col>
    </Row>
  );
}

export default Header;