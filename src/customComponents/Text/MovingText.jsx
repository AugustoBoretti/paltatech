import React from "react";
import Typed from "typed.js";

const MovingText = ({ className }) => {
  React.useEffect(() => {
    new Typed("#modifiers", {
      stringsElement: "#palta-modifier",
      typeSpeed: 250,
      loop: false,
      smartBackspace: false,
      backSpeed: 150,
      startDelay: 1000,
    });
    new Typed("#statics", {
      stringsElement: "#palta-static",
      typeSpeed: 100,
      loop: false,
      smartBackspace: false,
      backSpeed: 90,
      startDelay: 1000,
      cursorChar: "",
    });
  }, []);

  return (
    <div className={`rez-text ${className}`}>
      <span id="palta-static">
        <div>hi</div>
        <div>Delighted that you are here</div>
        <div>we are palta</div>
      </span>
      <span id="palta-modifier">
        <div>^10350TECH</div>
      </span>
      <span className="text-white fs-50" id="statics" />
      <span className="text-success fs-50" id="modifiers" />
    </div>
  );
};

export default MovingText;
