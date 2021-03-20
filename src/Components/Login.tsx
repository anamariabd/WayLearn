import React from 'react';
import Header2 from './Header2';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../login.css';

const Login: React.FC= () => {
  return (
    <Header2 titulo="Inicio de sesion"/>
  );
}

export default Login;