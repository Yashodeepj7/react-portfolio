import { Container, Nav, Navbar } from "react-bootstrap";

export const Navigation = () => {
    return (
      <Navbar expand="lg" className="custom-navbar border border-secondary" fixed="top" style={{ backgroundColor: "#090909" }}>
        <Container>
          <Navbar.Brand href="#home" className="brand fs-2 me-5" style={{ color: "#b84cff", fontWeight: "bold", }}>YJ.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex justify-content-center align w-75 ">
              <Nav.Link href="#home" className="fs-5"style={{ color: "white" }}>Home</Nav.Link>
              <Nav.Link href="#about" className="fs-5"style={{ color: "white" }}>About</Nav.Link>
              <Nav.Link href="#projects" className="fs-5"style={{ color: "white" }}>Projects</Nav.Link>
              <Nav.Link href="#resume" className="fs-5"style={{ color: "white" }}>Resume</Nav.Link>
              <Nav.Link href="#blogs" className="fs-5"style={{ color: "white" }}>Contact</Nav.Link>
            </Nav>
            {/* <Button variant="outline-light" className="github-btn">
              <i className="fab fa-github"></i>
            </Button> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };