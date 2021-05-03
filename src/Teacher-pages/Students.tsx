import { useState, useEffect } from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "mdbreact/dist/css/mdb.css";
import "./Styles/Grupos.css";
import StudentService from "../Services/StudentService";
import CourseService from "../Services/CourseService"
import { Col, Row, Modal, FormControl, Form } from "react-bootstrap";
import { Estudiante } from "../Interfaces";

// const Grupo: Estudiante[] = [
//   {
//     firstName: "Ana",
//     lastName: "Buenahora",
//     id: "1",
//   },
//   {
//     firstName: "Fredy",
//     lastName: "Caballero",
//     id: "2",
//   }
// ];
const Students = () => {

  const { id } = useParams<{ id: string }>();
 // const { selectedCourse } = useContext(CourseContext);
  
  const [students, setStudents] = useState<Estudiante[]>([]);
  const [Grupo, setListstudents] = useState<Estudiante[]>([]);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {

    StudentService.studentsAlone().then(
      (e: any) => {
        console.log(e.data);
        setStudents(e.data);
        }
    )
    
    CourseService.getStudentsByGroup(id).then(
      (e: any) => {
        setListstudents(e.data);
        })
        .catch((error:any) => {
          console.log(error);
        });
    
  },[])
  
  const addStudent = (student:string) => {
   
    console.log(student);
    let obj = {"student":student}
    StudentService.addStudent(id, obj).then((res) => {
      
      //setListstudents(students.concat(res.data))
      setShow(false);
    
    });
  };

  const handleClose = () => setShow(false);
  const handleChange = (e: any) => {
    const text = e.target.value;
    setSearch(text);
  };

  return (
    <>
    <h1 className="subtitle"> <strong> Grupo {id} </strong></h1>
      <Col>
        <Col className="container">
          <Row>
            <button
              onClick={() => {
                setShow(true);
              }}
              className="btn"
              id="bis2"
            >
              Agregar estudiante
            </button>
          </Row>
          <Row className="tituloNotas">
            <Col>
              <h2>
                <strong>Estudiantes</strong>
              </h2>
            </Col>
          </Row>

          <Row className="notas">
            <Col>
              {Grupo.map((student, index) => {
                return (
                  <Link key={index} to={"/page/student/" + student.id}>
                    <h3>
                      <strong>
                        {student.id +
                          ". " +
                          student.firstName +
                          " " +
                          student.lastName}
                      </strong>
                    </h3>{" "}
                  </Link>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Col>

      {/* MODAL */}
      <Modal show={show} id="modal" onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Agregar estudiante:</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Agregar estudiante</p>
          <Col>
            <FormControl
              size={"sm"}
              onChange={handleChange}
              placeholder="Search"
            />
          </Col>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Estudiantes:</Form.Label>
            <Form.Control as="select" name="student" onChange={(e:any) => setSearch( e.target.value )} multiple>
              {students.map((student, index) => {
       
                return (
                  <option value={student.id.toString()} key={index}>{student.firstName+" "+student.lastName+" - "+student.email}</option>
                );
              })}
            </Form.Control>
          </Form.Group>
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
            </button>
          </Col>
          <Col>
            <button
              onClick={() => {
                addStudent(search);
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
