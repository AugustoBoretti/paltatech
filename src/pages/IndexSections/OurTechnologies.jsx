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

class OurTechnologies extends React.Component {
  render() {
    return (
      <div className="presentation-page">
        <div className="section section-basic-components section-typo">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path1.png")}
          />
          <img
            alt="..."
            className="path path1"
            src={require("assets/img/path3.png")}
          />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h1 className="title">
                  Our <br />
                  <strong className="text-primary">TECHNOLOGIES</strong>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col lg="5" md="7">
                <h6 className="category">The core elements of your website</h6>
                <h5 className="description">
                  We re-styled every Bootstrap 4 element to match the Now UI Kit
                  style. All the Bootstrap 4 components that you need in a
                  development have been re-design with the new look. Besides the
                  numerous basic elements, we have also created additional
                  classes. All these items will help you take your project to
                  the next level.
                </h5>
              </Col>
              <Col lg="6" md="12">
                <div className="image-container">
                  <img
                    alt="..."
                    className="components-macbook"
                    src={require("assets/img/mac.png")}
                  />
                  <img
                    alt="..."
                    className="table-img"
                    src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                  />
                  <img
                    alt="..."
                    className="share-btn-img"
                    src="https://cdn.worldvectorlogo.com/logos/photoshop-cc.svg"
                  />
                  <img
                    alt="..."
                    className="coloured-card-btn-img"
                    src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                  />
                  <img
                    alt="..."
                    className="coloured-card-img"
                    src="https://cdn.iconscout.com/icon/free/png-512/redis-5-1175104.png"
                  />
                  <img
                    alt="..."
                    className="social-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png"
                  />
                  <img
                    alt="..."
                    className="linkedin-btn-img"
                    src="https://1000marcas.net/wp-content/uploads/2020/02/Docker-Logo.png"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default OurTechnologies;
