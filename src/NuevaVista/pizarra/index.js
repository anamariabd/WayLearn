
import { Row, Col} from 'react-bootstrap';

import './estilo.css';

const Component = (props) => {
    return (
        <Row>
            <Col>
                <Row className="tituloNotas">
                    <Col>
                    <h4><strong>{props.titulo}</strong></h4>
                    </Col>

                </Row>
                <Row className="notas">
                    <Col>
                        <h5><strong>{props.contenido}</strong></h5>
                    </Col>

                </Row>
            </Col>
        </Row>
    );

}

export default Component;
