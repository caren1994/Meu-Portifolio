import React from "react";
import {  Route, Routes } from 'react-router-dom';

import Footer from "./components/Footer";

import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Tecnologias from "./components/Tecnologias";

class App extends React.Component {
  render() {
    return (
      <div>
        
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/header" component={Header} />
          <Route exact path="/sobre" component={Sobre} />
          <Route exact path="/tecnologias" component={Tecnologias} />
          <Footer />
        </Routes>
       
      </div>
    );
  }
}

export default App;
