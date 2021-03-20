import React from 'react';
import 'bootstrap-material-design'
import 'jquery'
import logo from '../img/Group 10.png';

const Navbar: React.FC= () => {
  return (
    <div className="row" id="barra2">
        <div className="col">
            <img id="imglogo2" src={logo} alt = "logo"/>
            <a className="vinculo" href={'x'}>WayLearn</a>
        </div>
    <div className="col" id="botonera2">
        <div className="row">
            <div className="col">
                <a className="vinculo" href={'x'}>Noticias</a>
            </div>
            <div className="col ">
                <a className="vinculo" href={'x'}>Instrucciones</a>
            </div> 
            <div className="col ">
                <a className="vinculo" href={'x'}>Sobre nosotros</a>
            </div>
            <div className="col ">
                <a className="vinculo" href={'x'}>Contactenos</a>
            </div>
        </div>
    </div>
</div>
  );
}

export default Navbar;