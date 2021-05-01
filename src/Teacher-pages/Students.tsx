import { useState } from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "mdbreact/dist/css/mdb.css";
import './Styles/Grupos.css'
import { Col,Row,  Modal, FormControl  } from "react-bootstrap";
import {Estudiante} from '../Interfaces'

const Grupo: Estudiante[] = [
  {
    Nombre: "Ana",
    Apellido: "Buenahora",
    Id: "1"
  },
  {
    Nombre: "Fredy",
    Apellido: "Caballero",
    Id: "2"
  },
  {
    Nombre: "Andres",
    Apellido: "Valencia",
    Id: "3"
  },
  {
    Nombre: "Enio",
    Apellido: "Hernandez",
    Id: "4"
  },
  {
    Nombre: "Daniel",
    Apellido: "Vega",
    Id: "5"
  },
  {
    Nombre: "Juanchito",
    Apellido: "Trucupei",
    Id: "6"
  }
];

const Students = () => {
  const [show, setShow] = useState(false);
  var i = 0;

  const handleClose = () => setShow(false);
  return (
    <>
      <Col>
        <Col className="container">
          
          <Row>
            <button
              onClick={() => {
                 setShow(true);
              }}
              className="btn" id="bis2"
            >
              Agregar estudiante
            </button>
          </Row>
        <Row className="tituloNotas">
         <Col>
          <h2><strong>Estudiantes</strong></h2>
         </Col>
          </Row>
          
       <Row className="notas">
            <Col>
            {Grupo.map((student, index) => {
              i++;
              return (
                
                 <Link key={index} to={"/page/student/"+student.Id}> <h3>
                   
                  <strong>{i + '. ' + student.Nombre + " " + student.Apellido}</strong></h3> </Link>
              );
            })}
         </Col>
       </Row>
        </Col>
      </Col>
      <Modal show={show} id = "modal" onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Agregar estudiante:</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Agregar estudiante</p>
          <Col>
              <FormControl size={"sm"} placeholder="Search" /></Col>
        </Modal.Body>

        <Modal.Footer>
          <Col>
            <button
              onClick={() => {
                handleClose();
              }}
              className="btn"
              id="bis"
            >
              Cancelar
            </button>{" "}
          </Col>
          <Col>
            <button
              onClick={() => {
                console.log("hola");
              }}
              className="btn"
              id="bis"
            >
              Agregar
            </button>
          </Col>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Students;
