import "./estilo.css";
import { Container, Row, Col, Form, Button, Accordion, Card } from 'react-bootstrap';
import React from 'react';
import Header from "./cabecera";
import BarraHerramientas from "./barra";
import Pizarra from "./pizarra";

class Page extends React.Component {

    render() {

        return (

            <Container fluid>
                <Header></Header>

                <Row>
                    <Col md={3}>
                        <BarraHerramientas></BarraHerramientas>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col>
                                <Accordion className="acordionGrupos">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            Agregar una calificacion
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className="contenedroFormNotas">
                                                <Row className="acordionCrearGrupo" >
                                                    <Col md={6} >
                                                        <Row>
                                                            <Col>
                                                                <Form.Group>
                                                                    <Form.Control id="inputAgregarCalificacion" className="input" placeholder="Calificacion del alumno" />
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Button className="botonesTablaNotas">Agregar calificacion</Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Pizarra titulo="El nombre del estudiante" contenido="Aqui un ciclo con las notas">

                                </Pizarra>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Page;