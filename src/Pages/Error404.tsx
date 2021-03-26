import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../login.css';
import error404 from '../img/ERROR404.png'
import { Col } from 'react-bootstrap';

const Error: React.FC= () => {
  return (
    <Col>
      <h1> Error 404 Not Found</h1>
      <img src={error404} alt="Error"></img>
    </Col>
  );
}

export default Error;