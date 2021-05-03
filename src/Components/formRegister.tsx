import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { Col, Form, Row, Alert, Spinner } from 'react-bootstrap';
import userService from '../Services/UserService';

const FormRegister = () => {
    
    const [ status, setStatus ] = useState("");
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    
     useEffect(() => {
         if (status === "success") {
             alert("Registro exitoso! Inicie sesion ");
             history.replace("/login")
         }
     });
    
    
    const onSubmit = (data: any) => {

        setLoading(true);

        var type = data.option === "Docente"? "teacher": data.option === "Estudiante"?"student":"undefined"
        
        var user = {
            "firstName": data.firstName,
            "lastName": data.lastName,
            "email": data.email,
            "password": data.password,
            "cc": data.cc
        }
        userService.createUser(user, type).then(res => {
            setStatus("success");
        }).catch(err => {
            setLoading(false);
            setStatus("failed");
        });
        
    }
  

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

                      <Form.Control as="select" name="TypeDoc" ref={register({ required: true })} className="select" custom >
                        <option disabled selected className="option"> Tipo de documento de identidad</option>
                        <option data-tokens="cc"> c.c. </option>
                        <option data-tokens="ti"> T.I.</option>
                        <option data-tokens="extranjera"> c.c. extranjería</option>
                      </Form.Control>
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
                            <input type="number" name="cc" ref={register({ required: true })} placeholder="N de documento" className="form-control"></input>
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
                            <input type="email" 
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
                  
        {loading &&(<Row className="formulario"><Col><Spinner animation="border" variant="warning" /> </Col> </Row>)}
                <Row className="formulario">
                    <Col>
                        <button type="submit" className="btn btn-raised botonb1" id="registerButton" 
              disabled={loading}>Registrarse</button>
                      </Col>

                  </Row>
                  {status === "failed" && (<Col className="formulario">
                      <Row>
        <Col><Alert variant="danger"  onClose={() => setStatus("")} dismissible> Error al registrar, intente nuevamente</Alert>
                  
        </Col>
      </Row></Col>)}
                          
            </Form>
        </Col>
    </Row>
  );
}
export default FormRegister;