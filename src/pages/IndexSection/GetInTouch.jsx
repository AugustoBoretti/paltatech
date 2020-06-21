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
  Container,
  Row,
  Col,
  Card,
  Form,
  CardHeader,
  CardTitle,
  CardBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  FormGroup,
  Label,
  Button,
} from "reactstrap";

import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";

const GetInTouch = ({ setRef }) => {
  return (
    <div
      className={`contactus-1 section-image green`}
      style={{
        backgroundImage: "url(" + require("assets/img/contact1.jpg") + ")",
      }}
      id="getInTouch"
      ref={setRef}
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
            <div className="info info-horizontal">
              <div className="icon icon-primary">
                <i className="tim-icons icon-square-pin" />
              </div>
              <div className="description">
                <h4 className="info-title">Find us at the office</h4>
                <p className="description">
                  Bld Mihail Kogalniceanu, nr. 8, <br />
                  7652 Bucharest, <br />
                  Romania
                </p>
              </div>
            </div>
            <div className="info info-horizontal">
              <div className="icon icon-primary">
                <i className="tim-icons icon-mobile" />
              </div>
              <div className="description">
                <h4 className="info-title">Give us a ring</h4>
                <p className="description">
                  Michael Jordan <br />
                  +40 762 321 762 <br />
                  Mon - Fri, 8:00-22:00
                </p>
              </div>
            </div>
          </Col>
          <Col className="ml-auto mr-auto" md="5">
            <Card className={`green card-contact card-raised`}>
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
