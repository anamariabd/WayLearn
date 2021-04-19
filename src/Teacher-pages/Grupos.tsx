import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./Styles/Grupos.css";
import UserService from "../Services/UserService";
import CourseService from "../Services/CourseService";
import { Col, Card, Row, CardDeck, Modal, Button } from "react-bootstrap";
import { User, Group, CreateGroup } from "../Interfaces";

var listCursos: Group[] = [];

const Grupos = () => {
  const [listaCursos, setCursos] = useState<Group[]>([]);
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

    CourseService.GetCourses(Id)
      .then((e: any) => {
        setCursos(e.data);
    
      })
      .catch((error) => {
        console.log(error);
      });
    
   }, []);

  const CrearCurso = () => {
    let num: any = listaCursos.length + 1;
    let curso: CreateGroup = {
      idTeacher: Number(Id),
      grupo: { number: String(num), amount: 30 },
    };
    CourseService.createCourse(curso);
    handleShow();
    // setCursos([...listCursos]);
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
              CrearCurso();
            }}
            className="btn btn-raised botonb1"
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
        
  <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Cancelar</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
</Modal>
    </>
  );
};

export default Grupos;
