import React from "react";
import "./App.css";
import 'bootstrap-material-design'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route } from 'react-router-dom';
//import {AuthRoute} from '../src/Private-routes/AuthRoute'
import index from './Components/Index';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Teacher-pages/Home';
import Courses from './Student-pages/Cursos';
import Sociales from './Student-pages/Sociales';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={index}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/sociales" component={Sociales} />
        </BrowserRouter>        
    </div>
  );
}

export default App;
