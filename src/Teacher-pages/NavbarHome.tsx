import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./Styles/Navbar.css";
import logo from "../img/Group 10.png";
import { PersonCircle, Search } from "react-bootstrap-icons";

import {
  Navbar,
  Row,
  Col,
  Nav,
  InputGroup,
  FormControl,
  Dropdown
} from "react-bootstrap";

const NavbarHome: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Row>
            <Col xs={3}>
              <img id="logo" src={logo} alt="logo" />
            </Col>
            <Col>
              <p id="txt-logo"> WayLearn</p>
            </Col>
          </Row>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/page/perfil"> Mi perfil </Nav.Link>
          <Nav.Link href="/page/lecciones"> Lecciones </Nav.Link>
          <Nav.Link href="/page/grupos">Mis cursos</Nav.Link>
          <Nav.Link href="/page/materias"> Materias </Nav.Link>
        </Nav>
        <Row>
          <Col className="md-3">
            <InputGroup className="mb" id="inp">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic">
                  <Search color="#4f5b66" size={17}></Search>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl size={"sm"} placeholder="Search" />
            </InputGroup>
          </Col>
        </Row>
        <Row className="lg">
          <Col>
            <Dropdown>
              <Dropdown.Toggle id = "profile">
                <PersonCircle color="white" size={38} />
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight={true} id="profile-menu">
                <Dropdown.Item href="#/action-1">Mi perfil</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Cerrar sesión</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Navbar>
    </>
  );
};

export default NavbarHome;
