import React from 'react';
import 'bootstrap-material-design'
import 'jquery'
import { Button, Col, Row} from 'react-bootstrap';
import logo from '../img/avatar.png';
import logob1 from '../img/Rectángulo 31.png';
import logob2 from '../img/Rectángulo 30.png';
import logob3 from '../img/Rectángulo 32.png';

const Toolbar: React.FC = () => {
  return (
    <Col className="barra">
        <Row>
            <Col>
                <img src={logo} alt="logo" id="lToolbar"/>
            </Col>    
        </Row>
        <Row>
            <Col>
                <Button variant="btn bg-transparent" id="p" href="/" className="bToolbar"><img src={logob1} alt="logob1" className="imgb" />Inicio</Button>
            </Col>    
        </Row>
        <Row>
            <Col>
                <Button variant="btn bg-transparent" id="p" href="/courses" className="bToolbar"><img src={logob2} alt="logob2" className="imgb" />Materias</Button>
            </Col>    
        </Row>
        <Row>
            <Col>
                <Button variant="btn bg-transparent" id="p" href="/courses" className="bToolbar"><img src={logob3} alt="logob3" className="imgb" />Noticias</Button>
            </Col>    
        </Row>
    </Col>
  );
}

export default Toolbar;