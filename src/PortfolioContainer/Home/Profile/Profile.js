import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import { HashLink as Link } from "react-router-hash-link";


const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
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
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Kajol Singh</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🔴",
                    1000,
                    "Frontend Web Dev 🌐",
                    1000,
                    "React/Next Dev 💻",
                    1000,
                    "MERN Stack Dev 👩🏻‍💻",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with frontend operations
              </span>
            </span>
          </div>

          <div className="profile-options">
            <Link to="#contact" smooth>
              <button className="btn primary-btn">Hire Me</button>
            </Link>
            <a href="kajol_cv_react.pdf" download="kajol_cv_react.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
