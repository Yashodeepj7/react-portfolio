import { Container, Nav } from "react-bootstrap";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-container shadow-lg">
        <div className="nav-logo" href="#home">YJ</div>
        <Nav className="nav-links d-flex justify-content-center align-items-center">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#works">Work</Nav.Link>
          <Nav.Link href="https://showcase.talenlio.com/w/Yashodeep-Yogesh-Joshi-17895">Resume</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </div>
    </div>
  );
};
