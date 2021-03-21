import React from 'react';
import Header2 from './Header2';
import FormRegister from './formRegister';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../register.css';
import formRegister from './formRegister';

const Register: React.FC= () => {
  return (
    <div className="Container-fluid">
      <Header2 titulo="Registro"/>
      <FormRegister></FormRegister>
    </div>
  );
}

export default Register;