import React from "react";
import "./App.css";
import 'bootstrap-material-design'
import "@fortawesome/fontawesome-free/css/all.min.css";
import {BrowserRouter, Route} from 'react-router-dom';
import index from './Components/Index';
import login from './Components/Login';
import registro from './Components/Register';
import Home from './Single-components/Home/Home'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={index}/>
          <Route exact path="/login" component={login}/>
          <Route exact path="/register" component={registro} />
          <Route exact path="/Home" component={Home}/>
        </BrowserRouter>        
    </div>
  );
}

export default App;
