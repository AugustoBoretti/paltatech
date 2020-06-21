import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/addons";
import IndexHeader from "../Headers/IndexHeader";
import WhyPalta from "../../pages/IndexSection/WhyPalta";
import TheTeam from "../../pages/IndexSection/TheTeam";
import OurTechnologies from "../../pages/IndexSection/OurTechnologies";
import WhatTheySay from "../../pages/IndexSection/WhatTheySay";
import GetInTouch from "../../pages/IndexSection/GetInTouch";
import DemoFooter from "../Footers/DemoFooter";

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
const Pink = ({ children }) => (
  <span style={{ color: "#FF6AC1" }}>{children}</span>
);
const Yellow = ({ children }) => (
  <span style={{ color: "#EFF59B" }}>{children}</span>
);
const Lightblue = ({ children }) => (
  <span style={{ color: "#9AEDFE" }}>{children}</span>
);
const Green = ({ children }) => (
  <span style={{ color: "#57EE89" }}>{children}</span>
);
const Blue = ({ children }) => (
  <span style={{ color: "#57C7FF" }}>{children}</span>
);
const Gray = ({ children }) => (
  <span style={{ color: "#909090" }}>{children}</span>
);

export default class TestParallax extends React.Component {
  render() {
    return (
      <Parallax ref={(ref) => (this.parallax = ref)} pages={5}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={5}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        >
          <IndexHeader cardColor={"green"} whyPaltaRef={React.createRef()} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={require("assets/img/abstract-avocado.png")}
            style={{ width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <WhyPalta setRef={React.createRef()} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TheTeam setRef={React.createRef()} cardColor={"green"} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.9}
          speed={-0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: "0.3",
          }}
        >
          <img src={url("bash")} style={{ width: "60%" }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => this.parallax.scrollTo(0)}
        >
          <OurTechnologies setRef={React.createRef()} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={1.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => this.parallax.scrollTo(0)}
        >
          <GetInTouch setRef={React.createRef()} cardColor={"green"} />
        </ParallaxLayer>
      </Parallax>
    );
  }
}
