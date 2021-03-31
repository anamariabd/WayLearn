import React from 'react';
import 'bootstrap-material-design'
import 'jquery'
import { useForm } from "react-hook-form";
import { Col, Form, Row } from 'react-bootstrap';
import TeacherService from '../Services/teacherService'


const FormRegister: React.FunctionComponent = () => {
    
    
  const { register, handleSubmit } = useForm();
    
    
    const onSubmit = (data: any) => {

        if (data.option === "Docente") {
            var teacher = {
                "firstName": data.firstName,
                "lastName": data.lastName,
                "email": data.email,
                "password": data.password,
                "cc": 239898
            }

            console.log(teacher);
            TeacherService.createTeacher(teacher);
            console.log("Docente registrado")
        }
      
    console.log(data.firstName);
    console.log(data.lastName);
    console.log(data.email);
    console.log(data.password);
    console.log("opcion: "+data.option)
  };
  

  return (
    <Row id="bloque2">
        <Col>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <Row className="formulario" >
                    <Col >
                        <Form.Group>
                        <Form.Control
                                name="firstName"
                                ref={register({ required: true })}
                                placeholder="Primer nombre" className="form-control"
                            />
                        </Form.Group>
                    </Col>
                        
                    <Col>
                    <Form.Control as="select" name= "option" ref={register({ required: true })} className="select" custom >
                            <option disabled selected className="option"> Tipo de usuario </option>
                            <option data-tokens="teacher"> Docente </option>
                            <option data-tokens="student"> Estudiante</option>
                        </Form.Control>
                    </Col>               
                    </Row>
                    
                <Row className="formulario">
                    <Col>
                        <Form.Group>
                            <input type="text" name="secondName" placeholder="Segundo nombre" className="form-control"></input>
                        </Form.Group>
                    </Col> 
                    <Col>
                        <Form.Group>
                            <input type="text"  name="TypeDoc"  placeholder="Tipo de documento" className="form-control"></input>
                        </Form.Group>
                    </Col>               
                </Row>
                <Row className="formulario">
                    <Col>
                        <Form.Group>
                            <input type="text" name="lastName"  ref={register({ required: true })} placeholder="Primer apellido" className="form-control"></input>
                        </Form.Group>
                    </Col> 
                    <div className="col">
                        <Form.Group>
                            <input type="number" name="NumberDoc" placeholder="N de documento" className="form-control"></input>
                        </Form.Group>
                    </div>               
                </Row>
                <Row className="formulario">
                    <Col>
                        <Form.Group>
                            <input type="text" name="SecondLastName"  placeholder="Segundo apellido" className="form-control"></input>
                        </Form.Group>
                    </Col> 
                    <Col>
                        <Form.Group>
                            <input type="date" name="Fecha"  placeholder="Fecha de nacimiento" className="form-control"></input>
                        </Form.Group>
                    </Col>               
                </Row>
                <Row className="formulario">
                    <Col>
                        <Form.Group>
                            <input type="text" 
                        ref={register({ required: true })} placeholder="Email" name="email" className="form-control"></input>
                        </Form.Group>
                    </Col> 
                    <Col>
                        <Form.Group>
                            <input type="password" 
                        ref={register({ required: true })} placeholder="Contraseña" name="password" className="form-control"></input>
                        </Form.Group>
                    </Col>               
                </Row>
                <Row className="formulario">
                    <Col>
                        <Form.Group>
                            <input type="number" placeholder="Numero de telefono" name="PhoneNumber"  className="form-control"></input>
                        </Form.Group>
                    </Col> 
                    <Col>
                        <Form.Group>
                            <input type="password" placeholder="Confirmar Contraseña" name="ConfirmPass"  className="form-control"></input>
                        </Form.Group>
                    </Col>               
                </Row>
                <Row className="formulario">
                    <Col>
                        <button type="submit" className="btn btn-raised botonb1" id="registerButton">Registrarse</button>
                    </Col>
                </Row>
            </Form>
        </Col>
    </Row>
  );
}
export default FormRegister;