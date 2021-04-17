import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./Styles/Grupos.css";
import UserService from "../Services/UserService";
import { Col, Card, CardDeck, Button } from "react-bootstrap";

interface User {
  id: Number;
  username: String;
  roles: String;
  accessToken: String;
  tokenType: String;
}

interface Group {
  Number: string;
  Cantidad: string;
}

var listCursos: Group[] = [
  {
    Number: "1",
    Cantidad: "30",
  },
  {
    Number: "2",
    Cantidad: "30",
  },
];

const Grupos = () => {
  const [listaCursos, setCursos] = useState<Group[]>([]);

  useEffect(() => {
    let user: User;
    let userCurrent = UserService.getCurrentUser();

    if (userCurrent != null) {
      user = JSON.parse(userCurrent);
      console.log(user.roles);
    }
  });

  const CrearCurso = () => {
    let num: any = listCursos.length + 1;

    listCursos.push({ Number: String(num), Cantidad: "12" });
    setCursos([...listCursos]);
    console.log(listaCursos);
  };

  return (
    <>
      <Col>
        <h1 className="subtitle">
          {" "}
          <strong> Mis Cursos </strong>
        </h1>
        <Col>
          <button
            onClick={() => {
              CrearCurso();
            }}
            className="btn btn-raised botonb1"
          >
            Crear grupo
          </button>
        </Col>

        <Col className="container">
          <CardDeck>
            {listCursos.map((Grupo, index) => {
              return (
                <Link
                  to={"grupo/" + Grupo.Number}
                  key={index}
                  className="course"
                >
                  <Card.Body>
                    <Card.Title className="cardtitle">
                      {Grupo.Number}
                    </Card.Title>
                  </Card.Body>
                </Link>
              );
            })}
          </CardDeck>
        </Col>
      </Col>
    </>
  );
};

export default Grupos;
