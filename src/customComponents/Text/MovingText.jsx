import React from "react";

const MovingText = ({ className }) => {
  const textToWrite = ["TECH", "TEAM"];
  const [text, setText] = React.useState("");

  const textProps = {
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 450,
    text: "",
  };

  React.useEffect(() => {
    setTimeout(autoWriteText, 1000);
  }, []);

  const autoWriteText = () => {
    const fullText = textToWrite[textProps.loopNum % textToWrite.length];
    const partialText = textProps.isDeleting
      ? fullText.substring(0, textProps.text.length - 1)
      : fullText.substring(0, textProps.text.length + 1);

    textProps.typingSpeed = textProps.isDeleting ? 300 : 450;

    setText(partialText);

    textProps.text = partialText;

    if (!textProps.isDeleting && textProps.text === fullText) {
      setTimeout(() => (textProps.isDeleting = true), 1000);
    } else if (textProps.isDeleting && textProps.text === "") {
      textProps.isDeleting = false;
      textProps.loopNum++;
    }

    setTimeout(autoWriteText, textProps.typingSpeed);
  };

  return (
    <div className={`rez-text ${className}`}>
      <span className="text-white fs-85">PALTA</span>
      <span className="text-success fs-85">{text}</span>
    </div>
  );
};

export default MovingText;
