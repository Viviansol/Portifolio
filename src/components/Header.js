import React from "react";
import Typed from "react-typed";




const Header = () => {
    return (
       
        <div className = "header-wrapper" id="header">
            <div className="main-info">
                <h1 className="name ">Vivian Sanches</h1>
                <h1>Full stack Web developer</h1>
                <h2> especialista em:</h2>
                
        <Typed className="typed-text"
        strings={["React", "Angular", "Java e Spring boot", "python", "ruby"]}
        typeSpeed ={80}
        backDelay={60}
        loop
        />
        <a href ="#" class= "btn-contact" >Entre em contato</a>
            </div>
            
        </div>
       
        
       
    )
}

export default Header

