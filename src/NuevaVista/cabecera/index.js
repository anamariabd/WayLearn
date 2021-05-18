import logo from '../../img/Group 10.png'
import { Row, Col } from 'react-bootstrap';
import './estilo.css';

const Component = (props) => {
    return (
        <Row className="filaHeader3" >
            <Col md="2">
                <img src={logo} alt="logo" className="logoBarra3" />
            </Col>
            <Col className="cBarraBusqueda" md="10">
                <input type="text" placeholder="Busqueda..." className="barraBusqueda" />
            </Col>
        </Row>
    );

}

export default Component;
