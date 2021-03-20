import React from "react";
import "./App.css";
import 'bootstrap-material-design'
import "@fortawesome/fontawesome-free/css/all.min.css";
import {BrowserRouter, Route} from 'react-router-dom';
import index from './Components/Index';
import login from './Components/Login';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <BrowserRouter>
          <Route exact path="/" component={index}/>
          <Route exact path="/login" component={login}/>
        </BrowserRouter>        
      </div>
    </div>
  );
}

export default App;
