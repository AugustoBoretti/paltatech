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
import AvocadoPolygon from "../../components/Polygons/AvocadoPolygon";

class ColorNavbar extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarColor);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarColor);
  }

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
    return (
      <>
        <Navbar className="fixed-top navbar-transparent" expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand to="/" tag={Link} id="brand">
                <img
                  src={require("assets/img/white-line-avocado.png")}
                  alt="..."
                  height="40px"
                />
                <span className="ml-2">PALTA •</span> TECH
              </NavbarBrand>
              <UncontrolledTooltip delay={0} target="brand">
                Designed and coded with ❤️ by Palta{" "}
                <span className="text-success">Tech</span>
              </UncontrolledTooltip>
              <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default ColorNavbar;
