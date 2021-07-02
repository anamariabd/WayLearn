import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row, Modal } from "react-bootstrap";

const handleShow = () => {
  console.log("hi")
}
  
const Lesson = () => {
  
  const [show, setShow] = useState(false);
  let history = useHistory();

  const handlerModal = () =>{
    setShow(!show)
  }
  const handleClose = () =>{
    setShow(!show)
  }
  return (
    <>
      <Col>
      <h1 className="subtitle"> <strong> Lecciones </strong></h1>
        <Row>
          <Col>
            <button
              onClick={() => {
                setShow(true)
              }}
              className="btn"
              id="bis2"
            >
              Crear lección
            </button>
          </Col>
        </Row>
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
              
        history.replace("/page/create");
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
}

export default Lesson;