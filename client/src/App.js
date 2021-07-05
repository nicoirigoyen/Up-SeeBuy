import React from 'react'
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
import Register from './components/Register/Register';
import Singin from './components/Singin/Singin';
import CardDetail from './components/CardDetail/CardDetail';
import SearchBar from './components/SearchBar/SearchBar';


// RUTAS

const App = () => {
  return (
    <div>
  <BrowserRouter>
    <Route exact path="/" component={Landing}/> 
    <Route exact ='/' component= {NavBar} />
    <Route exact path="/home" component={Home}/>
    <Route exact path='/register' component= {Register}/>
    <Route exact path='/singin' component= {Singin}/>
    <Route path="/products/:id" component={CardDetail}/>
  </BrowserRouter>
  </div>
);
}

export default App;
