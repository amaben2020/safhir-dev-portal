import React from "react";
import "./Button.scss";

interface ButtonProps {
  title: String;
  onClick?: () => void;
  type?: String;
}
const Button = (prop: ButtonProps) => {
  return (
    <button onClick={prop.onClick} className="button">
      {prop.title}
    </button>
  );
};

export default Button;
