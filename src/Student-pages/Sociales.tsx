import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Courses.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Components/Header3';
import Toolbar from '../Components/Toolbar';
import BLeccion from '../Components/BotonLeccion';
import Task from '../Components/Task';

const Sociales : React.FC= () => {
  return (
    <Container fluid>
        <Header/>
        <Row>
            <Col md="3">
                <Toolbar/>
            </Col>
            <Col md="5">
                <Row>
                    <h1 className="tituloM">
                        Mis Lecciones
                    </h1>
                </Row>
                <Row className="tituloNotas">
                    <Col>
                        <h6><strong>Lecciones</strong></h6>
                    </Col>
                </Row>
                <Row className="notas">
                    <Col>
                        <BLeccion link="/" titulo="Leccion 1"></BLeccion>
                        <BLeccion link="/" titulo="Leccion 2"></BLeccion>
                        <BLeccion link="/" titulo="Leccion 3"></BLeccion>
                        <BLeccion link="/" titulo="Leccion 4"></BLeccion>
                        <BLeccion link="/" titulo="Leccion 5"></BLeccion>
                    </Col>
                </Row>
            </Col>
            <Col md="4">
                <Row className="tituloNotas">
                    <Col>
                        <h6><strong>Tareas</strong></h6>
                    </Col>
                </Row>
                <Row className="notas">
                    <Col>
                        <Task titulo="Tarea 1" descripcion="Realizar la tarea 1"></Task>
                        <Task titulo="Tarea 1" descripcion="Realizar la tarea 1"></Task>
                        <Task titulo="Tarea 1" descripcion="Realizar la tarea 1"></Task>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  );
}

export default Sociales;