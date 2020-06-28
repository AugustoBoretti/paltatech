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
import GetInTouch from "./IndexSection/GetInTouch";
import WhyPalta from "./IndexSection/WhyPalta";
import OurServices from "./IndexSection/OurServices";
import BackedBy from "./IndexSection/BackedBy";
import OurWorks from "./IndexSection/OurWorks";
import { Navbar } from "reactstrap";
import Sidebar from "../customComponents/Sidebar/Sidebar";

const Wrapper = React.createRef();
const IndexRef = React.createRef();
const WhyPaltaRef = React.createRef();
const BackedByRef = React.createRef();
const OurServicesRef = React.createRef();
const OurWorksRef = React.createRef();
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
    const references = [
      IndexRef,
      OurServicesRef,
      WhyPaltaRef,
      BackedByRef,
      OurWorksRef,
      GetInTouchRef,
    ];

    return (
      <div>
        <ColorNavbar references={references} />
        <Sidebar references={references} />
        <div className="wrapper" ref={Wrapper}>
          <IndexHeader setRef={IndexRef} nextSection={OurServicesRef} />
          <div className="main">
            <OurServices setRef={OurServicesRef} />
            <WhyPalta setRef={WhyPaltaRef} />
            <BackedBy setRef={BackedByRef} />
            <OurWorks setRef={OurWorksRef} />
            <GetInTouch setRef={GetInTouchRef} />
          </div>
          <DemoFooter />
        </div>
      </div>
    );
  }
}
