import React from "react";
import "./App.css";
import 'bootstrap-material-design'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route } from 'react-router-dom';
import index from './Pages/Index';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Teacher-pages/Home';
import Courses from './Student-pages/Cursos';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={index}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/page/:name/:id?" component={Home} /> {/* Esto es privado */ }
          <Route exact path="/courses" component={Courses} />
        </BrowserRouter>        
    </div>
  );
}

export default App;
