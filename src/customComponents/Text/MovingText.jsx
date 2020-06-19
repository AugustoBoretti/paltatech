import React from "react";
import Typed from "typed.js";

const MovingText = ({ className }) => {
  React.useEffect(() => {
    new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 250,
      loop: true,
      smartBackspace: false,
      backSpeed: 150,
      startDelay: 1000,
    });
  }, []);

  return (
    <div className={`rez-text ${className}`}>
      <span className="text-white fs-85">PALTA</span>
      <span id="typed-strings">
        <div>TECH</div>
        <div>TEAM</div>
        <div>PRO</div>
      </span>
      <span className="text-success fs-85" id="typed"></span>
    </div>
  );
};

export default MovingText;
