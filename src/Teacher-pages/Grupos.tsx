import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "mdbreact/dist/css/mdb.css";
import "./Styles/Grupos.css";
import UserService from "../Services/UserService";
import CourseService from "../Services/CourseService";
import { Col, Card, Row, CardDeck, Modal } from "react-bootstrap";
import { User, Group, CreateGroup } from "../Interfaces";

const Grupos = () => {
  // const courseContext = useContext(CourseContext);
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

  useEffect(() => {
    let user: User;
    let userCurrent = UserService.getCurrentUser();
    let Id: any;

    if (userCurrent != null) {
      user = JSON.parse(userCurrent);
      Id = user.id;

      CourseService.getCourses(Id)
        .then((e: any) => {
          setCursos(e.data);
          setTam(e.data.length);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, []);

  const CrearCurso = () => {
    handleClose();
    let num: any = Number(tam) + 1;
    let curso: CreateGroup = {
      idTeacher: Number(Id),
      grupo: { number: String(num), amount: 30 },
    };

    CourseService.createCourse(curso).then((res) => {
      console.log(res.data);

      setCursos(listaCursos.concat(res.data));
    });
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
              className="btn"
              id="bis2"
            >
              Crear grupo
            </button>
          </Col>
        </Row>

        <Col className="container">
          <CardDeck>
            {listaCursos.map((Grupo) => {
              return (
                <Link
                  to={"grupo/" + Grupo.id}
                  key={Grupo.id}
                  className="course"
                  onClick={() => console.log(Grupo.id)}
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
