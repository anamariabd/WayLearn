import React from "react";
import "./App.css";
import 'bootstrap-material-design'
import "@fortawesome/fontawesome-free/css/all.min.css";
import {BrowserRouter, Route} from 'react-router-dom';
import index from './Components/Index';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={index}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/Home/:TypeUser" component={Home}/>
        </BrowserRouter>        
    </div>
  );
}

export default App;
