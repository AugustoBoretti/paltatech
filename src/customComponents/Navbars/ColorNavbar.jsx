import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Container,
  Navbar,
  NavbarBrand,
  UncontrolledTooltip,
} from "reactstrap";

const ColorNavbar = ({ firstRef }) => {
  const [render, setRender] = React.useState(0);

  const getNavbarClass = () => {
    return firstRef.current && firstRef.current.getBoundingClientRect().top < 50
      ? "background-blur"
      : "";
  };

  React.useEffect(() => {
    const handleScroll = () => setRender(Math.random());

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [render]);

  return (
    <>
      <Navbar
        className={`fixed-top navbar-transparent ${getNavbarClass()}`}
        expand="lg"
      >
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
          </div>
        </Container>
      </Navbar>
      <Navbar className="fixed-top navbar-transparent filter-blur" expand="lg">
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
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default ColorNavbar;
