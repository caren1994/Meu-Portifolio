import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../tecnologia.css';

class Tecnologias extends React.Component {

  
  render() {

    return (
      <section>
        <Header />
       
      
       <h2 className="titulo">Skills</h2> 
       <div className="todos-icones">
<figure className="icone">
<img   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="card-img-top mt-4" alt="ícone HTML"/>
<p>HTML5</p>
</figure>

<figure className="icone">
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" class="card-img-top mt-4" alt="ícone CSS"/>
<p> CSS3</p>
</figure>

<figure className="icone">
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="card-img-top mt-4" alt="ícone JavaScript"/>
  <p>JavaScript</p>
</figure>

<figure className="icone">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" class="card-img-top mt-4" alt="ícone React"/>
  <p>React</p>
</figure>
</div>
<div className="todos-icones-2">
<figure className="icone">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" class="card-img-top mt-4" alt="ícone Jest"/>
<p>Jest</p>
</figure>

<figure className="icone">
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" class="card-img-top mt-4" alt="ícone VSCode"/>
<p>VsCode</p>
</figure>

<figure className="icone">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" class="card-img-top mt-4" alt="ícone Node js"></img>
<p>Node JS</p>
</figure>

<figure className="icone">
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" class="card-img-top mt-4" alt="ícone Bootstrap"/>
<p>Bootstrap</p>
</figure>
</div>

<section>

<h3 className="titulo-id">Idiomas</h3>
<p className="p-informacao-idioma">Português, English (intermediate).</p><br/><br/><br/><br/>
</section>
        

        <Footer/>
        
      </section>
    );
  }
}
export default Tecnologias;