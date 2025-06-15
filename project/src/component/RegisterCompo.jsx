import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
export const RegisterForm = ({ onRegister }) => {
  const [fname, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/auth/register", {fname, email, password})
    .then((result) => {console.log("Data Send : ",result)
    onRegister();}
    )

    .catch((error) => console.error("Error:", error));
  }
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", marginTop: "10px" }}>
      <Card style={{ width: "350px", position: "static" }} className="p-4 shadow">
        <h4 className="text-center mb-3">Register</h4>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" onChange={(e)=> setName(e.target.value)} required />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}required />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" onChange={(e)=> setPassword(e.target.value)} required />
          </Form.Group>
          
          {/* <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" required />
          </Form.Group> */}

          <Button
            variant="primary"
            type="submit"
            className="w-100"
           // onClick={onRegister} // Call onRegister function to switch to the dashboard
          >
            Register
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
