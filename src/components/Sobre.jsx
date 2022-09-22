import React from "react";

import Header from "./Header";

import Footer from "./Footer";
import imagem1 from './imagem/pixel-art.jpeg';
import imagem2 from './imagem/system.jpeg';
import imagem3 from './imagem/trybe-hog.jpeg';
import imagem4 from './imagem/trybe-tunes.jpeg';

import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";


class Sobre extends React.Component {
  render() {
    return (
      <section>
        <Header />

        <div>
          <h2 className="titulo-2">Sobre Mim </h2>
          <h4 className="p-informacao-2">
            Olá meu nome é Caren e sou apaixonado por tecnologia,
            desenvolvimento e marcas que trabalhem para contribuir com uma
            melhor interação digital.
            <br />
            Atualmente sou estudante de desenvolvimento WEB FullStack em busca
            do meu primeiro emprego!
          </h4>
          <br />
          <br />
          <br />
          <br />
          <h2>Meus Projetos</h2>
          <div
            classname="style"
            style={{
              display: "block",
              marginLeft: 40,
              width: 500,
              height: 400,
              padding: 30,
            }}
          >
            <Carousel>
              <Carousel.Item interval={2000}>
                <div className="d-block w-100">
                <img className="item-1" src={imagem1} alt='projeto-pixel-art'/>
                  <Carousel.Caption> <button type='button' className="button-carousel" onClick={this.repositoriofund}>Ver Código</button></Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <div className="d-flex w-100">
                <img className="item-1" src={imagem3} alt='projeto-trybe-hog'/>
                  <Carousel.Caption><button type='button' className="button-carousel" onClick={this.repositoriofund}>Ver Código</button></Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <div className="d-flex w-100" >
                <img className="item-1" src={imagem2} alt='projeto-system'/>
                 <Carousel.Caption> <button type='button' className="button-carousel" onClick={this.repositoriofront}>Ver Código</button></Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <div className="d-block w-100">
                  <img className="item-1" src={imagem4} alt='projeto-trybe-tunes'/>
                  <Carousel.Caption><button type='button' className="button-carousel" onClick={this.repositoriofront}>Ver Código</button></Carousel.Caption>
                </div>
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
