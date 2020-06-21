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

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.body.classList.add("index-page");
  }

  componentWillUnmount() {
    document.body.classList.remove("index-page");
  }

  scrollIntoView = (Section, extraTop = 0) => {
    window.scrollTo({
      behavior: "smooth",
      top: Section.getBoundingClientRect().top + window.pageYOffset - extraTop,
    });
  };

  render() {
    return (
      <>
        <div className="page-header">
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
                <img src={require("assets/img/palta-gif.gif")} alt="..." />
                <h3>
                  <MovingText className="pt-5 pb-5" />
                </h3>
              </div>
              <div className="mt-5">
                <h2>
                  A software factory focused on bringing web solutions to
                  deeptech startups!
                </h2>
                <Button
                  className="btn-icon btn-round btn-icon-pulse mt-5"
                  color="success"
                  size="lg"
                  target="_blank"
                  onClick={() =>
                    this.scrollIntoView(this.props.whyPaltaRef.current, 50)
                  }
                >
                  <i className="tim-icons icon-minimal-down" />
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

Index.defaultProps = {
  cardColor: "default",
};

export default Index;
