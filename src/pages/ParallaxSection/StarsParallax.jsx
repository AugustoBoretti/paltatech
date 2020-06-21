import React from "react";
import { ParallaxLayer } from "react-spring/addons";

export default function StarsParallax() {
  const url = (name, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`;

  return (
    <ParallaxLayer
      offset={0}
      speed={0}
      factor={5}
      style={{
        backgroundImage: url("stars", true),
        backgroundSize: "cover",
      }}
    />
  );
}
