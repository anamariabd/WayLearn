import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Courses.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Components/Header3';
import Card from '../Components/cardSubject';
import NoteBoard from '../Components/NoteBoard';
import Toolbar from '../Components/Toolbar';

const Cursos : React.FC= () => {
  return (
    <Container fluid>
        <Header/>
        <Row>
          <Col md="3">
            <Toolbar/>
          </Col>
          <Col md="6">
            <Row>
              <h1 className="tituloM">
                Mis Materias
              </h1>
            </Row>
            <Row>
                <Card titulo="Sociales" link="/sociales"/>
                <Card titulo="Artistica" link="/artistica"/>
                <Card titulo="Español" link="/español"/>
                <Card titulo="Matematicas" link="/matematicas"/>
                <Card titulo="Etica" link="/etica"/>
                <Card titulo="ingles" link="/ingles"/>
                <Card titulo="Naturales" link="/naturales"/>
                <Card titulo="Informatica" link="/informatica"/>
            </Row>
          </Col>
          <Col md="3">
            <NoteBoard/>
          </Col>
        </Row>
    </Container>
    
  );
}

export default Cursos;