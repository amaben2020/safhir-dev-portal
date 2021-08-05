import React from "react";
import "./BareButton.scss";

interface ButtonProps {
  title: String;
  onClick?: () => void;
  type?: String;
}

const BareButton = (prop: ButtonProps) => {
  return (
    <button onClick={prop.onClick} className="bare-button">
      {prop.title}
    </button>
  );
};

export default BareButton;
