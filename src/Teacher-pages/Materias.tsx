import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Row, Col } from 'react-bootstrap';
import Card from '../Components/cardSubject';

const Materias : React.FC= () => {
  return (
    <Col className="container">
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
    
  );
}

export default Materias;