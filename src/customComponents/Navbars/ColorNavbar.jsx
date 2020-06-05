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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class ColorNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    navbarColor: "navbar-transparent",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarColor);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarColor);
  }

  changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      this.setState({
        navbarColor: "bg-info",
      });
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        navbarColor: "navbar-transparent",
      });
    }
  };

  turnOnSection = (Section, color) => {
    if (!Section) return;

    const { top, height } = Section.getBoundingClientRect();
    return (top <= 65 && top >= (height - 65) * -1 && `text-${color}`) || "";
  };

  scrollIntoView = (Section, extraTop = 0) => {
    window.scrollTo({
      behavior: "smooth",
      top: Section.getBoundingClientRect().top + window.pageYOffset - extraTop,
    });
  };

  render() {
    const [
      WhoWeAreRef,
      TheTeamRef,
      OurTechnologiesRef,
      WhatTheySayRef,
    ] = this.props.references;

    const isSmallRender = window.innerWidth < 998;

    return (
      <>
        <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand to="/index" tag={Link} id="tooltip6619950104">
                <span>PALTA •</span> TECH
              </NavbarBrand>
              <UncontrolledTooltip delay={0} target="tooltip6619950104">
                Designed and Coded by Creative Tim
              </UncontrolledTooltip>
              <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#navigation">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className="text-success"
                    >
                      Palta • <span>TECH</span>
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button className="navbar-toggler" id="navigation">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    nav
                    className={this.turnOnSection(
                      WhoWeAreRef.current,
                      "warning"
                    )}
                    onClick={() => this.scrollIntoView(WhoWeAreRef.current, 50)}
                  >
                    <i aria-hidden={true} className="tim-icons icon-bulb-63" />
                    <p>Who we are</p>
                  </DropdownToggle>
                  {isSmallRender && <br />}
                  <DropdownToggle
                    nav
                    className={this.turnOnSection(TheTeamRef.current, "danger")}
                    onClick={() => this.scrollIntoView(TheTeamRef.current, 50)}
                  >
                    <i
                      aria-hidden={true}
                      className="tim-icons icon-shape-star"
                    />
                    <p>The Team</p>
                  </DropdownToggle>
                  {isSmallRender && <br />}
                  <DropdownToggle
                    nav
                    className={this.turnOnSection(
                      OurTechnologiesRef.current,
                      "primary"
                    )}
                    onClick={() =>
                      this.scrollIntoView(OurTechnologiesRef.current)
                    }
                  >
                    <i aria-hidden={true} className="tim-icons icon-atom" />
                    <p>Our Technologies</p>
                  </DropdownToggle>
                  {isSmallRender && <br />}
                  <DropdownToggle
                    nav
                    className={this.turnOnSection(
                      WhatTheySayRef.current,
                      "success"
                    )}
                    onClick={() => this.scrollIntoView(WhatTheySayRef.current)}
                  >
                    <i aria-hidden={true} className="tim-icons icon-chat-33" />
                    <p>What they say</p>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <NavItem>
                  <Button
                    className="nav-link"
                    color="dark"
                    href="#getInTouch"
                    size="sm"
                    target="_self"
                  >
                    <p>Contact Us!</p>
                  </Button>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default ColorNavbar;
