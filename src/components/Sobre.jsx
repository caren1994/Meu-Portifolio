import React from "react";

import Header from "./Header";

import Footer from "./Footer";
import imagem1 from './imagem/art-pixel.png';
import imagem2 from './imagem/sistema-solar.png';
import imagem3 from './imagem/trybe-hogwarts.png';
import imagem4 from './imagem/trybe-tunes.png';

import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";


class Sobre extends React.Component {
  render() {
    return (
      <section>
        <Header />
<div>
        <div className="tudo-sobre">
          <h2 className="titulo-2">Sobre Mim </h2>
          <h4 className="p-texto-sobre">
            <br/>
            <br/>
            Olá meu nome é Caren e sou apaixonado por tecnologia,
            desenvolvimento <br/>e marcas que trabalhem para contribuir com uma
            melhor interação digital.
            <br />
            Atualmente sou estudante de desenvolvimento WEB FullStack na Trybe e <br/>estou  em busca
            do meu primeiro emprego!
          </h4>
          </div>
          <br />
          <br />
          <br />
          <br />
          <h2 className='titulo-2'>Meus Projetos</h2>
          <div classname="style">
            <Carousel classname='style'>
              <Carousel.Item interval={2000}>
                <div className="d-block w-100">
                <img className="item-1" src={imagem1} alt='projeto-pixel-art'/>
                </div>
                   <button type='button' className="button-carousel" onClick={this.repositoriofund}>Ver Código</button>
               
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <div className="d-flex w-100">
                <img className="item-1" src={imagem3} alt='projeto-trybe-hog'/>
                </div>
                  <button type='button' className="button-carousel" onClick={this.repositoriofund}>Ver Código</button>
                
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <div className="d-flex w-100" >
                <img className="item-1" src={imagem2} alt='projeto-system'/>
               
                </div>
                <button type='button' className="button-carousel" onClick={this.repositoriofront}>Ver Código</button>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <div className="d-block w-100">
                  <img className="item-1" src={imagem4} alt='projeto-trybe-tunes'/>
                
                </div>
                <button type='button' className="button-carousel" onClick={this.repositoriofront}>Ver Código</button>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="footer">
          <Footer />
        </div>
      </section>
    );
  }
}
export default Sobre;
