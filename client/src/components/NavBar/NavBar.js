import React from "react";
import "./NavBar.css";


export default function NavBar() {
  return (
    <div className="navbar">
      <ul className="list">
        
        <li className="titulo">
          <a href="/home">Up-SeeBuy</a>
        </li>
        
        <li className="navbarItem">
          <a  href="/home/singin">Ingresar</a>
        </li>

        <li className="navbarItem2">
          <a href="/home/register">Registrarse</a>
        </li>
      </ul>
    </div>
  );
}
