import React from "react";
import "./Footer.scss";
import HeaderNavBar from "../Home/HeaderNavBar/HeaderNavBar";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_social_media">
        <div className="footer_social_media_icon">
          <a href="https://github.com/skajol183/" target="blank">
            <i className="fa fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kajol-singh-505235190/"
            target="blank"
          >
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="https://www.instagram.com/skajol183/" target="blank">
            <i className="fa fa-instagram"></i>
          </a>

          <a href="https://twitter.com/KajolSi61058732" target="blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/kaju.badam.501598?mibextid=b1r3HaZxQ2aOKKJt"
            target="blank"
          >
            <i className="fa fa-facebook-square"></i>
          </a>
        </div>
      </div>
      <div className="footer_menu">
        <HeaderNavBar />
      </div>
      <div className="footer_copyright">
        <span>Copyright @ 2023 Kajol Singh. All right received. </span>
      </div>
    </div>
  );
};

export default Footer;
