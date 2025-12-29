import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";
import "./Navigation.css";

export const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="nav-wrapper">
      <Navbar
        expand="md"
        expanded={expanded}
        className="nav-container shadow-lg"
      >
        {/* Logo */}
        <Navbar.Brand href="#home" className="nav-logo">
          YJ
        </Navbar.Brand>

        {/* Toggle Button (only visible on mobile) */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
          className="text-white border-0"
        />

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links ms-auto text-center">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link href="#works" onClick={() => setExpanded(false)}>
              Work
            </Nav.Link>
            <Nav.Link
              href="https://showcase.talenlio.com/w/Yashodeep-Yogesh-Joshi-17895"
            
              onClick={() => setExpanded(false)}
            >
              Resume
            </Nav.Link>
            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
