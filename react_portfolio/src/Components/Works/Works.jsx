import React, { useState } from "react";
import Portfolio from "../Portfolio";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import { Certifications } from "./Certifications";

export const Works = () => {
  const [activeTab, setActiveTab] = useState("portfolio");

  return (
    <Container fluid style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
      <Container className="text-center text-white py-5">
        <h2 className="mb-3">
          My Recent <span className="purple">Works</span>
        </h2>

        {/* Toggle Buttons */}
        <ButtonGroup className="mb-4">
          <Button
            variant={activeTab === "portfolio" ? "light" : "outline-light"}
            onClick={() => setActiveTab("portfolio")}
          >
            Portfolio
          </Button>
          <Button
            variant={activeTab === "certifications" ? "light" : "outline-light"}
            onClick={() => setActiveTab("certifications")}
          >
            Certifications
          </Button>
        </ButtonGroup>

        {/* Conditional Rendering */}
        {activeTab === "portfolio" && <Portfolio />}
        {activeTab === "certifications" && <Certifications />}
      </Container>
    </Container>
  );
};
