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
import { Container, Row, Col } from "reactstrap";
import Zoom from "react-reveal/Zoom";

const WhoWeAre = ({ setRef }) => {
  return (
    <div className="section section-basic" ref={setRef}>
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <h1 className="title">
              <Zoom left cascade>
                Who
              </Zoom>
              <strong className="text-primary">
                <Zoom right cascade>
                  WE ARE?
                </Zoom>
              </strong>
            </h1>
          </Col>
        </Row>
        <div className="section-story-overview">
          <Row>
            <Col xs="6">
              <div
                className="image-container image-left"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/bg31.jpg") + ")",
                }}
              >
                <p className="blockquote blockquote-info">
                  "Over the span of the satellite record, Arctic sea ice has
                  been declining significantly, while sea ice in the
                  Antarctichas increased very slightly" <br></br>
                  <br></br>
                  <small>-NOAA</small>
                </p>
              </div>
            </Col>
            <Col xs="6">
              <div
                className="image-container image-right"
                style={{
                  backgroundImage: "url(" + require("assets/img/p10.jpg") + ")",
                }}
              />
              <h3>We are PALTA!</h3>
              <p>
                A software company that aims to bring you web solutions
                understanding digitization needs of deep tech startups and VC.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default WhoWeAre;
