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
import WhoWeAre from "./IndexSections/WhoWeAre";
import TheTeam from "./IndexSections/TheTeam";
import OurTechnologies from "./IndexSections/OurTechnologies";
import WhatTheySay from "./IndexSections/WhatTheySay";
import GetInTouch from "./IndexSections/GetInTouch";

const references = new Array(6).fill(React.createRef());

const Wrapper = React.createRef();
const WhoWeAreRef = React.createRef();
const TheTeamRef = React.createRef();
const OurTechnologiesRef = React.createRef();
const WhatTheySayRef = React.createRef();
const GetInTouchRef = React.createRef();

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.add("index-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    Wrapper.current.scrollTop = 0;
  }

  componentWillUnmount() {
    document.body.classList.remove("index-page");
  }

  render() {
    return (
      <>
        <ColorNavbar
          references={[
            WhoWeAreRef,
            TheTeamRef,
            OurTechnologiesRef,
            WhatTheySayRef,
            WhatTheySayRef,
          ]}
        />
        <div className="wrapper" ref={Wrapper}>
          <IndexHeader />
          <div className="main">
            <WhoWeAre setRef={WhoWeAreRef} />
            <TheTeam setRef={TheTeamRef} />
            <OurTechnologies setRef={OurTechnologiesRef} />
            <WhatTheySay setRef={WhatTheySayRef} />
            <GetInTouch setRef={GetInTouchRef} />
          </div>
          <DemoFooter />
        </div>
      </>
    );
  }
}

export default Index;
