import React from "react";
import { Col, Container, Row } from "reactstrap";

const TestNewSection = ({ right }) => {
  return (
    <div className="section features-7">
      <Container>
        <Row>
          {right && <Col md="6" />}
          <Col md="6">
            <div className="image-container">
              <img
                alt="..."
                src={require("assets/img/ipad3.png")}
                style={{ maxHeight: "40vh" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TestNewSection;
