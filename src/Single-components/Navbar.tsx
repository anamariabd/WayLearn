import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./Navbar.css";
import logo from "../img/Group 10.png";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-dark">
      <div className="row" id="logo">
        <img id="logo" src={logo} alt="logo" />
      </div>

      <p id="txt-logo"> WayLearn</p>
                            <form className="center-buscar">
                                <div className="row ">
                                    <div className="col width-search">
                                        <input className="form-control" id="search" type="search" placeholder="Buscar"></input>
                                    </div>
                                    <div className="col">
                                        <button className="btn" type="submit">q</button>
                                    </div>
                                </div>
                            </form>
    </div>
  );
};

export default Navbar;
