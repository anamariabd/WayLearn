import React from 'react';
import { Col, Row} from 'react-bootstrap';
import logo from '../img/Group 10.png';

const Navbar: React.FC= () => {
  return (
    <Row id="barra2">
        <Col><img id="imglogo2" src={logo} alt = "logo"/>
            <a className="vinculo" href={'x'}>WayLearn</a>
        </Col>
    <Col id="botonera2">
        <Row>
            <Col>
                <a className="vinculo" href={'x'}>Noticias</a>
            </Col>
            <Col>
                <a className="vinculo" href={'x'}>Instrucciones</a>
            </Col> 
            <Col>
                <a className="vinculo" href={'x'}>Sobre nosotros</a>
            </Col>
            <Col>
                <a className="vinculo" href={'x'}>Contactenos</a>
            </Col>
        </Row>
    </Col>
</Row>
  );
}

export default Navbar;