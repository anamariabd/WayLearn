import React, { useState, useEffect} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import avatar from '../img/avatar.png'
import '../Teacher-pages/Styles/MiPerfil.css'
import {Row, Col } from 'react-bootstrap';
import UserService from '../Services/UserService'
import { User } from "../Interfaces"

interface params{
  role: any,
  name: String
}

const MiPerfil: React.FC<params> = ({ role, name }) => {

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [correo, setCorreo] = useState();

  useEffect(() => {
    
  let id: any;
  let user: User;
  let userCurrent = UserService.getCurrentUser();
      
    if (userCurrent != null) {
      
      user = JSON.parse(userCurrent);
      id = String(user.id);

      UserService.getProfile(role, id).then((e:any) => {
        
        console.log(e.data);
        setFirstname(e.data.firstName);
        setLastname(e.data.lastName);
        setCorreo(e.data.email);

      });
    }

  });

  return (
    <Col>
    <Row>
       <h1 className="subtitle"> <strong> Mi perfil </strong></h1>
        <Row id="perfil">
           
          <Col>
            <img id="avatar" src={avatar} alt="avatar" /></Col>       
          <Col>
            <Row>
              <h1 className="subtitle"> <strong> {name} </strong> </h1>
            </Row>
          <Row>
           <p>  <strong>  Nombre: </strong> {firstname} </p>
          </Row>
          <Row>
           <p><strong> Apellidos: </strong> {lastname} </p> 
          </Row>
          <Row>
           <p><strong> Correo: </strong> {correo} </p> 
          </Row>
          </Col>
          <Col>
          </Col>
      </Row>
    </Row>
    </Col>
  );
}

export default MiPerfil;