// src/components/Button.js
import React from "react";

const Button = (props) => {
  return (
    <button
      className={`px-6 py-1 border-2 border-white text-white bg-transparent hover:bg-hovercolor hover:border-hovercolor hover:text-darkcolor transition-all duration-300 rounded-full`}
    >
      <a
        href={props.href}
        className="flex items-center justify-center w-full h-full"
      >
        {props.title}
      </a>
    </button>
  );
};

export default Button;
