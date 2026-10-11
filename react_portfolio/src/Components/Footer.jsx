import { Container } from "react-bootstrap";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer style={{ backgroundColor: "#090909", padding: "10px 0", textAlign: "center", color: "white", fontSize: "14px" }}>
        <Container>
          <p>Copyright @{currentYear} | Website Designed & Developed by YASHODEEP JOSHI</p>
        </Container>
      </footer>
    );
  };