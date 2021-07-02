import React from 'react';
import 'jquery'
import { Col, Row} from 'react-bootstrap';
import logo from '../img/Group 13.png';
import ProfileMenu from "./ProfileMenu"

const NavbarHome: React.FC = () => {
  return (
    <>
    <Row className="fila" >
      <Col md="2">
        <img src={logo} alt="logo" className="logoBarra3" />
      </Col>
      <Col className="cBarraBusqueda" md="9">
        <input type="text" placeholder="Busqueda..." className="barraBusqueda"/>
        </Col>
        <Col><ProfileMenu /></Col>
      
      </Row>
    </>
  );
}

export default NavbarHome;