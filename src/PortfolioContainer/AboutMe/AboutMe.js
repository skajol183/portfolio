import React from "react";
import "./AboutMe.scss";
import { HashLink as Link } from "react-router-hash-link";

const AboutMe = () => {
  const aboutSkillsData = [
    { id: 1, skill: "Software Engineer for building Web Applications" },
    { id: 2, skill: "Interactive Frontend Web Developer as per the design" },
    { id: 3, skill: "ReactJS and NextJS developer" },
    { id: 4, skill: "Redux for State Management" },
    { id: 5, skill: "Version Control System Git, Github, Gitlab" },
  ];
  return (
    <section className="about-container" id="about">
      <div className="about-heading">
        <h2>About Me</h2>
        <span>A Software Engineer</span>
      </div>
      <div className="about-parent">
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
        <div className="about-details">
          <div className="about-para">
            <p>
              I am a skilled software engineer with over 2 years of experience
              in the industry. My passion lies in creating captivating website
              design and implementing them Through front end development. I am a
              passionate about learning new technologies and taking on new
              challenges. I have gained expertise in frontend frameworks and
              libraries, such as ReactJS, NextJS, Redux, JavaScript and SASS
              among others.
            </p>
          </div>
          <div className="about-skills">
            <ul>
              {aboutSkillsData.map((item) => {
                return (
                  <li key={item.id}>
                    <span>{item.skill}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="about-options">
            <Link to="#contact" smooth>
              <button className="btn primary-btn">Hire Me</button>
            </Link>
            <a href="kajol_cv_react.pdf" download="kajol_cv_react.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
