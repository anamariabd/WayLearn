import React from 'react';
import Header2 from '../Components/Header2';
import FormLogin from '../Components/formLogin';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../login.css';

const Login: React.FC= () => {
  return (
    <div className="container-fluid">
      <Header2 titulo="Inicio de sesion"/>
      <FormLogin/>
    </div>
  );
}

export default Login;