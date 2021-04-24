import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import './Styles/Student.css'
import { Col,Container,Row } from "react-bootstrap";
import { useParams } from "react-router";


const Student:React.FC = () => {
  
  const { id } = useParams<{ id: string }>();
  return (

      <Container fluid>
        <Row>
            <Col className="nombreStudent">
                <h2><strong>Ana Maria Buenahora Diaz</strong></h2>
            </Col>
        </Row>
        <Row className="module">
            <Col md={7}>
                <Row className="tituloNotas">
                    <Col>
                        <h2><strong>Español</strong></h2>
                    </Col>
                </Row>
                <Row className="notas">
                    <Col>
                        <h3><strong>Notas:</strong></h3>

                    </Col>
                    <Col>
                        <h3><strong>10.0</strong></h3>
                    </Col>
                    <Col>
                        <h3><strong>9.5</strong></h3>
                    </Col>
                    <Col>
                        <h3><strong>7.0</strong></h3>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className="module">
            <Col md={7}>
                <Row className="tituloNotas">
                    <Col>
                        <h2><strong>Sociales</strong></h2>
                    </Col>
                </Row>
                <Row className="notas">
                    <Col>
                        <h3><strong>Notas:</strong></h3>
                    </Col>
                    <Col>
                        <h3><strong>8.5</strong></h3>
                    </Col>
                    <Col>
                        <h3><strong>9.5</strong></h3>
                    </Col>
                    <Col>
                        <h3><strong>7.0</strong></h3>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className="module">
            <Col md={7}>
                <Row className="tituloNotas">
                    <Col>
                        <h2><strong>Etica</strong></h2>
                    </Col>
                </Row>
                <Row className="notas">
                    <Col>
                        <h3><strong>Notas:</strong></h3>

                    </Col>
                    <Col>
                        <h3><strong>10.0</strong></h3>
                    </Col>
                    <Col>
                        <h3><strong>9.5</strong></h3>
                    </Col>
                    <Col>
                        <h3><strong>9.0</strong></h3>
                    </Col>
                </Row>
            </Col>
        </Row>
        
      </Container>
   
  );
};

export default Student;