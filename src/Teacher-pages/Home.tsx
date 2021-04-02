import React from "react";
import {useHistory} from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import UserService from '../Services/UserService'
import Content from "./Content";
import Navbar from "./NavbarHome";
import Cursos from "../Student-pages/Cursos";
import Header from "../Components/Header3";
import { Container } from "react-bootstrap";
//import { useParams } from "react-router";

interface User {
  
  id: Number,
  username: String,
  roles: String,
  accessToken: String,
  tokenType: String

}

const Home = () => {
 // const { TypeUser } = useParams<{ TypeUser: string }>();
  let userCurrent = UserService.getCurrentUser();
  let user: User;
  let history = useHistory();
  let TypeUser;

  if (userCurrent != null){
    user = JSON.parse(userCurrent);
    TypeUser = user.roles;
  } else {
    
    history.replace("/");
  }


  return (
    <> 
      {TypeUser === "teacher" && (
        <div>
          <Navbar />
          <Content name="Mis-grupos" /> {/* Esto está estático */}
        </div>
      )}

      {TypeUser === "student" && (
        <Container fluid>
          <Header />
          <Cursos /> {/* Esto está estático */}
        </Container>
      )}
    </>
  );
};

export default Home;
