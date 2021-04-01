import React from 'react';
import 'bootstrap-material-design'
import 'jquery'
import { Col,Row } from 'react-bootstrap';

const Task: React.FC<{titulo:string,descripcion:string}> = ({titulo,descripcion}) =>{
  return (
    <Row className="task">
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

export default Task;