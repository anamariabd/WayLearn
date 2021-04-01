import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import "bootstrap-material-design";
import "jquery";
import avatar from '../img/avatar.png'
import LogoPassword from "../img/Group.png";
import logoEmail from "../img/Group 12.png";
import { useForm } from "react-hook-form";
import { Col, Row, Spinner } from 'react-bootstrap';
import UserService from '../Services/UserService'
//import {AuthContext} from '../Private-routes/AuthContext'

interface User {
  
  id: Number,
  username: String,
  roles: String,
  accessToken: String,
  tokenType: String

}

const FormLogin = () => {
  
  useEffect(() => {

    if (signed === "success") {
      let user: User;
      let userCurrent = UserService.getCurrentUser();
      
      if (userCurrent != null){
        user = JSON.parse(userCurrent);
        console.log(user.roles);        
        history.replace("/home/"+user.roles);
      }
    }
  });

  const { register, handleSubmit } = useForm();
 // const { setUserInfo } = React.useContext(AuthContext);
  const [signed, setSigned] = useState("");
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const onSubmit = (data: any) => {
    setLoading(true);
    UserService.loginUser(data).then(
      res => {
        setSigned("success")
      })
      .catch(
        err => { setLoading(false); setSigned("failed") });
  };
    
  return (
    <Row id="bloque">
      <form className="col" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col id="imgAvatar">
            <img src={avatar} alt="avatar" />
          </Col>
        </Row>
        <Row className="formulario">
          <Col>
            <div className="input-group">
              <div className="input-group-prepend">
                <img src={LogoPassword} alt="pass"></img>
              </div>
              <input
                type="text"
                name="username"
                ref={register({ required: true })}
                placeholder="Correo electrónico"
                className="form-control"
              />
            </div>
          </Col>
        </Row>
        <Row className="formulario">
          <Col>
            <div className="input-group">
              <div className="input-group-prepend">
                <img src={logoEmail} alt="img" />
              </div>
              <input
                type="password"
                name="password"
                ref={register({ required: true })}
                placeholder="Contraseña"
                className="form-control"
              />
            </div>
          </Col>
        </Row>
        {loading &&(<Row className="formulario"><Col><Spinner animation="border" variant="warning" /> </Col> </Row>)}
        <Row className="formulario">
          
          <Col>
            <button
              type="submit"
              className="btn btn-raised botonb1"
              id="loginButton"
              disabled={loading}
            >
              Iniciar sesión
            </button>
          </Col>
        </Row>
        <Row className="formulario">
          <Col>
            <a
              type="button"
              href="/register"
              className="btn btn-raised botonb1"
              id="registerButton"
            >
              Registrarse
            </a>
          </Col>
          
        </Row>
      </form>

      {signed==="failed" &&(<Col className="formulario"> <Row> <Col><p> Error al registrarse, intente nuevamente</p> </Col> </Row></Col>)}
    </Row>
  );
};

export default FormLogin;
