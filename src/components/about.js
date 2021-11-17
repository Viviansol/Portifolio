import React from "react";
import foto from "../foto.jpg";


const about = () => {
    return (
        <div className= "aboutme-section" id = "aboutme">
            <div className="myphoto "><img className="myphoto" src={foto} alt="me"></img></div>
            <div className="about-info">
                
                    <p>Sobre</p>
                    <h1>Sou desenvolvedora full stack</h1>
                    <p>Trabalho tanto no front end quanto no back end, e estudo as principais tecnologias de cada área.
                        Sou estudante do curso Certified Tech Developer, por meio de uma bolsa de estudos oferecida pela Digital House 
                        em parceria com o Mercado Livre e a Globant. Também estou realizando dois bootcamps no Instituto de gestão e tecnologia
                        da Informação como bolsista. Até o momento já estudei conceitos como Api, Angular, React, Git , e muitos outros. 
                        Sou poliglota, completamente apaixonada por idiomas e falo inglês, espanhol e japonês, tendo realizado vários trabalhos de tradução.
                   </p>
                
            </div>
        </div>
    )
}

export default about
