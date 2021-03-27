import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./Styles/Navbar.css";
import logo from "../img/Group 10.png";

import { Navbar, Form, Row, Nav, Button, FormControl } from "react-bootstrap";

const NavbarHome: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Row>
            <img id="logo" src={logo} alt="logo" />
            
           <p id="txt-logo"> WayLearn</p>
          </Row>
        </Navbar.Brand>
        <Nav className="mr-auto">  
          <Nav.Link href="#features">Lecciones</Nav.Link>
          <Nav.Link href="/home/MisCursos">Mis cursos</Nav.Link>
          <Nav.Link href="#pricing"> Materias </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default NavbarHome;
