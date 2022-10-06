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
  repositoriofront=()=>{
    <link to='https://github.com/caren1994'></link>
    // <a className="color-tag"  href='https://github.com/caren1994' target="_blank" rel="noopener noreferrer"></a>

  }
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
          <div classname="style"
          style={{
  display: "block",
  marginLeft: 40,
  width: 800,
  height: 700,
  padding: 30,
}}>
            <Carousel classname='style'>
              <Carousel.Item interval={2000}>
                <div className="d-block w-100">
                <img className="item-1" src={imagem1} alt='projeto-pixel-art'/>
                </div>
                <a className="color-tag-button"  href='https://github.com/caren1994' target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="5.2em" width="10em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
              </a>
               
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <div className="d-flex w-100">
                <img className="item-1" src={imagem3} alt='projeto-trybe-hog'/>
                </div>
                <a className="color-tag-button"  href='https://github.com/caren1994' target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="5.2em" width="10em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
              </a>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <div className="d-flex w-100" >
                <img className="item-1" src={imagem2} alt='projeto-system'/>
               
                </div>
                <a className="color-tag-button"  href='https://github.com/caren1994' target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="5.2em" width="10em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
              </a>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <div className="d-block w-100">
                  <img className="item-1" src={imagem4} alt='projeto-trybe-tunes'/>
                
                </div>
                <a className="color-tag-button"  href='https://github.com/caren1994' target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="5.2em" width="10em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
              </a>
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
