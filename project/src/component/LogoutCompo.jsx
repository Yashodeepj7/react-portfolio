import { Container, Button, Card } from "react-bootstrap";

export const LogoutForm = ({ onLogout }) => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card style={{ width: "350px" }} className="p-4 shadow">
        <h4 className="text-center mb-3">Confirm Logout</h4>
        <p className="text-center">Are you sure you want to sign out?</p>
        <div className="d-flex justify-content-between">
          <Button variant="danger" onClick={() => onLogout(true)}>Yes, Logout</Button>
          <Button variant="secondary" onClick={() => onLogout(false)}>Cancel</Button>
        </div>
      </Card>
    </Container>
  );
};
