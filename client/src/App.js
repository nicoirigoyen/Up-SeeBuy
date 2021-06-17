import React from 'react'
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
import Register from './components/Register/Register';
import Singin from './components/Singin/Singin';


// RUTAS

export function App(){
  return (
    <div>
  <BrowserRouter>
    <Route exact path="/" component={Landing}/>
    <Route exact ='/home' component= {NavBar} />
    <Route exact path="/home" component={Home}/>
    <Route exact path='/home/register' component= {Register}/>
    <Route exact path='/home/singin' component= {Singin}/>
  </BrowserRouter>
  </div>
);
}

export default App;
