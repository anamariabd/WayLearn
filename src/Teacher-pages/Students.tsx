import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './Styles/Grupos.css'
import { Col,Row } from "react-bootstrap";

interface Estudiante {
  Nombre: string;
  Apellido: string;
}

const Grupo: Estudiante[] = [
  {
    Nombre: "Ana",
    Apellido: "Buenahora"
  },
  {
    Nombre: "Fredy",
    Apellido: "Caballero"
  },
  {
    Nombre: "Andres",
    Apellido: "Valencia"
  },
  {
    Nombre: "Enio",
    Apellido: "Hernandez"
  },
  {
    Nombre: "Daniel",
    Apellido: "Vega"
  },
  {
    Nombre: "Juanchito",
    Apellido: "Trucupei"
  },
  {
    Nombre: "Juanchito",
    Apellido: "Trucupei"
  },
  {
    Nombre: "Juanchito",
    Apellido: "Trucupei"
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
                <>
                  <h3><strong><a className="a-student" href="/student">{i + '. ' + student.Nombre + " " + student.Apellido}</a></strong></h3>
                  
                </>
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
