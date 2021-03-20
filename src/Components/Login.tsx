import React from 'react';
import Header2 from './Header2';
import FormLogin from './formLogin';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../login.css';

const Login: React.FC= () => {
  return (
    <div>
      <Header2 titulo="Inicio de sesion"/>
      <FormLogin/>
    </div>
  );
}

export default Login;