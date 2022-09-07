import React from "react";
import "./button.style.css";
const Button = ({ label, bg, textColor, onClick, ...containerStyle }) => {
  return (
    <div
      className="btn"
      style={{ backgroundColor: bg }}
      onClick={onClick}
      {...containerStyle}
    >
      <p style={{ color: textColor }}>{label}</p>
    </div>
  );
};

export default Button;
