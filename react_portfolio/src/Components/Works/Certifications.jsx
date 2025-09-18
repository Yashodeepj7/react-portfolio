import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Works.css";

export const Certifications = () => {
  const [certificationsData, setCertificationsData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/certifications`)
      .then((res) => setCertificationsData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section id="certifications" className="certifications-section py-5">
      <Container>
        <h2 className="text-center mb-4 text-white">
          My <span className="purple">Certifications</span>
        </h2>
        <p className="mb-4">Here are a few Certifications I've worked on recently.</p>
        <Row>
          {certificationsData.map((cert, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card className="cert-card h-100 text-white">
                <div className="img-container">
                  <Card.Img
                    variant="top"
                    src={cert.imageUrl}
                    alt={`${cert.title} badge`}
                    className="cert-img"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {cert.provider}
                  </Card.Subtitle>
                  <Card.Text>Issued: {cert.issued}</Card.Text>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light btn-sm"
                  >
                    View Certificate
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
