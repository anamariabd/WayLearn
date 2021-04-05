import React from "react";
import  { Link } from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './Styles/Grupos.css'
import { Col, Card, CardDeck } from "react-bootstrap";

interface Group {
  Number: string;
  Cantidad: string;
}

const MisGrupos: Group[] = [
  {
    Number: "1",
    Cantidad: "29",
  },
  {
    Number: "2",
    Cantidad: "30",
  },
  {
    Number: "3",
    Cantidad: "30",
  },
  {
    Number: "4",
    Cantidad: "30",
  },
  {
    Number: "5",
    Cantidad: "30",
  },
  {
    Number: "6",
    Cantidad: "30",
  }
];

const Grupos = () => {

  return (
    <>
      <Col>
        <h1 className="subtitle"> <strong> Mis Cursos </strong></h1>
        <Col  className="container">
          <CardDeck>
            {MisGrupos.map((Grupo, index) => {
              return (
                <Link to={"grupo/"+Grupo.Number} key={index} className="course" >
                  <Card.Body>
                    <Card.Title className="cardtitle">{Grupo.Number}</Card.Title>
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
