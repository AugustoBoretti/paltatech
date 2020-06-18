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

// core components
import ColorNavbar from "customComponents/Navbars/ColorNavbar.jsx";
import IndexHeader from "customComponents/Headers/IndexHeader.jsx";
import DemoFooter from "customComponents/Footers/DemoFooter.jsx";

// Sections for this page
import WhoWeAre from "./IndexSection/WhoWeAre";
import TheTeam from "./IndexSection/TheTeam";
import OurTechnologies from "./IndexSection/OurTechnologies";
import WhatTheySay from "./IndexSection/WhatTheySay";
import GetInTouch from "./IndexSection/GetInTouch";

import dots from "../assets/img/dots2.png";
import WhyPalta from "./IndexSection/WhyPalta";

const Wrapper = React.createRef();
const WhyPaltaRef = React.createRef();
const TheTeamRef = React.createRef();
const OurTechnologiesRef = React.createRef();
const WhatTheySayRef = React.createRef();
const GetInTouchRef = React.createRef();

class Index extends React.Component {
  state = {
    mainColor: "",
  };

  componentDidMount() {
    document.body.classList.add("index-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    Wrapper.current.scrollTop = 0;
  }

  componentWillUnmount() {
    document.body.classList.remove("index-page");
  }

  changeColor = (mainColor) => {
    this.setState({
      mainColor,
    });
  };

  render() {
    const cardProps = {
      backgroundImage: this.state.mainColor !== "" && `url(${dots})`,
      backgroundSize: this.state.mainColor !== "" && "contain",
      backgroundColor: this.state.mainColor !== "" && "#184139",
    };

    return (
      <div style={cardProps}>
        <ColorNavbar
          references={[
            WhyPaltaRef,
            TheTeamRef,
            OurTechnologiesRef,
            WhatTheySayRef,
          ]}
          changeColor={this.changeColor}
          cardColor={this.state.mainColor}
        />
        <div className="wrapper" ref={Wrapper}>
          <IndexHeader
            cardColor={this.state.mainColor}
            whyPaltaRef={WhyPaltaRef}
          />
          <div className="main">
            <WhyPalta setRef={WhyPaltaRef} />
            <TheTeam setRef={TheTeamRef} cardColor={this.state.mainColor} />
            <OurTechnologies setRef={OurTechnologiesRef} />
            <WhatTheySay
              setRef={WhatTheySayRef}
              cardColor={this.state.mainColor}
            />
            <GetInTouch
              setRef={GetInTouchRef}
              cardColor={this.state.mainColor}
            />
          </div>
          <DemoFooter cardColor={this.state.mainColor} />
        </div>
      </div>
    );
  }
}

export default Index;
