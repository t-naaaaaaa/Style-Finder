import React from "react";
import "./Button.css"; // CSSファイルのインポート

const Button = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {text}
    </button>
  );
};

export default Button;
