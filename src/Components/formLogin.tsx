import React from "react";
import "bootstrap-material-design";
import "jquery";
import avatar from '../img/avatar.png'
import logoEmail from "../img/Group.png";
import LogoPassword from "../img/Group 12.png";
import { useForm } from "react-hook-form";


const FormLogin = () => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
      console.log(data.email);
      console.log(data.password);
    };
    

  return (
    <div className="row" id="bloque">
      <form className="col" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col" id="imgAvatar">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <div className="row formulario">
          <div className="col">
            <div className="input-group">
              <div className="input-group-prepend">
                <img src={LogoPassword} alt="pass"></img>
              </div>
              <input
                type="text"
                name="email"
                ref={register({ required: true })}
                placeholder="Correo electrónico"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="row formulario">
          <div className="col">
            <div className="input-group">
              <div className="input-group-prepend">
                <img src={logoEmail} alt="img" />
              </div>
              <input
                type="password"
                name="password"
                ref={register({ required: true })}
                placeholder="Contraseña"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="row formulario">
          <div className="col">
            <button
              type="submit"
              className="btn btn-raised botonb1"
              id="loginButton"
            >
              Iniciar sesión
            </button>
          </div>
        </div>
        <div className="row formulario">
          <div className="col">
            <a
              type="button"
              href="/register"
              className="btn btn-raised botonb1"
              id="registerButton"
            >
              Registrarse
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
