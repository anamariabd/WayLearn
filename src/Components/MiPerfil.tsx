import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../index.css';
import {Row, Col } from 'react-bootstrap';

const MiPerfil= () => {
  return (
    <Col>
    <Row id="bloque2">
       <h1 className="subtitle"> <strong> Mi perfil </strong></h1>
      <Row className="formulario">
        <Col>
          <Row>
            hola
          </Row>
          <Row>
            hola
          </Row>
        </Col>
      </Row>
    </Row>
    </Col>
  );
}

export default MiPerfil;