import React from 'react';
import 'bootstrap-material-design'
import 'jquery'
import avatar from '../img/avatar.png'
import logoEmail from '../img/Group.png'
import LogoPassword from '../img/Group 12.png'


const formLogin: React.FC= () => {
  return (
    <div className="row" id="bloque">
        <div className="col">
            <div className="row">
                <div className="col" id="imgAvatar">
                    <img src={avatar}/>
                </div>
            </div>
            <div className="row formulario">
                <div className="col">
                    <div className="input-group">
                        <div className="input-group-prepend">
                                <img src={LogoPassword} ></img>
                            </div>
                        <input type="text" placeholder="Nombre de usuario" className="form-control"/>
                    </div>
                </div>                
            </div>
                <div className="row formulario">
                    <div className="col">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <img src={logoEmail}/>
                            </div>
                        <input type="text" placeholder="Contraseña" className="form-control"/>  
                        </div>
                    </div>                
                </div>
                <div className="row formulario">
                    <div className="col">
                        <button type="button" className="btn btn-raised botonb1" id="loginButton">Iniciar sesión</button>
                    </div>
                </div>
                <div className="row formulario">
                    <div className="col">
                        <a type="button" href="/register" className="btn btn-raised botonb1" id="registerButton">Registrarse</a>
                    </div>
                </div>
            </div>

    </div>
  );
}

export default formLogin;