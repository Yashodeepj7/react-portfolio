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
              I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              <br /><br />
              I am fluent in classics like <i><b className="purple">C++, Javascript and Go.</b></i>
              <br /><br />
              My field of Interest's are building new <i><b className="purple">Web Technologies and Products</b></i> and also in areas related to <i><b className="purple">Blockchain.</b></i>
              <br /><br />
              Whenever possible, I also apply my passion for developing products with <b className="purple">Node.js</b> and <i><b className="purple">Modern Javascript Library and Frameworks</b></i> like <i><b className="purple">React.js and Next.js</b></i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar-img" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
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
          </Col>
        </Row>
      </Container>
     
    </Container>
    <Container style={{  backgroundColor: "#000000"}}>
         <div className="tech bg-dark" style={{  backgroundColor: "#000000"}}>
      <h1 className="project-heading">
  Professional <strong className="purple">Skillset </strong>
</h1>
<Techstack />

      </div>
    </Container>

    </div>
    </>
  );
}

export default Home2;
