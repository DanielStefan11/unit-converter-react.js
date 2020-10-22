import React from "react";
// Style
import "./Footer.scss";
// React Icons
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  const footerDate = new Date();
  const year = footerDate.getFullYear();

  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/daniel-%C8%99tefan-c%C4%83lin-4359ba182/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedin />
        Linkedin
      </a>
      <a
        href="https://github.com/DanielStefan11"
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiFillGithub />
        Github
      </a>
      <p>React.js Converter</p>
      <p>&#169; Daniel Stefan Calin. 2020 - {year}</p>
    </footer>
  );
}
