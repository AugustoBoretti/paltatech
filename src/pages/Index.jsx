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
import TheTeam from "./IndexSection/TheTeam";
import OurTechnologies from "./IndexSection/OurTechnologies";
import WhatTheySay from "./IndexSection/WhatTheySay";
import GetInTouch from "./IndexSection/GetInTouch";

import dots from "../assets/img/dots2.png";
import WhyPalta from "./IndexSection/WhyPalta";
import { Parallax, ParallaxLayer } from "react-spring/addons";
import AvocadoParallax from "./ParallaxSection/AvocadoParallax";
import StarsParallax from "./ParallaxSection/StarsParallax";

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
    const cardProps = {
      backgroundImage: `url(${dots})`,
      backgroundSize: "contain",
    };

    const { innerWidth } = window;

    return (
      <div style={cardProps}>
        <ColorNavbar
          references={[
            WhyPaltaRef,
            TheTeamRef,
            OurTechnologiesRef,
            WhatTheySayRef,
          ]}
        />
        {innerWidth < 770 ? (
          <div className="wrapper" ref={Wrapper}>
            <IndexHeader whyPaltaRef={WhyPaltaRef} />
            <div className="main">
              <WhyPalta setRef={WhyPaltaRef} />
              <TheTeam setRef={TheTeamRef} />
              <OurTechnologies setRef={OurTechnologiesRef} />
              <WhatTheySay setRef={WhatTheySayRef} />
              <GetInTouch setRef={GetInTouchRef} />
            </div>
            <DemoFooter />
          </div>
        ) : (
          <Parallax ref={(ref) => (this.parallax = ref)} pages={5.75}>
            <StarsParallax />
            <AvocadoParallax />
            <div className="wrapper" ref={Wrapper}>
              <ParallaxLayer offset={0}>
                <IndexHeader whyPaltaRef={WhyPaltaRef} />
              </ParallaxLayer>
              <div className="main">
                <ParallaxLayer offset={1} speed={0.3}>
                  <WhyPalta setRef={WhyPaltaRef} />
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.3}>
                  <TheTeam setRef={TheTeamRef} />
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={1.3}>
                  <OurTechnologies setRef={OurTechnologiesRef} />
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.9}>
                  <WhatTheySay setRef={WhatTheySayRef} />
                </ParallaxLayer>
                <ParallaxLayer offset={5}>
                  <GetInTouch setRef={GetInTouchRef} />
                </ParallaxLayer>
              </div>
              <ParallaxLayer offset={5.6}>
                <DemoFooter />
              </ParallaxLayer>
            </div>
          </Parallax>
        )}
      </div>
    );
  }
}
