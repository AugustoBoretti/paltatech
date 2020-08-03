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

import axios from "axios";

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

import { NotificationContext } from "../../contexts/notificationContext";

const nameRef = React.createRef();
const lastNameRef = React.createRef();
const emailRef = React.createRef();
const messageRef = React.createRef();
const isRobotRef = React.createRef();

const GetInTouch = ({ setRef }) => {
  const { pushNotification } = React.useContext(NotificationContext);
  const [isNameValid, setIsNameValid] = React.useState(null);
  const [isLastNameValid, setIsLastNameValid] = React.useState(null);
  const [isEmailValid, setIsEmailValid] = React.useState(null);
  const [isRobot, setIsRobot] = React.useState(null);
  const [isSendingEmail, setIsSendingEmail] = React.useState(false);

  const sendEmail = () => {
    setIsSendingEmail(true);
    const name = nameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const isRobotChecked = isRobotRef.current.checked;
    const emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validations = [
      name.length < 2,
      lastName.length < 2,
      !emailValidation.test(email),
      !isRobotChecked,
    ];

    const [isNameValid, isLastNameValid, isEmailValid] = validations;

    setIsNameValid(!isNameValid);
    setIsLastNameValid(!isLastNameValid);
    setIsEmailValid(!isEmailValid);
    setIsRobot(isRobotChecked);

    if (validations.some((isNotValid) => isNotValid)) {
      return setIsSendingEmail(false);
    }

    axios
      .post(
        "/email",
        {
          name,
          lastName,
          email,
          message: messageRef.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        nameRef.current.value = "";
        lastNameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        isRobotRef.current.checked = false;
        pushNotification();
      })
      .catch((err) => {
        pushNotification({
          color: "danger",
          title: "Oops..",
          message:
            "There was an error while sending the E-Mail. Please try again!",
        });
      })
      .finally(() => {
        setIsSendingEmail(false);
      });
  };

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
              You need more information? Send us an E-Mail or contact us through{" "}
              <a href="https://wa.me/543413721877" className="text-success">
                Whatsapp <i className="fab fa-whatsapp" />
              </a>
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
                <CardHeader className="text-center">
                  <CardTitle tag="h4">Contact Us</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="12" md="6">
                      <label>First name</label>
                      <InputGroup
                        className={classnames({
                          "input-group-focus": true,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText
                            className={`border-${
                              isNameValid !== false ? "success" : "danger"
                            }`}
                          >
                            <i className="tim-icons icon-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          aria-label="First Name..."
                          placeholder="First Name..."
                          name="name"
                          type="text"
                          className={`border-${
                            isNameValid !== false ? "success" : "danger"
                          }`}
                          innerRef={nameRef}
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
                            <InputGroupText
                              className={`border-${
                                isLastNameValid !== false ? "success" : "danger"
                              }`}
                            >
                              <i className="tim-icons icon-caps-small" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            aria-label="Last Name..."
                            placeholder="Last Name..."
                            name="lastname"
                            type="text"
                            className={`border-${
                              isLastNameValid !== false ? "success" : "danger"
                            }`}
                            innerRef={lastNameRef}
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
                        <InputGroupText
                          className={`border-${
                            isEmailValid !== false ? "success" : "danger"
                          }`}
                        >
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email Here..."
                        name="email"
                        type="text"
                        className={`border-${
                          isEmailValid !== false ? "success" : "danger"
                        }`}
                        innerRef={emailRef}
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
                      innerRef={messageRef}
                    />
                  </FormGroup>
                  <Row>
                    <Col md="6">
                      <FormGroup check>
                        <Label
                          check
                          className={`text-${
                            isRobot !== false ? "" : "danger"
                          }`}
                        >
                          <Input type="checkbox" innerRef={isRobotRef} />
                          <span className={`form-check-sign bg-success`} />
                          I'm not a robot
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <Button
                        className="pull-right"
                        color="success"
                        onClick={sendEmail}
                        disabled={isSendingEmail}
                      >
                        {isSendingEmail ? "Sending Message..." : "Send Message"}
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
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
