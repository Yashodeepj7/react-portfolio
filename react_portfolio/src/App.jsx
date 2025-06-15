import React from "react";
import { Navbar, Nav, Container, Button, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

import {Navigation} from "./Components/NavbarSection";
import {HeroSection} from "./Components/HeroSection";
import {ContactSection} from "./Components/ContactSection";
import {Footer} from "./Components/Footer";
import Portfolio from "./Components/Portfolio";
import About from './Components/About'




const App = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <About />
      <Portfolio />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
