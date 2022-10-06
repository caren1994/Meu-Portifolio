import React from "react";
import {  Route, Switch } from 'react-router-dom';

import Footer from "./components/Footer";


import Home from "./components/Home";
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Tecnologias from "./components/Tecnologias";

class App extends React.Component {
  render() {
    return (
      <div>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/header" component={Header} />
          <Route exact path="/sobre" component={Sobre} />
          <Route exact path="/tecnologias" component={Tecnologias} />
          <Footer />
        </Switch>
       
      </div>
    );
  }
}

export default App;
