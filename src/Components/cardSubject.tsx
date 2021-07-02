import React from 'react';
import { Link } from "react-router-dom";
import {  Col, Figure, Row } from 'react-bootstrap';
import logo from '../img/pngocean 2.png'

const CardSubject: React.FC<{titulo:string;link:string}> = ({titulo,link}) => {
  return (
      
    <Link className="tarjeta" to={link}>
        <Row>
            <Col>
                <Figure.Image width={171} height={180} alt="171x180" src={logo}/>
            </Col>
        </Row>
        <Row>
            <Col>
                <p className="textb">{titulo}</p>
            </Col>
        </Row>
        
    </Link>
  );
}

export default CardSubject;