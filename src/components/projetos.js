import { Component } from 'react';


class Cards extends Component {
 constructor(){
     super();

     this.state = {
         criarCards: [{
             id: 0,
             image: '../img/pagina-insta.png',
             title: 'Pagina Instagram',
             descricao:'Desafio de recriar a página do instagram no bootcamp HTML web developer',
             linkGitHub:'https://github.com/Viviansol/pagina-instagram',
             linkSite:'https://viviansol.github.io/pagina-instagram/',
         },
         {
             id: 1,
             image: '../img/pagina-insta.png',
             title: 'Desafio Estrela',
             descricao:'Projeto desenvolvido para o processo seletivo da empresa Zup Innovation',
             linkGitHub:'https://github.com/Viviansol/desafio-estrelas',
             linkSite:'https://viviansol.github.io/desafio-estrelas',

         },
         {
             id: 2,
             image: '../img/pagina-insta.png',
             title: 'Simulador Financiamento',
             descricao:'Projeto desenvolvido duranteo bootcamp do IGTI',
             linkGitHub:'https://github.com/Viviansol/SimuladorFinanciamento',
             linkSite:'https://viviansol.github.io/SimuladorFinanciamento/',

         },
         {
            id: 3,
            image: '../img/pagina-insta.png',
            title: 'Simulador Financiamento',
            descricao:'Projeto desenvolvido duranteo bootcamp do IGTI',
            linkGitHub:'https://github.com/Viviansol/SimuladorFinanciamento',
            linkSite:'https://viviansol.github.io/SimuladorFinanciamento/',

        }]
     }
 }   

    render(){
    return(
        
        <div className= "projeto-cards" id="portifolio">
            <div id="projetos-section" className="title-projects"><h1>Projetos</h1></div>
        <div className="container-cards " >
        {this.state.criarCards.map((projeto)=>(
            <div className="card" key={projeto.id}>
            <img className="card-img-top" src={projeto.image} alt="Imagem do projeto"/>
            <div className="card-body">
                <h5 className="card-title">{projeto.title}</h5>
                <p className="card-text">{projeto.descricao}</p>
            </div>
            <div className="card-body" >
                <a href={projeto.linkGitHub} className="card-link">Acesse GitHub</a>
                <a href={projeto.linkSite} className="card-link">Acesse ao site</a>
            </div>
        </div>
        ))}
        
        </div>
     </div>
    )
}
}

export default Cards;