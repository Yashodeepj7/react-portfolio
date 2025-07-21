import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./About.css"; // 👈 External CSS for custom styles
import Techstack from './Techstack'
function Home2() {
  return (
    <>
    <div className="div">
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
           <p className="home-about-body">
  I fell in love with programming and have been exploring and building ever since! 🚀
  <br /><br />
  I’m confident in working with technologies like <i><b className="purple">HTML, CSS, JavaScript, Java, and React.</b></i>
  <br /><br />
  My areas of interest include creating innovative <i><b className="purple">Web Applications and Full Stack Projects</b></i>, and I'm also passionate about <i><b className="purple">learning new frameworks and tools.</b></i>
  <br /><br />
  Whenever possible, I love building real-world projects using <b className="purple">MERN Stack</b> and modern tools like <i><b className="purple">Bootstrap, Tailwind CSS, and Firebase</b></i>.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar-img" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          {/* <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/soumyajit4419" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://twitter.com/Soumyajit4419" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/soumyajit4419/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.instagram.com/soumyajit4419" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col> */}
        </Row>
      </Container>
     
    </Container>
    <div style={{  backgroundColor: "#000000"}}>
      <Container>
        <h1 className="project-heading py-3 ">
            <span className="text-light">My </span>
  <span className="purple">Techstack </span>
</h1> 
</Container>
    <Container fluid className="m-0 p-0 "style={{  backgroundColor: "#000000"}}>
    <div className="scroll-fade-container">
  <div className="scroll-inner-center-wrapper">
    <div className="logo-row">
      <Techstack />
    </div>
  
  </div>
</div>

  </Container>
</div>
    </div>
    </>
  );
}

export default Home2;
