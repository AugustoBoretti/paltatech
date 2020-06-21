import React from "react";
import { ParallaxLayer } from "react-spring/addons";

export default function AvocadoParallax() {
  return (
    <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: "none" }}>
      <img
        src={require("assets/img/abstract-avocado.png")}
        style={{ width: "10%", marginLeft: "85%" }}
      />
    </ParallaxLayer>
  );
}
