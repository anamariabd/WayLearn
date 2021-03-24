import React from 'react';
import 'bootstrap-material-design'
import 'jquery'
import { useForm } from "react-hook-form";
import { Col, Form, Row } from 'react-bootstrap';


const FormRegister: React.FunctionComponent = () => {
    
    
  const { register, handleSubmit } = useForm();
    
    
  const onSubmit = (data: any) => {
    console.log(data.email);
    console.log(data.password);
  };
  

  return (
    <Row id="bloque2">
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
            <Form.Control as="select" className="select" custom>
                    <option disabled selected> Tipo de usuario </option>
                    <option data-tokens="Docente"> Docente </option>
                    <option data-tokens="Estudiante"> Estudiante</option>
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
                    <input type="text" name="LastName"   placeholder="Primer apellido" className="form-control"></input>
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

</Row>
  );
}
export default FormRegister;