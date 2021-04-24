import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "mdbreact/dist/css/mdb.css";
import './Styles/Grupos.css'
import { Col, Row } from "react-bootstrap";
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
  },
  {
    Nombre: "Juanchito",
    Apellido: "Trucupei",
    Id: "7"
  }
];

const Students = () => {
  var i = 0;
  return (
    <>
      <Col>
        <Col className="container">
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
                
                 <Link key={index} to={"/page/student/"+student.Id}> <h3><strong>{i + '. ' + student.Nombre + " " + student.Apellido}</strong></h3> </Link>   
              );
            })}
         </Col>
       </Row>
        </Col>
      </Col>
    </>
  );
};

export default Students;
