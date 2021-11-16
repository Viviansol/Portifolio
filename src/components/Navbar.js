import React from "react";
import logo from "../logo.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-default">
            <div className ="container">
        <a className="navbar-brand" href="#"><img className = "logo" src ={logo} alt = "my logo" ></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style ={{color: '#fff'}}/> 
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#header">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutme-section">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicos-section">Serviços</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projetos-section">Projetos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contato-section">Entre em contato</a>
            </li>
           </ul>
          
        </div>
        </div>
      </nav>
    )
}

export default Navbar
