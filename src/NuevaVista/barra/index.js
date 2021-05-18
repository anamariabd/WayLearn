import logo from '../../img/avatar.png';
import { Row, Col, Button } from 'react-bootstrap';
import logob1 from '../../img/Rectángulo 31.png';
import logob2 from '../../img/Rectángulo 30.png';
import logob3 from '../../img/Rectángulo 32.png';
import './estilo.css';

const Component = (props) => {
    return (
        <Col className="barra">
            <Row>
                <Col>
                    <img src={logo} alt="logo" id="lToolbar" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="btn bg-transparent" id="p" href="/profesor" className="bToolbar"><img src={logob1} alt="logob1" className="imgb" />Inicio</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="btn bg-transparent" id="p" href="/grupos" className="bToolbar"><img src={logob2} alt="logob2" className="imgb" />Mis Grupos</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="btn bg-transparent" id="p" href="/profesor" className="bToolbar"><img src={logob3} alt="logob3" className="imgb" />Algun boton</Button>
                </Col>
            </Row>
        </Col>
    );

}

export default Component;
