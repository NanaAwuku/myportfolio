import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";

function HeaderSocial() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/nanaawuku24/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/nanaAwuku" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/Nana_Awuku24/"  target="_blank">
        <FaTwitter />
      </a>
    </div>
  );
}

export default HeaderSocial;
