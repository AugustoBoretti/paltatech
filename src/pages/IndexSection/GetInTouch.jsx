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

import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import Zoom from "react-reveal/Zoom";

const GetInTouch = ({ setRef }) => {
  return (
    <div
      className="section section-basic"
      id="getInTouch"
      ref={setRef}
      style={{
        backgroundImage:
          "url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)",
      }}
      aria-valuetext="Get in touch"
    >
      <Container>
        <Row>
          <Col md="5">
            <h1 className="title">
              <Zoom top cascade>
                Get
              </Zoom>
              <strong className="text-danger">
                <Zoom top cascade>
                  IN TOUCH
                </Zoom>
              </strong>
            </h1>
            <h4 className="description">
              You need more information? Check what other persons are saying
              about our product. They are very happy with their purchase.
            </h4>
            <div>
              <div className="btn-wrapper profile text-left mt-5">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://twitter.com/palta.tech"
                  id="tooltip39661217"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip39661217">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="https://www.facebook.com/palta.tech"
                  id="tooltip206037619"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip206037619">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="https://instagram.com/palta.tech_"
                  id="tooltip750293512"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip750293512">
                  Follow us
                </UncontrolledTooltip>
              </div>
            </div>
          </Col>
          <Col className="ml-auto mr-auto" md="5">
            <Zoom right>
              <Card className="card-contact card-raised card-transparent">
                <Form id="contact-form" method="post" role="form">
                  <CardHeader className="text-center">
                    <CardTitle tag="h4">Contact Us</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col xs="12" md="6">
                        <label>First name</label>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": false,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className={`border-success`}>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            aria-label="First Name..."
                            placeholder="First Name..."
                            type="text"
                            className={`border-success`}
                          />
                        </InputGroup>
                      </Col>
                      <Col xs="12" md="6">
                        <FormGroup>
                          <label>Last name</label>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": false,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText className={`border-success`}>
                                <i className="tim-icons icon-caps-small" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Last Name..."
                              placeholder="Last Name..."
                              type="text"
                              className={`border-success`}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <label>Email address</label>
                      <InputGroup
                        className={classnames({
                          "input-group-focus": false,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText className={`border-success`}>
                            <i className="tim-icons icon-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email Here..."
                          type="text"
                          className={`border-success`}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <label>Your message</label>
                      <Input
                        id="message"
                        name="message"
                        rows="6"
                        type="textarea"
                        className={`border-success`}
                      />
                    </FormGroup>
                    <Row>
                      <Col md="6">
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" />
                            <span className={`form-check-sign bg-success`} />
                            I'm not a robot
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <Button className="pull-right" color="success">
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Form>
              </Card>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

GetInTouch.defaultProps = {
  cardColor: "default",
};

export default GetInTouch;
