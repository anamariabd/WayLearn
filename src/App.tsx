import React from "react";
import "./App.css";
import Index from "./Components/Index";
import 'bootstrap-material-design'
import "@fortawesome/fontawesome-free/css/all.min.css";

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
