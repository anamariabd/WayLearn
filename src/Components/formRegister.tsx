import React from 'react';
import 'bootstrap-material-design'
import 'jquery'
import { useForm } from "react-hook-form";


const FormRegister: React.FC = () => {
    
    
    const { register, handleSubmit } = useForm();
    
    
  const onSubmit = (data: any) => {
    console.log(data.email);
    console.log(data.password);
  };
  

  return (
    <div className="row" id="bloque2">
    <form className="col" onSubmit={handleSubmit(onSubmit)} >
        <div className="row formulario">
            <div className="col">
                <div className="input-group">
                    <input type="text" name="firstName" 
                ref={register({ required: true })} placeholder="Primer nombre" className="form-control"></input>
                  </div>
            </div> 
            <div className="col">
                <div className="input-group">
                    <input type="text" name="rol" placeholder="Rol" className="form-control"></input>
                  </div>
            </div>               
        </div>
        <div className="row formulario">
            <div className="col">
                <div className="input-group">
                    <input type="text" name="secondName" placeholder="Segundo nombre" className="form-control"></input>
                  </div>
            </div> 
            <div className="col">
                <div className="input-group">
                    <input type="text"  name="TypeDoc"  placeholder="Tipo de documento" className="form-control"></input>
                  </div>
            </div>               
        </div>
        <div className="row formulario">
            <div className="col">
                <div className="input-group">
                    <input type="text" name="LastName"   placeholder="Primer apellido" className="form-control"></input>
                  </div>
            </div> 
            <div className="col">
                <div className="input-group">
                    <input type="number" name="NumberDoc" placeholder="N de documento" className="form-control"></input>
                  </div>
            </div>               
        </div>
        <div className="row formulario">
            <div className="col">
                <div className="input-group">
                    <input type="text" name="SecondLastName"  placeholder="Segundo apellido" className="form-control"></input>
                  </div>
            </div> 
            <div className="col">
                <div className="input-group">
                    <input type="text" name="Fecha"  placeholder="Fecha de nacimiento" className="form-control"></input>
                  </div>
            </div>               
        </div>
        <div className="row formulario">
            <div className="col">
                <div className="input-group">
                    <input type="text" 
                ref={register({ required: true })} placeholder="Email" name="email" className="form-control"></input>
                  </div>
            </div> 
            <div className="col">
                <div className="input-group">
                    <input type="password" 
                ref={register({ required: true })} placeholder="Contraseña" name="password" className="form-control"></input>
                  </div>
            </div>               
        </div>
        <div className="row formulario">
            <div className="col">
                <div className="input-group">
                    <input type="number" placeholder="Numero de telefono" name="PhoneNumber"  className="form-control"></input>
                  </div>
            </div> 
            <div className="col">
                <div className="input-group">
                    <input type="password" placeholder="Confirmar Contraseña" name="ConfirmPass"  className="form-control"></input>
                  </div>
            </div>               
        </div>
        <div className="row formulario">
            <div className="col">
                <button type="submit" className="btn btn-raised botonb1" id="registerButton">Registrarse</button>
            </div>
        </div>
    </form>

</div>
  );
}
export default FormRegister;