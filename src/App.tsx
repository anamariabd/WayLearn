import React from "react";
import "./App.css";
import Index from "./Components/Index";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Index />
        <div className="row" id="footer">Waylearn official</div>
      </div>
    </div>
  );
}

export default App;
