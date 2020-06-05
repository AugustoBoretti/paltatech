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
import {
  Container,
  Row,
  Col,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Card,
} from "reactstrap";
import Slick from "react-slick";

// custom previous button for the slick component
const PrevButton = (props) => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-prev slick-arrow"
      color="primary"
      aria-label="Previous"
      type="button"
      onClick={props.onClick}
    >
      <i className="tim-icons icon-minimal-left" />
    </Button>
  );
};
// custom next button for the slick component
const NextButton = (props) => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-next slick-arrow"
      color="primary"
      aria-label="Next"
      type="button"
    >
      <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
    </Button>
  );
};

let slickSettings = {
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  className: "center slider",
  slide: "section",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
};

class WhatTheySay extends React.Component {
  render() {
    return (
      <div className="cd-section">
        <div className="testimonials-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h1 className="title">
                  What <br />
                  <strong className="text-info">THEY SAY</strong>
                </h1>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row>
              <Col md="12">
                <Slick {...slickSettings}>
                  <div>
                    <Card className="card-profile profile-bg">
                      <CardHeader
                        style={{
                          backgroundImage:
                            "url(" +
                            require("assets/img/ben-konfrst.jpg") +
                            ")",
                        }}
                      >
                        <div className="card-avatar">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised"
                              src={require("assets/img/ryan.jpg")}
                            />
                          </a>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <CardTitle tag="h3">Byron Reese</CardTitle>
                        <h6 className="category text-primary">
                          Credit Analyst
                        </h6>
                        <p className="card-description">
                          Multi-Cloud Object Storage and Data Mobility: A GigaOm
                          Market Landscape Report has been announced...
                        </p>
                      </CardBody>
                      <CardFooter>
                        <div className="follow float-left">
                          <Button
                            className="btn-simple"
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                          >
                            <i className="tim-icons icon-check-2 mr-1" />
                            Following
                          </Button>
                        </div>
                        <div className="d-inline float-right d-md-block">
                          <Button
                            className="btn-icon btn-round mr-1"
                            color="dribbble"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-dribbble" />
                          </Button>
                          <Button
                            className="btn-icon btn-round mr-1"
                            color="linkedin"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            color="behance"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-behance" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                  <div>
                    <Card className="card-profile profile-bg">
                      <CardHeader
                        style={{
                          backgroundImage:
                            "url(" + require("assets/img/ruvim-noga.jpg") + ")",
                        }}
                      >
                        <div className="card-avatar">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised"
                              src={require("assets/img/lora.jpg")}
                            />
                          </a>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <CardTitle tag="h3">Melanie Paisley</CardTitle>
                        <h6 className="category text-primary">Writer</h6>
                        <p className="card-description">
                          Over the years, advancement in CRM technology has
                          reshaped the way SMBs and SMEs manage their
                          workflows...
                        </p>
                      </CardBody>
                      <CardFooter>
                        <div className="follow float-left">
                          <Button
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                          >
                            Follow
                          </Button>
                        </div>
                        <div className="d-inline float-right d-md-block">
                          <Button
                            className="btn-icon btn-round mr-1"
                            color="dribbble"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-dribbble" />
                          </Button>
                          <Button
                            className="btn-icon btn-round mr-1"
                            color="linkedin"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            color="behance"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-behance" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                  <div>
                    <Card className="card-profile profile-bg">
                      <CardHeader
                        style={{
                          backgroundImage:
                            "url(" +
                            require("assets/img/sendra-martorell.jpg") +
                            ")",
                        }}
                      >
                        <div className="card-avatar">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised"
                              src={require("assets/img/ryan.png")}
                            />
                          </a>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <CardTitle tag="h3">Jon Collins</CardTitle>
                        <h6 className="category text-primary">
                          Data Specialist
                        </h6>
                        <p className="card-description">
                          Scaling DevOps: Strategy &amp; Technical
                          Considerations for Successful Enterprise DevOps
                        </p>
                      </CardBody>
                      <CardFooter>
                        <div className="follow float-left">
                          <Button
                            className="btn-simple"
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                          >
                            <i className="tim-icons icon-check-2 mr-1" />
                            Following
                          </Button>
                        </div>
                        <div className="d-inline float-right d-md-block">
                          <Button
                            className="btn-icon btn-round mr-1"
                            color="dribbble"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-dribbble" />
                          </Button>
                          <Button
                            className="btn-icon btn-round mr-1"
                            color="linkedin"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            color="behance"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-behance" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                  <div>
                    <Card className="card-profile profile-bg">
                      <CardHeader
                        style={{
                          backgroundImage:
                            "url(" +
                            require("assets/img/sendra-martorell.jpg") +
                            ")",
                        }}
                      >
                        <div className="card-avatar">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised"
                              src={require("assets/img/ryan.png")}
                            />
                          </a>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <CardTitle tag="h3">Jon Collins</CardTitle>
                        <h6 className="category text-primary">
                          Data Specialist
                        </h6>
                        <p className="card-description">
                          Scaling DevOps: Strategy &amp; Technical
                          Considerations for Successful Enterprise DevOps
                        </p>
                      </CardBody>
                      <CardFooter>
                        <div className="follow float-left">
                          <Button
                            className="btn-simple"
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                          >
                            <i className="tim-icons icon-check-2 mr-1" />
                            Following
                          </Button>
                        </div>
                        <div className="d-inline float-right d-md-block">
                          <Button
                            className="btn-icon btn-round mr-1"
                            color="dribbble"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-dribbble" />
                          </Button>
                          <Button
                            className="btn-icon btn-round mr-1"
                            color="linkedin"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            color="behance"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-behance" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                  <div>
                    <Card className="card-profile profile-bg">
                      <CardHeader
                        style={{
                          backgroundImage:
                            "url(" +
                            require("assets/img/sendra-martorell.jpg") +
                            ")",
                        }}
                      >
                        <div className="card-avatar">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised"
                              src={require("assets/img/ryan.png")}
                            />
                          </a>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <CardTitle tag="h3">Jon Collins</CardTitle>
                        <h6 className="category text-primary">
                          Data Specialist
                        </h6>
                        <p className="card-description">
                          Scaling DevOps: Strategy &amp; Technical
                          Considerations for Successful Enterprise DevOps
                        </p>
                      </CardBody>
                      <CardFooter>
                        <div className="follow float-left">
                          <Button
                            className="btn-simple"
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                          >
                            <i className="tim-icons icon-check-2 mr-1" />
                            Following
                          </Button>
                        </div>
                        <div className="d-inline float-right d-md-block">
                          <Button
                            className="btn-icon btn-round mr-1"
                            color="dribbble"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-dribbble" />
                          </Button>
                          <Button
                            className="btn-icon btn-round mr-1"
                            color="linkedin"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            color="behance"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-behance" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </Slick>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default WhatTheySay;
