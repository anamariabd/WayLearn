import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Row, Col } from 'react-bootstrap';
import Card from '../Components/cardSubject';

interface signature{

  title: string,
  path: string
}

const ListSignatures: signature[] = [
  {  title: "Sociales",
    path: "sociales"
  },
  {
   title: "Artistica",
   path: "artistica"
  },
  {
    title: "Español",
    path: "español"
  },
  {
    title: "Matematicas",
    path: "matematicas"
  },
  {
    title: "Etica",
    path: "etica"
  },
  {
    title: "ingles",
    path: "ingles"
  },
  {
    title: "Naturales",
    path: "naturales"
  },
  {
    title: "Informatica",
    path: "informatica"
  }
]

const Materias : React.FC= () => {
  return (
    <Col className="container">
      <Row>
        {ListSignatures.map((sig, index) => {
       
       return (
        <Card key={index} titulo={sig.title} link={sig.title}/>
       );
     })}
            </Row>
          </Col>
    
  );
}

export default Materias;