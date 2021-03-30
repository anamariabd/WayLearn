import React from 'react';
import 'bootstrap-material-design'
import 'jquery'
import { Col,Row } from 'react-bootstrap';

const Note: React.FC<{titulo:string,descripcion:string}> = ({titulo,descripcion}) =>{
  return (
    <Row>
        <Col>
            <strong>
                {titulo}
            </strong>
            <p>
                {descripcion}
            </p>
        </Col>
    </Row>
       
       
            
  );
}

export default Note;