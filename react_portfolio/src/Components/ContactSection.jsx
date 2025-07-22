import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from 'axios'

export const ContactSection = () => {
   const [contact, setUser] = useState([]);
  const [newUser, setNewUser] = useState(
    { 
      name: "",
      email: "",
      message:""
     });

     const handleChange = (e) => {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });//e.target.name will take the name of the input field and e.target.value will take the value of the input field
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`, newUser);
        setUser([...contact, response.data]); // Update UI
        
        setNewUser({ name: "", email: "" ,message:""});
      } catch (error) {
        console.error("Error adding user:", error);
      }
    };
  return (
      <div className="contact-section" style={{ backgroundColor: "#0b1622", padding: "50px 0", textAlign: "center" }}>
        <Container>
          <h2 style={{ color: "white", marginBottom: "20px" }}>
            Contact <span style={{ color: "#00eaff" }}>Us</span>
          </h2>
          <div className="contact-form" style={{ backgroundColor: "#4a4a4a", padding: "30px", borderRadius: "10px", maxWidth: "500px", margin: "0 auto" }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label style={{ color: "white" }}>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="name" value={newUser.name} onChange={handleChange}style={{ backgroundColor: "#6c6c6c", color: "white" }}  required/>
              </Form.Group>
              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label style={{ color: "white" }}>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name="email" value={newUser.email} onChange={handleChange} style={{ backgroundColor: "#6c6c6c", color: "white" }} />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label style={{ color: "white" }}>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" name="message" value={newUser.message} onChange={handleChange} style={{ backgroundColor: "#6c6c6c", color: "white" }} />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3" style={{ width: "100%" }}>
                Submit
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    );
  };
  
