import React from "react";
import { UncontrolledAlert } from "reactstrap";

const Message = ({
  color = "success",
  title = "Excellent!",
  message = "The email was sent successfully! 🚀",
}) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "100px",
        right: "20px",
      }}
    >
      <UncontrolledAlert className="alert-with-icon" color={color}>
        <span data-notify="icon" className="tim-icons icon-coins" />
        <span>
          <b>{title} </b>
          {message}
        </span>
      </UncontrolledAlert>
    </div>
  );
};

export default Message;
