/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Col, Container, Row } from "reactstrap";
import Zoom from "react-reveal/Zoom";

const WhyPalta = ({ setRef }) => {
  return (
    <div
      className="section section-basic"
      ref={setRef}
      style={{
        backgroundImage:
          "url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)",
      }}
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <h1 className="title">
              <Zoom left cascade>
                Why
              </Zoom>
              <strong className="text-success">
                <Zoom right cascade>
                  PALTA?
                </Zoom>
              </strong>
            </h1>
            <h4>We hate to brag, but here's some stuff we're awesome at.</h4>
          </Col>
        </Row>
        <div className="section-story-overview">
          <Row>
            <Col md="4">
              <div className="info info-hover">
                <div className="icon icon-primary">
                  <img
                    alt="..."
                    style={{ width: "56px" }}
                    src={require("assets/img/business-head.svg")}
                  />
                </div>
                <h2 className="info-title">
                  Hearing and understanding your startup needs
                </h2>
                <h4 className="description">
                  Our diverse team composed by scientists, developers and
                  designers, are all your startup needs to turn your ideas into
                  solutions!
                </h4>
              </div>
            </Col>
            <Col md="4">
              <div className="info info-hover" style={{ marginTop: "-50px" }}>
                <div className="icon icon-primary">
                  <img
                    alt="..."
                    style={{ width: "56px" }}
                    src={require("assets/img/business-partnership.svg")}
                  />
                </div>
                <h2 className="info-title">Being your partner</h2>
                <h4 className="description">
                  Our company does not aim to be just another number on your
                  contact list. We aim to be a reliable partner, helping you to
                  achieve all the milestones your company has.
                </h4>
              </div>
            </Col>
            <Col md="4">
              <div className="info info-hover">
                <div className="icon icon-success">
                  <div className="icon icon-primary">
                    <img
                      alt="..."
                      style={{ width: "56px" }}
                      src={require("assets/img/business-chart.svg")}
                    />
                  </div>
                </div>
                <h2 className="info-title">Showing why you are the best!</h2>
                <p className="description">
                  We love deeptech companies, but we love more helping them to
                  change the world!
                </p>
                <p className="description">
                  Let us help you showing your public, what your awesome company
                  means.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default WhyPalta;
