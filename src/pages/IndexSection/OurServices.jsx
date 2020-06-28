import React from "react";
import { Col, Container, Row } from "reactstrap";
import Zoom from "react-reveal/Zoom";

const OurServices = ({ setRef }) => {
  return (
    <div className="section features-7" ref={setRef}>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <h1 className="title">
              <Zoom left cascade>
                Our
              </Zoom>
              <strong className="text-success">
                <Zoom right cascade>
                  Services
                </Zoom>
              </strong>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <h3 className="rez-text text-success fs-50 text-center">
              web
              <br />
              development
            </h3>
            <p className="text-center fs-15">
              A website is the online representation of your business! Doing it
              right can take your business to the next level. We create amazing
              and easy to navigate websites, combining modern and responsive for
              all kinds of devices. If each company has its own essence, why
              should your site be similar to another? We create specialized
              designs for each client, seeking to take their image to another
              level.
            </p>
          </Col>
          <Col md="6" className="middle-align">
            <div className="image-container">
              <img
                alt="..."
                src={require("assets/img/ipad-phone.png")}
                style={{ maxHeight: "40vh" }}
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="4" className="middle-align">
            <div className="image-container">
              <img
                alt="..."
                src={require("assets/img/branding-image.png")}
                style={{ maxHeight: "40vh" }}
              />
            </div>
          </Col>
          <Col md="8">
            <h3 className="rez-text text-success fs-50 text-center">
              branding
            </h3>
            <p className="text-center fs-15">
              We design the corporate identity of your brand to reflect its
              value and build the perception of your customers. We plan and
              execute branding strategies to create solid, memorable brands and
              take your company to another level!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
