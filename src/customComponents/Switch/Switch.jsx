import React from "react";

const Switch = ({ onClick }) => {
  const baseSwitchClass = "toggle switch btn-icon-pulse-white ";
  const [switchClass, setSwitchClass] = React.useState(baseSwitchClass);

  const toggleSwitch = () => {
    setSwitchClass(baseSwitchClass + "toggle-on ");
    document.body.classList.remove("no-scroll");
    onClick();
    setTimeout(
      () => setSwitchClass(baseSwitchClass + "toggle-on fade-out"),
      1500
    );
  };

  return (
    <div className={switchClass} onClick={toggleSwitch}>
      <div className="toggle-text-off">OFF</div>
      <div className="glow-comp" />
      <div className="toggle-button" />
      <div className="toggle-text-on">ON</div>
    </div>
  );
};

export default Switch;
