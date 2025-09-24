import { Container, Row, Col } from "react-bootstrap";
import heroImage from "../assets/home-main.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import "./Hero.css"; // Make sure this CSS file exists
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import resume from "../assets/Yashodeep-Joshi-CV.pdf"
export const HeroSection = () => {
  const [user, setUser] = useState([]);
  const titles = ["Freelancer", "MERN Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // index in titles
  const [subIndex, setSubIndex] = useState(0); // index in current word
  const [deleting, setDeleting] = useState(false);



  useEffect(() => {
    if (!deleting && subIndex === titles[index].length + 1) {
      setTimeout(() => setDeleting(true), 1000); // pause before deleting
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 70 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  useEffect(() => {
    setText(titles[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <div
      id="home"
      className="hero-section text-white position-relative d-flex align-items-center"
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "#090909",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left side text content */}
          <Col md={5} className="text-center text-md-start px-5">
            <h1 className="mb-3">
              Hi There! <span className="wave">👋</span>
            </h1>
            <h1 className="mb-3">
              I'M{" "}
              <span className="fw-bold" style={{ color: "#b84cff" }}>
                Yashodeep Joshi
              </span>
            </h1>
            <h1 className="mb-0">
              <span className="typewriter-text">{text}</span>
            </h1>
                <div className="social-container">
      <a href="https://www.facebook.com/yashodeep.joshi.7?rdid=Oein82x9kKXKGwDL&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FQiXuBLm9qXQerrK4%2F#" target="_blank" className="social-icon">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/mr_yasho_101/profilecard/?igsh=MnZoaWZrYWFxdzM1" target="_blank" className="social-icon">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/in/yashodeep-joshi-ba9295244/" target="_blank" className="social-icon">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/Yashodeepj7" target="_blank" className="social-icon">
        <FaGithub />
      </a><br /><br />
      <a href={resume} target="_blank" className="resume-btn">
        My Resume
      </a>
    </div>
          </Col>

          {/* Right side Lottie animation */}
         {/* Right side Lottie animation */}
<Col md={7} className="d-flex justify-content-center">
  <DotLottieReact
    src="https://lottie.host/9730ac13-9ed4-4b73-894d-8be8ac862536/yuklmpW0JU.lottie"
    loop
    autoplay
    style={{ width: "100%", maxWidth: "500px" }} // Responsive size
  />
</Col>

        </Row>

        {/* Image: Visible on small screens, centered
        <div className="d-block d-md-none text-center mt-4">
          <img src={heroImage} alt="Hero Small" className="img-fluid" />
        </div> */}
      </Container>
    </div>
  );
};
