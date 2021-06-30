import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route } from 'react-router-dom';
import index from './Pages/Index';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={index}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/page/:name/:id?" component={Home} />
        </BrowserRouter>        
    </div>
  );
}

export default App;
