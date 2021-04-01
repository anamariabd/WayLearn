import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Content from "./Content";
import Navbar from "./NavbarHome";
import Cursos from "../Student-pages/Cursos";
import Header from "../Components/Header3";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

const Home = () => {
  const { TypeUser } = useParams<{ TypeUser: string }>();

  return (
    <>
      {TypeUser === "teacher" && (
        <div>
          <Navbar />
          <Content name="Mis-grupos" />
        </div>
      )}

      {TypeUser === "student" && (
        <Container fluid>
          <Header />
          <Cursos />
        </Container>
      )}
    </>
  );
};

export default Home;
