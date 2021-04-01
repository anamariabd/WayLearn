import React from 'react';
import 'bootstrap-material-design'
import 'jquery'
import {  Col, Row } from 'react-bootstrap';
import logo from '../img/Rectangle 5.png'

const BotonLeccion: React.FC<{titulo:string;link:string}> = ({titulo,link}) => {
  return (
    <Row>
        <Col md="1">
            <img src={logo} alt="logo"/>
        </Col>
        <Col>
            <a type="button" className="btn botonLeccion" href={link}>{titulo}</a>
        </Col>
    </Row>
      
        
  );
}

export default BotonLeccion;