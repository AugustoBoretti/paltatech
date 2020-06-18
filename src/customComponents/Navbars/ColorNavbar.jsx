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
    selectedColor: "bg-black-transparent",
    buttonColor: "info",
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
        navbarColor: this.state.selectedColor,
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
      WhyPaltaRef,
      TheTeamRef,
      OurTechnologiesRef,
      WhatTheySayRef,
    ] = this.props.references;

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
                      WhyPaltaRef.current,
                      "success"
                    )}
                    onClick={() => this.scrollIntoView(WhyPaltaRef.current, 50)}
                  >
                    <i aria-hidden={true} className="tim-icons icon-bulb-63" />
                    <p>Why Palta?</p>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
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
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
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
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
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
                    color={this.state.buttonColor}
                    href="#getInTouch"
                    size="sm"
                    target="_self"
                  >
                    <p>Contact us!</p>
                  </Button>
                </NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" nav>
                    <i
                      aria-hidden={true}
                      className="tim-icons icon-book-bookmark"
                    />
                    <p>Cambiar colores</p>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <UncontrolledDropdown nav>
                      <DropdownToggle
                        caret
                        color="default"
                        className="dropdown-item"
                        tag="a"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="tim-icons icon-palette"
                        />
                        Sitio
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          onClick={() => this.props.changeColor("")}
                        >
                          Normal
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => this.props.changeColor("green")}
                        >
                          Verde
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => this.props.changeColor("")}
                        >
                          Normal
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav>
                      <DropdownToggle
                        caret
                        color="default"
                        className="dropdown-item"
                        tag="a"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="tim-icons icon-palette"
                        />
                        Color Navbar
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          onClick={() =>
                            this.setState({
                              selectedColor: "bg-danger",
                              navbarColor: "bg-danger",
                            })
                          }
                        >
                          Rojo
                        </DropdownItem>
                        <DropdownItem
                          onClick={() =>
                            this.setState({
                              selectedColor: "bg-success",
                              navbarColor: "bg-success",
                            })
                          }
                        >
                          Verde
                        </DropdownItem>
                        <DropdownItem
                          onClick={() =>
                            this.setState({
                              selectedColor: "bg-info",
                              navbarColor: "bg-info",
                            })
                          }
                        >
                          Azul
                        </DropdownItem>
                        <DropdownItem
                          onClick={() =>
                            this.setState({
                              selectedColor: "bg-warning",
                              navbarColor: "bg-warning",
                            })
                          }
                        >
                          Naranja
                        </DropdownItem>
                        <DropdownItem
                          onClick={() =>
                            this.setState({
                              selectedColor: "bg-primary",
                              navbarColor: "bg-primary",
                            })
                          }
                        >
                          Violeta
                        </DropdownItem>
                        <DropdownItem
                          onClick={() =>
                            this.setState({
                              selectedColor: "bg-default",
                              navbarColor: "bg-default",
                            })
                          }
                        >
                          Gris
                        </DropdownItem>
                        <DropdownItem
                          onClick={() =>
                            this.setState({
                              selectedColor: "navbar-transparent",
                              navbarColor: "navbar-transparent",
                            })
                          }
                        >
                          Transparente
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav>
                      <DropdownToggle
                        caret
                        color="default"
                        className="dropdown-item"
                        tag="a"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="tim-icons icon-palette"
                        />
                        Botón "Contact us"
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          onClick={() =>
                            this.setState({
                              buttonColor: "danger",
                            })
                          }
                        >
                          Rojo
                        </DropdownItem>
                        <DropdownItem
                          onClick={() =>
                            this.setState({
                              buttonColor: "success",
                            })
                          }
                        >
                          Verde
                        </DropdownItem>
                        <DropdownItem
                          onClick={() =>
                            this.setState({
                              buttonColor: "info",
                            })
                          }
                        >
                          Azul
                        </DropdownItem>
                        <DropdownItem
                          onClick={() =>
                            this.setState({
                              buttonColor: "warning",
                            })
                          }
                        >
                          Naranja
                        </DropdownItem>
                        <DropdownItem
                          onClick={() =>
                            this.setState({
                              buttonColor: "primary",
                            })
                          }
                        >
                          Violeta
                        </DropdownItem>
                        <DropdownItem
                          onClick={() =>
                            this.setState({
                              buttonColor: "default",
                            })
                          }
                        >
                          Gris
                        </DropdownItem>
                        <DropdownItem
                          onClick={() =>
                            this.setState({
                              buttonColor: "link",
                            })
                          }
                        >
                          Transparente
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default ColorNavbar;
