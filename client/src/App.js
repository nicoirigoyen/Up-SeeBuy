import React from 'react'
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
import Register from './components/Register/Register';
import Singin from './components/Singin/Singin';
import CardDetail from './components/CardDetail/CardDetail';
import Post from './components/postProduct/postProduct';


// RUTAS

const App = () => {
  return (
    <div>
  <BrowserRouter>
    <Route exact path="/" component={Landing}/> 
    <Route exact ='/' component= {NavBar} />
    <Route exact path="/products/:id" component={CardDetail}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path='/register' component= {Register}/>
    <Route exact path='/singin' component= {Singin}/>
    
    <Route exact path="/post" component={Post}/>
  </BrowserRouter>
  </div>
);
}

export default App;
