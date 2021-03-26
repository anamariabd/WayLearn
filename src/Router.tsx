import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Index from './Components/Index'

class Router extends Component{

    render(){
        
        return(
            <BrowserRouter>
    
            <Switch>
            
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Index" component={Index} />
              
            </Switch>
     
  
          </BrowserRouter>
        );
    }
}

export default Router;