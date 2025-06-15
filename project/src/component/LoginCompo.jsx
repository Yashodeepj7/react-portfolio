import { Container, Form, Button, Card } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export const LoginForm = ({ onLogin, onNavigateToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user"); // Default role

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Data:", { email, password, userType });
    axios.post("http://localhost:8000/auth/login", { email, password, userType })
      .then((result) => {
        console.log("Data Send to login: ", result.data);
        onLogin(); // Navigate to dashboard ya kuch bhi
      })
      .catch((error) => {
        console.error(error);
        alert("Invalid credentials");
      });
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", marginTop: "10px" }}>
      <Card style={{ width: "350px", position: "static" }} className="p-4 shadow">
        <h4 className="text-center mb-3">Login</h4>
        <Form onSubmit={handleLogin}> 
          
          {/* Role Select */}
          <Form.Group className="mb-3">
            <Form.Label>Select Role</Form.Label>
            <Form.Select value={userType} onChange={(e) => setUserType(e.target.value)} required>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
            </Form.Select>
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>

          {/* Login Button */}
          <Button
            variant="primary"
            type="submit"
            className="w-100 mb-2"
          >
            Login
          </Button>
          
          {/* Register Navigation */}
          <Button
            variant="link"
            className="w-100 text-center"
            onClick={onNavigateToRegister}
          >
            Don't have an account? Register
          </Button>

        </Form>
      </Card>
    </Container>
  );
};
