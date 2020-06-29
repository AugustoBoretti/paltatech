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
import { Button, Container } from "reactstrap";

import MovingText from "../Text/MovingText";

const Index = ({ setRef, nextSection }) => {
  const [endOfTyping, setEndOfTyping] = React.useState(false);
  const scrollIntoView = (Section, extraTop = 0) => {
    window.scrollTo({
      behavior: "smooth",
      top: Section.getBoundingClientRect().top + window.pageYOffset - extraTop,
    });
  };

  React.useEffect(() => {
    setTimeout(() => {
      setEndOfTyping(true);
      setTimeout(
        () => window.scrollY < 50 && scrollIntoView(nextSection.current, 50),
        500
      );
    }, 5000);
  }, []);

  return (
    <div
      className="page-header"
      ref={setRef}
      style={{
        backgroundImage:
          "url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)",
      }}
    >
      <div className={`squares-green square1`} />
      <div className={`squares-green square2`} />
      <div className={`squares-green square3`} />
      <div className={`squares-green square4`} />
      <div className={`squares-green square5`} />
      <div className={`squares-green square6`} />
      <div className={`squares-green square7`} />
      <Container>
        <div className="content-center brand">
          <div>
            {endOfTyping ? (
              <>
                <img
                  src={require("assets/img/white-line-avocado.png")}
                  alt="..."
                  style={{ position: "absolute" }}
                />
                <img
                  src={require("assets/img/white-line-avocado.png")}
                  alt="..."
                  className="filter-blur"
                />
              </>
            ) : (
              <img
                src={require("assets/img/white-line-avocado.png")}
                alt="..."
              />
            )}
            <h3 className="rez-text mt-3">
              <span className="text-success fs-85 fw-100">palta</span>
              <span className="text-white fs-85 fw-100">tech</span>
            </h3>
          </div>
          <div className="mt-5">
            <MovingText>
              <div>The soft</div>
              <div>
                A software factory focused on bringing web solutions to deeptech
                startups
              </div>
            </MovingText>
            <Button
              className="btn-icon btn-round btn-icon-pulse mt-5"
              color="success"
              size="lg"
              target="_blank"
              onClick={() => scrollIntoView(nextSection.current, 50)}
            >
              <i className="tim-icons icon-minimal-down" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

Index.defaultProps = {
  cardColor: "default",
};

export default Index;
