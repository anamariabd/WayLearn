import React from 'react';
import Header2 from '../Components/Header2';
import FormRegister from '../Components/formRegister';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../register.css';

const Register: React.FC= () => {
  return (
    <div className="Container-fluid">
      <Header2 titulo="Registro"/>
      <FormRegister></FormRegister>
    </div>
  );
}

export default Register;