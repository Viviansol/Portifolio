import React from 'react'

const services = () => {
    return (
        <div id= "servicos-section" className="servicos">
            <div className="servicos-title"><h1>Serviços</h1></div>
            
            <div className="servicos-list">
            <div className="item">
            <h1>
            Desenvolvimento full stack web
            </h1>
            <p>Desenvolvimento web com as principais tecnologias do mercado</p>
            </div>
            <div className="item"><h1>Escrita de artigos</h1>
            <p>Artigos de alta qualidade para seu blog, com SEO</p>
            </div>
            <div className="item">
            <h1>Tradução</h1>
            <p>Realizo traduções entre os idiomas portugês, inglês e espanhol</p>
            </div>
            </div>
        </div>
    )
}

export default services
