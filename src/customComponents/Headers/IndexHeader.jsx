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
  const scrollIntoView = (Section, extraTop = 0) => {
    window.scrollTo({
      behavior: "smooth",
      top: Section.getBoundingClientRect().top + window.pageYOffset - extraTop,
    });
  };

  return (
    <div
      className="page-header"
      ref={setRef}
      style={{
        backgroundImage:
          "url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)",
      }}
      aria-valuetext=""
    >
      <Container>
        <div className="content-center brand">
          <div>
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
            <h3 className="rez-text mt-3">
              <span className="text-success fs-85 fw-100">palta</span>
              <span className="text-white fs-85 fw-100">tech</span>
            </h3>
          </div>
          <div className="mt-5">
            <MovingText>
              <div>A soft</div>
              <div>
                The software company focused on bring web solutions to deeptech
                startups!
              </div>
            </MovingText>
            <Button
              className="btn-icon btn-round mt-5 btn-icon-pulse"
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
