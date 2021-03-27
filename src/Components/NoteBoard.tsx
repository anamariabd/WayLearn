import React from 'react';
import 'bootstrap-material-design'
import 'jquery'
import { Col,Row } from 'react-bootstrap';
import Note from '../Components/Note';

const NoteBoard: React.FC = () => {
  return (
    <Col>
        <Row className="tituloNotas">
         <Col>
          <h6><strong>Mis notas</strong></h6>
         </Col>
       </Row>
       <Row className="notas">
         <Col>
            <Note titulo="Titulo 1" descripcion="Esta es una breve descripcion de la nota"/>
            <Note titulo="Titulo 2" descripcion="Esta es una breve descripcion de la nota"/>
            <Note titulo="Titulo 3" descripcion="Esta es una breve descripcion de la nota"/>
         </Col>
       </Row>
    </Col>
       
       
            
  );
}

export default NoteBoard;