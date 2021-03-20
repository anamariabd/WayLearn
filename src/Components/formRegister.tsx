import React from 'react';
import 'bootstrap-material-design'
import 'jquery'


const formRegister: React.FC= () => {
  return (
    <div className="row" id="bloque2">
    <div className="col">
        <div className="row formulario">
            <div className="col">
                <div className="input-group">
                    <input type="text" placeholder="Primer nombre" className="form-control"></input>
                  </div>
            </div> 
            <div className="col">
                <div className="input-group">
                    <input type="text" placeholder="Rol" className="form-control"></input>
                  </div>
            </div>               
        </div>
        <div className="row formulario">
            <div className="col">
                <div className="input-group">
                    <input type="text" placeholder="Segundo nombre" className="form-control"></input>
                  </div>
            </div> 
            <div className="col">
                <div className="input-group">
                    <input type="text" placeholder="Tipo de documento" className="form-control"></input>
                  </div>
            </div>               
        </div>
        <div className="row formulario">
            <div className="col">
                <div className="input-group">
                    <input type="text" placeholder="Primer apellido" className="form-control"></input>
                  </div>
            </div> 
            <div className="col">
                <div className="input-group">
                    <input type="text" placeholder="N de documento" className="form-control"></input>
                  </div>
            </div>               
        </div>
        <div className="row formulario">
            <div className="col">
                <div className="input-group">
                    <input type="text" placeholder="Segundo apellido" className="form-control"></input>
                  </div>
            </div> 
            <div className="col">
                <div className="input-group">
                    <input type="text" placeholder="Fecha de nacimiento" className="form-control"></input>
                  </div>
            </div>               
        </div>
        <div className="row formulario">
            <div className="col">
                <div className="input-group">
                    <input type="text" placeholder="Email" className="form-control"></input>
                  </div>
            </div> 
            <div className="col">
                <div className="input-group">
                    <input type="text" placeholder="Contraseña" className="form-control"></input>
                  </div>
            </div>               
        </div>
        <div className="row formulario">
            <div className="col">
                <div className="input-group">
                    <input type="text" placeholder="Numero de telefono" className="form-control"></input>
                  </div>
            </div> 
            <div className="col">
                <div className="input-group">
                    <input type="text" placeholder="Confirmar Contraseña" className="form-control"></input>
                  </div>
            </div>               
        </div>
        <div className="row formulario">
            <div className="col">
                <button type="button" className="btn btn-raised botonb1">Registrarse</button>
            </div>
        </div>
    </div>

</div>
  );
}
export default formRegister;