import React from 'react';
import 'bootstrap-material-design'
import 'jquery'
import { Col, Row} from 'react-bootstrap';
import logo from '../img/Group 13.png';


const Header3: React.FC = () => {
  return (
    <Row className="fila" >
      <Col md="2">
        <img src={logo} alt="logo" className="logoBarra3" />
      </Col>
      <Col className="cBarraBusqueda" md="10">
        <input type="text" placeholder="Busqueda..." className="barraBusqueda"/>
      </Col>
    </Row>
  );
}

export default Header3;