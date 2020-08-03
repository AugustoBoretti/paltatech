import React from "react";
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";
import Zoom from "react-reveal/Zoom";

const OurWorks = ({ setRef }) => (
  <div
    className="section section-basic isometric-section"
    ref={setRef}
    style={{
      backgroundImage:
        "url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)",
    }}
    aria-valuetext="Our works"
  >
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="12">
          <h1 className="title">
            <Zoom left cascade>
              Our
            </Zoom>
            <strong className="text-success">
              <Zoom right cascade>
                Works
              </Zoom>
            </strong>
          </h1>
        </Col>
      </Row>
      <div className="cards">
        <Row>
          <Col sm="3" xl="4" />
          <Col
            sm="6"
            xl="4"
            onClick={() => window.open("https://michroma.co")}
            className="clickable"
          >
            <Card
              className="card-blog card-background"
              data-animation="zooming"
            >
              <div
                className="full-background"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/michroma.jpg") + ")",
                }}
              />
              <CardBody>
                <div className="content-bottom">
                  <h6 className="card-category">Biotechnology</h6>
                  <a
                    href="https://michroma.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardTitle tag="h3">MICHROMA</CardTitle>
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  </div>
);

export default OurWorks;
