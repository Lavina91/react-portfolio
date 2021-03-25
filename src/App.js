import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import NavBar from "./Components/Navbar/Navbar"

import './App.css';

function App() {
  return (
    <Router>
      <>
   
   <NavBar />

      <Route exact path="/" component={About} />
      <Route exact path="about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/portfolio" component={Portfolio} />

      </>
    </Router>
  );
}

export default App;
