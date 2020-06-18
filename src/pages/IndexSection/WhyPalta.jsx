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
import Slide from "react-reveal/Slide";

const WhyPalta = ({ setRef }) => {
  return (
    <div className="section section-basic" ref={setRef}>
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
              <h3>We hate to brag, but here's some stuff we're awesome at.</h3>
              <Slide right>
                <p>Hearing and understanding your startup needs.</p>
              </Slide>
              <Slide right>
                <p>
                  Our diverse team composed by scientists, developers and
                  designers, are all your startup needs to turn your ideas into
                  solutions!
                </p>
              </Slide>
              <Slide right>
                <p>Being your partner.</p>
              </Slide>
              <Slide right>
                <p>
                  Our company does not aim to be just another number on your
                  contact list. We aim to be a reliable partner, helping you to
                  achieve all the milestones your company has.
                </p>
              </Slide>
              <Slide right>
                <p>Showing why you are the best!</p>
              </Slide>
              <Slide right>
                <p>
                  We love deep tech companies, but we love more helping them to
                  change the world!
                </p>
              </Slide>
              <Slide right>
                <p>
                  Let us help you showing your public, what your awesome company
                  means
                </p>
              </Slide>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default WhyPalta;
