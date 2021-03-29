import React from 'react';
import 'bootstrap-material-design'
import 'jquery'
import { Button, Col, Figure, Row } from 'react-bootstrap';
import logo from '../img/pngocean 2.png'

const CardSubject: React.FC<{titulo:string;link:string}> = ({titulo,link}) => {
  return (
      
    <a className="tarjeta" href={link}>
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
        
    </a>
  );
}

export default CardSubject;