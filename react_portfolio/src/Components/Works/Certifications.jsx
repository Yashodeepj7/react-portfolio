import { Container, Row, Col, Card } from "react-bootstrap";
import "./Works.css";
import git from "../../assets/git.png"; // Ensure this path is correct
import meta from "../../assets/meta.png"; // Ensure this path is correct
const certificationsData = [
  {
    title: "Meta Front-End Developer",
    provider: "Coursera",
    issued: "July 2024",
    image: meta,
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/VQZTBN6DM35T?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Java Full Stack Developer",
    provider: "Symbiosis, KK Wagh",
    issued: "March 2024",
    image: "https://cdn.educba.com/img/Free-Graphic-Design-Online-Course-Certificate.jpg",
    credentialUrl: "https://your-cert-link.com",
  },
  {
    title: "Git and Github",
    provider: "CodeAcademy",
    issued: "Jan 2024",
    image:git,
    credentialUrl: "https://drive.google.com/file/d/1LElyPvkeUPEyIzjqXeG2KCM8tLEBNZ2-/view?usp=sharing",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section py-5">
      <Container>
        <h2 className="text-center mb-4  text-white">My <span className="purple">Certifications</span></h2>
        <Row>
          {certificationsData.map((cert, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card className="cert-card h-100 text-white">
                <div className="img-container">
                  <Card.Img
                    variant="top"
                    src={cert.image}
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
