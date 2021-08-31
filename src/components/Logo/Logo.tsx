import React, { FunctionComponent } from "react";
import "./style.css";

export const Logo: FunctionComponent = () => {
  return (
    <h1 className="logo">
      rMidi
      <span role="img" aria-label="musical notes emoji">
        🎶
      </span>
    </h1>
  );
};
