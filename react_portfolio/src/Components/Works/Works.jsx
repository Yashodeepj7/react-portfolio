import React, { useState } from "react";
import Portfolio from "../Portfolio";
import { Container } from "react-bootstrap";
import { Certifications } from "./Certifications";

export const Works = () => {
  const [activeTab, setActiveTab] = useState("portfolio");

  const buttonStyle = (tab) => ({
    borderRadius: "50px",
    padding: "10px 25px",
    border: "2px solid white",
    backgroundColor: activeTab === tab ? "#ffffff" : "transparent",
    color: activeTab === tab ? "#000000" : "#ffffff",
    margin: "0 10px",
    transition: "all 0.3s ease-in-out",
  });

  return (
    <Container fluid style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
      <Container className="text-center text-white py-5">
        <h2 className="mb-4">
          My Recent <span className="purple">Works</span>
        </h2>

        {/* Capsule Buttons */}
        <div className="d-flex justify-content-center mb-5 flex-wrap">
          <button
            style={buttonStyle("portfolio")}
            onClick={() => setActiveTab("portfolio")}
          >
            Portfolio
          </button>
          <button
            style={buttonStyle("certifications")}
            onClick={() => setActiveTab("certifications")}
          >
            Certifications
          </button>
        </div>

        {/* Conditional Rendering */}
        {activeTab === "portfolio" && <Portfolio />}
        {activeTab === "certifications" && <Certifications />}
      </Container>
    </Container>
  );
};
