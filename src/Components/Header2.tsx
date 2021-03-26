import React from 'react';
import 'bootstrap-material-design'
import 'jquery'
import logo from '../img/Group 10.png'


const Header2: React.FC<{titulo:string}> = ({titulo}) => {
  return (
    <div className="row">
        <div className="col">
            <div className="row">
                <img id="imglogo1" src={logo} alt="logo"/>
            </div>
            <div className="row" >
                <div className="col-8" id="barra1">
                    <p id="txt">{titulo}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header2;