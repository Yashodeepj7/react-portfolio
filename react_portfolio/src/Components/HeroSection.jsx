import { Container, Row, Col } from "react-bootstrap";
import heroImage from "../assets/home-main.svg";
import { useEffect, useState } from "react";
import axios from "axios";

export const HeroSection = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/getcontact")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="hero-section text-white position-relative d-flex align-items-center" style={{ height: "100vh", width: "100vw", overflow: "hidden", backgroundColor: "#090909"}}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className="mb-3">
              Hi There! <span className="wave">👋</span>
            </h1>
            <h1 className="mb-3">
              I'M{" "}
              <span className="fw-bold" style={{ color: "#b84cff" }}>
                Yashodeep Joshi
              </span>
            </h1>
            <h4 className="mb-0" style={{ color: "#b84cff" }}>
              Freelancer | MERN Developer
            </h4>
          </Col>

          {/* This col is hidden on small screens, image is absolutely positioned below */}
          <Col md={6} className="d-none d-md-block"></Col>
        </Row>

        {/* Image: Absolutely positioned at bottom-right */}
        <img
          src={heroImage}
          alt="Hero"
          className="position-absolute d-none d-md-block"
          style={{ right: "10%", bottom: "10%", width: "40%" }}
        />

        {/* Image: Visible on small screens, centered */}
        <div className="d-block d-md-none text-center mt-4">
          <img src={heroImage} alt="Hero Small" className="img-fluid" />
        </div>
      </Container>
    </div>
  );
};
