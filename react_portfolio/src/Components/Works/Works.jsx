import React from "react";
import Portfolio from "../Portfolio";
import { Container } from "react-bootstrap";
import { Certifications } from "./Certifications";

export const Works = () =>{
    return(
        <>
         <Container fluid style={{ backgroundColor: "#0a0a0a" }}>
          <Container className="text-center text-white py-5">
          <h2 className="mb-3">
            My Recent <span className="purple">Works</span>
          </h2>
          </Container>
          <Portfolio />
          <Certifications />
          </Container>
          </>
    )
}