import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Tecnologias extends React.Component {

  
  render() {

    return (
      <div>
        <Header />
       
        <div>
       <h2 className="titulo">Skills</h2> 
       <div className="todos-icones">
<div className="icone">
<img   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="card-img-top mt-4" alt="ícone HTML"/>
<p>HTML5</p>
</div>

<div className="icone">
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" class="card-img-top mt-4" alt="ícone CSS"/>
<p> CSS3</p>
</div>

<div className="icone">
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="card-img-top mt-4" alt="ícone JavaScript"/>
  <p>JavaScript</p>
</div>

<div className="icone">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" class="card-img-top mt-4" alt="ícone React"/>
  <p>React</p>
</div>
</div>
<div className="todos-icones-2">
<div className="icone">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" class="card-img-top mt-4" alt="ícone Jest"/>
<p>Jest</p>
</div>

<div className="icone">
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" class="card-img-top mt-4" alt="ícone VSCode"/>
<p>VsCode</p>
</div>

<div className="icone">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" class="card-img-top mt-4" alt="ícone Node js"></img>
<p>Node JS</p>
</div>

<div className="icone">
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" class="card-img-top mt-4" alt="ícone Bootstrap"/>
<p>Bootstrap</p>
</div>
</div>


<h3 className="titulo-idi">Idiomas</h3>
<p className="p-informacao-idioma">Português, English (intermediate).</p><br/><br/><br/><br/>
        </div>
        <div className="footer">
        <Footer/>
        </div>
      </div>
    );
  }
}
export default Tecnologias;