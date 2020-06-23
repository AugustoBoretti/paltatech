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
import WhatTheySay from "./IndexSection/WhatTheySay";
import GetInTouch from "./IndexSection/GetInTouch";
import WhyPalta from "./IndexSection/WhyPalta";
import TestNewSection from "./IndexSection/TestNewSection";
import BackedBy from "./IndexSection/BackedBy";

const Wrapper = React.createRef();
const WhyPaltaRef = React.createRef();
const TheTeamRef = React.createRef();
const OurTechnologiesRef = React.createRef();
const WhatTheySayRef = React.createRef();
const GetInTouchRef = React.createRef();

export default class Index extends React.Component {
  componentDidMount() {
    document.body.classList.add("index-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (Wrapper && Wrapper.current) Wrapper.current.scrollTop = 0;
  }

  componentWillUnmount() {
    document.body.classList.remove("index-page");
  }

  render() {
    return (
      <div>
        <ColorNavbar
          references={[
            WhyPaltaRef,
            TheTeamRef,
            OurTechnologiesRef,
            WhatTheySayRef,
          ]}
        />
        <div className="wrapper" ref={Wrapper}>
          <IndexHeader whyPaltaRef={WhyPaltaRef} />
          <div className="main">
            <TestNewSection right />
            <TestNewSection />
            <WhyPalta setRef={WhyPaltaRef} />
            <WhatTheySay setRef={WhatTheySayRef} />
            <GetInTouch setRef={GetInTouchRef} />
          </div>
          <DemoFooter />
        </div>
      </div>
    );
  }
}
