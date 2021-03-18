import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Navbar: React.FC= () => {
  return (
    <div className="row" id="barra2">
    <div className="col">
        <a  className="vinculo" href={'x'}>WayLearn</a>
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