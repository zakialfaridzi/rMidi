import React, { FunctionComponent } from "react";
import "./style.css";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      made with 🤘 by{" "}
      <a
        href="https://www.github.com/zakialfaridzi"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        zalfaridzi
      </a>
      <br />
      {currentYear}
    </footer>
  );
};
