import React from 'react';
import 'bootstrap-material-design'
import 'jquery'
import { Col, Figure, Row } from 'react-bootstrap';
import logo from '../img/pngocean 2.png'

const CardSubject: React.FC<{titulo:string}> = ({titulo}) => {
  return (
      
    <Figure className="tarjeta">
        <Row>
            <Col>
                <Figure.Image width={171} height={180} alt="171x180" src={logo}/>
            </Col>
        </Row>
        <Row>
            <Col>
                <a href="/courses" className="link">{titulo}</a>
            </Col>
        </Row>
        
    </Figure>
  );
}

export default CardSubject;