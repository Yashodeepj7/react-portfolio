import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import heroImage from "../assets/home-main.svg"; // Default image

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  // const [projectName, setName] = useState([]);
  // const [projectDisc, setDisc] = useState([]);
  // const [image, setPhoto] = useState('');
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const newData = new FormData();
  //   newData.append('projectName', projectName);
  //   newData.append('projectDisc', projectDisc);
  //   newData.append('image', image);

  //   const config = {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   };

  //   try {
  //     const res = await axios.post('http://localhost:8000/registerproject', newData, config);
  //     console.log("test data",res.data);
  //     alert('Data added successfully!');
  //    // navigate('/view'); // Navigate to the view page
  //   }
  //   catch (error) {
  //     alert('Error adding data:', error);
  //     console.error("Error adding data:", error);
  //   }
  // };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/getproject`) 
      .then((res) => {
        console.log("API Response:", res.data); // Debugging: Check response format
        setProjects(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="div w-100">
      <Container fluid style={{ backgroundColor: "#0a0a0a" }} id="project">
        <Container className="text-center text-white py-1">
          <h2 className="text-center mb-4  text-white">My <span className="purple">Projects</span></h2>

          <p className="mb-4">Here are a few projects I've worked on recently.</p>
          <Row className="justify-content-center cards">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <Col md={4} key={index} className="mb-4 d-flex hover-shadow hover-zoom">
                  <Card className="text-white bg-dark border border-secondary w-100 shadow-lg" style={{ minHeight: "400px" }}>
                    <Card.Img
                      variant="top"
                      src={project.image} // Using default image since API doesn't provide one
                      alt={project.projectName}
                      style={{ height: "200px", objectFit: "cover" }}
                      className="hover-zoom hover-shadow"
                    />
                    <Card.Body className="d-flex flex-column justify-content-between hover-shadow hover-zoom">
                      <div>
                        <Card.Title>{project.projectName || "Untitled Project"}</Card.Title>
                        <Card.Text>{project.projectDisc || "No description available."}</Card.Text>
                      </div>
                      <div>
                       <Button style={{ backgroundColor: "#6b46c1", border: "none" }} className="me-2"> <a style={{ color: 'white' }} className="btn btn-primary text-decoration-none" href={project.githubLink || "Github Link is not available"} target="_blank"  >
                          GitHub
                        </a></Button>
                       <Button style={{ backgroundColor: "#a855f7", border: "none" }}> <a style={{ color: 'white' }} className="btn btn-primary text-decoration-none" href={project.demoLink || "Demo Link not available"} target="_blank" >
                          Demo
                        </a></Button> 
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>Loading projects...</p>
            )}
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Portfolio;
