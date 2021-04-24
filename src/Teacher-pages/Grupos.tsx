import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import "./Styles/Grupos.css";
import UserService from "../Services/UserService";
import CourseService from "../Services/CourseService";
import { Col, Card, Row, CardDeck, Modal } from "react-bootstrap";
import { User, Group, CreateGroup } from "../Interfaces";

var listCursos: Group[] = [];

const Grupos = () => {

  const [listaCursos, setCursos] = useState<Group[]>([]);
  const [tam, setTam] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let user: User;
  let userCurrent = UserService.getCurrentUser();
  let Id: any;

  if (userCurrent != null) {
    user = JSON.parse(userCurrent);
    Id = user.id;
  }

  const CargarCursos = () => {

    CourseService.GetCourses(Id)
    .then((e: any) => {
      setCursos(e.data);
      setTam(e.data.length)
      console.log(tam);
    })
    .catch((error) => {
      console.log(error);
    });
    
  }

  useEffect(() => {
    CargarCursos();
  }, []);

  const CrearCurso = () => {
    
    handleClose();
    let num: any = Number(tam)+1;
    let curso: CreateGroup = {
      idTeacher: Number(Id),
      grupo: { number: String(num), amount: 30 },
    };

    CourseService.createCourse(curso).then( res => {
      console.log("curso creado");
    });

    
    CargarCursos();
  };

  return (
    <>
      <Col>
        <h1 className="subtitle">
          <strong> Mis Cursos </strong>
        </h1>
        <Row>
          <Col>
            <button
              onClick={() => {
                handleShow();
              }}
              className="btn" id="bis2"
            >
              Crear grupo
            </button>
          </Col>
        </Row>

        <Col className="container">
          <CardDeck>
            {listaCursos.map((Grupo, index) => {
              return (
                <Link
                  to={"grupo/" + Grupo.number}
                  key={index}
                  className="course"
                >
                  <Card.Body>
                    <Card.Title className="cardtitle">
                      {Grupo.number}
                    </Card.Title>
                  </Card.Body>
                </Link>
              );
            })}
          </CardDeck>
        </Col>
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear un nuevo curso</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Estás seguro de crear un nuevo grupo?</p>
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
                CrearCurso();
              }}
              className="btn"
              id="bis"
            >
              Aceptar
            </button>
          </Col>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Grupos;
