import {Component} from 'react';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Particles from "react-tsparticles";
import About from "./components/about";
import Services from "./components/services";
import Contato from "./components/Contato";
import Projetos from "./components/projetos";
import Footer from "./components/footer";
export default class App extends Component {

  render(){
    
    return(
      <>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Projetos/> 
        <Contato/>
        <Footer/>
        <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#00000",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 5,
              opacity: 0.5,
              size: 40,
            },
            push: {
              quantity: 5,
            },
            repulse: {
              distance: 50,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "cyan",
            distance: 100,
            enable: true,
            opacity: 0.6,
            width: 2,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 900,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 2,
          },
        },
        detectRetina: true,
      }}
      />
  
      </>
    );
  }
}
