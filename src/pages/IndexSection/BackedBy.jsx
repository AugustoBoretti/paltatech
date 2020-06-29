import React from "react";
import { Col, Container, Row } from "reactstrap";
import Zoom from "react-reveal/Zoom";

const BackedBy = ({ setRef }) => {
  return (
    <div
      className="section section-basic"
      data-background-color="dark-blue"
      style={{
        backgroundImage:
          "url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)",
      }}
      ref={setRef}
      aria-valuetext="Backed by the best!"
    >
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <h1 className="title">
              <Zoom left cascade>
                Backed by
              </Zoom>
              <strong className="text-success">
                <Zoom right cascade>
                  THE BEST!
                </Zoom>
              </strong>
            </h1>
            <h4>
              It is scientifically proven that performing tasks with the correct
              tools reduces time, costs and increases quality. This is something
              we take seriously, and it is the reason why we work with leading
              companies in every need.
            </h4>
            <h4>What helps us achieve the highest quality standards?</h4>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="3">
            <div className="perspective_image first">
              <div className="image">
                <a
                  href="https://aws.amazon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <a
                  href="https://trello.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <a
                  href="https://gsuite.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <a
                  href="https://auth0.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
