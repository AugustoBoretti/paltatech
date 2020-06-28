import React from "react";
import { Col, Container, Row } from "reactstrap";

const BackedBy = ({ setRef }) => {
  return (
    <div
      className="section section-components"
      data-background-color="dark-blue"
      ref={setRef}
    >
      <Container>
        <Row>
          <Col xs="12">
            <div className="rez-text fs-85 text-center text-success">
              backed by the best
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="3">
            <div className="perspective_image first">
              <div className="image">
                <a href="https://aws.amazon.com/" target="_blank">
                  <div className="front">
                    <img
                      alt="..."
                      src={require("assets/img/backed-by-aws.png")}
                    />
                  </div>
                </a>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="3">
            <div className="perspective_image second">
              <div className="image">
                <a href="https://trello.com/" target="_blank">
                  <div className="front">
                    <img
                      alt="..."
                      src={require("assets/img/backed-by-trello.png")}
                    />
                  </div>
                </a>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="3">
            <div className="perspective_image third">
              <div className="image">
                <a href="https://gsuite.google.com/" target="_blank">
                  <div className="front">
                    <img
                      alt="..."
                      src={require("assets/img/backed-by-gsuite.png")}
                    />
                  </div>
                </a>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="3">
            <div className="perspective_image fourth">
              <div className="image">
                <a href="https://auth0.com/" target="_blank">
                  <div className="front">
                    <img
                      alt="..."
                      src={require("assets/img/backed-by-auth0.png")}
                    />
                  </div>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BackedBy;
