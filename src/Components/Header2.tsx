import React from 'react';
import logo from '../img/Group 10.png'
import { Col, Row} from 'react-bootstrap';


const Header2: React.FC<{titulo:string}> = ({titulo}) => {
  return (
    <Row>
        <Col>
            <Row>
                <img id="imglogo1" src={logo} alt="logo"/>
            </Row>
            <Row>
                <div className="col-8" id="barra1">
                    <p id="txt">{titulo}</p>
                </div>
            </Row>
        </Col>
    </Row>
  );
}

export default Header2;