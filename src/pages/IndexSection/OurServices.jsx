import React from "react";
import { Col, Container, Row } from "reactstrap";
import Zoom from "react-reveal/Zoom";

const OurServices = ({ setRef }) => {
  const { innerWidth: windowScreen } = window;

  return (
    <div
      className="section section-basic"
      ref={setRef}
      style={{
        backgroundImage:
          "url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)",
      }}
      aria-valuetext="Our Services"
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
                  Services
                </Zoom>
              </strong>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <h3 className="rez-text text-success fs-50 text-center">
              <div>web</div>
              <div style={{ marginTop: "-25px" }}>development</div>
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
            <div
              className="image-container"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                alt="..."
                src={require("assets/img/ipad-phone.png")}
                style={{ width: "75%" }}
              />
            </div>
          </Col>
        </Row>
        <div style={{ position: "absolute", top: "30%" }}>
          <img
            alt="..."
            src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg"
            style={{ opacity: 0.05, width: "60%" }}
          />
        </div>
        <div style={{ position: "absolute", bottom: "10%", left: "40%" }}>
          <img
            alt="..."
            src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg"
            style={{ opacity: 0.05, width: "30%" }}
          />
        </div>
        <div style={{ position: "absolute", right: "10%" }}>
          <img
            alt="..."
            src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg"
            style={{ opacity: 0.05 }}
          />
        </div>
        {windowScreen >= 768 ? (
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
                execute branding strategies to create solid, memorable brands
                and take your company to another level!
              </p>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col md="8">
              <h3 className="rez-text text-success fs-50 text-center">
                branding
              </h3>
              <p className="text-center fs-15">
                We design the corporate identity of your brand to reflect its
                value and build the perception of your customers. We plan and
                execute branding strategies to create solid, memorable brands
                and take your company to another level!
              </p>
            </Col>
            <Col md="4" className="middle-align">
              <div className="image-container">
                <img
                  alt="..."
                  src={require("assets/img/branding-image.png")}
                  style={{ maxHeight: "40vh" }}
                />
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default OurServices;
