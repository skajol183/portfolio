import React from "react";
import styles from "./Resume.module.scss";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { FaHistory, FaLaptop, FaGraduationCap } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdInterests } from "react-icons/md";
import ResumeData from "../Resume/ResumeData/index";

const Resume = () => {
  const resumeData = [
    {
      eduData: [
        {
          id: "1",
          heading: "Dr. A. P. J. Abdul Kalam Technical University, UP",
          content: "Bachelor of Technology in Computer Science Engineering",
          yearData: "2018-2022",
        },
        {
          id: "2",
          heading: "Intermediate, UP Board",
          content: "Prabha Devi Adarsh Kanya Inter College, Moradabad",
          yearData: "2017-2018",
        },
        {
          id: "3",
          heading: "High School, UP Board",
          content: "Prabha Devi Adarsh Kanya Inter College, Moradabad",
          yearData: "2015-2016",
        },
      ],
    },
    {
      expData: [
        {
          id: "1",
          heading: "Redcliffe Lifetech Private Limited",
          post: "Software Engineer",
          content:
            "A Software Engineer for building web application in frontend development using ReactJS, NextJS, Javascript technologies.",
          yearData: "2022-present",
        },
        {
          id: "2",
          heading: "Chetu Inc.",
          post: "Magento Developer",
          content:
            "A Magento Developer Trainee for building E-commerce website using CMS called Magento technology with PHP.",
          yearData: "2022",
        },
        {
          id: "3",
          heading: "Law Experts LLP.",
          post: "Web Developer Intern",
          content:
            "A Web Developer Intern for building web pages. Created login system for upcoming users using PHP, SQL, MongoDB.",
          yearData: "2022",
        },
        {
          id: "4",
          heading: "LM Softech.",
          post: "Web Designer trainee",
          content:
            "A Web Designer trainee for building web pages. Learned new technologies and worked with Html, Css, Javascript and Css frameworks like Bootstarp, Tailwind.",
          yearData: "2021",
        },
      ],
    },
    {
      skillsData: [
        {
          id: "1",
          heading: "Javascript",
          progressValue: "80",
        },
        {
          id: "2",
          heading: "ReactJS",
          progressValue: "70",
        },
        {
          id: "3",
          heading: "NextJS",
          progressValue: "70",
        },
        {
          id: "4",
          heading: "NodeJS",
          progressValue: "50",
        },
        {
          id: "5",
          heading: "HTML",
          progressValue: "80",
        },
        {
          id: "6",
          heading: "CSS",
          progressValue: "80",
        },
        {
          id: "7",
          heading: "PHP",
          progressValue: "40",
        },
        {
          id: "8",
          heading: "MySQL",
          progressValue: "40",
        },
        {
          id: "9",
          heading: "MongoDB",
          progressValue: "50",
        },
      ],
    },
    {
      interestedData: [
        {
          id: "1",
          heading: "Web development",
          content:
            "I m a eager to learn new technologies and a quick learner to learn new things want to learn more about development and technologies to build up my career ",
        },
        {
          id: "2",
          heading: "E-commerce Website",
          post:
            "Technologies Used : ReactJS, MongoDB, NodeJS, ExpressJS, Redux, Bootstrap",
          content:
            "Online ecommerce Website for showcasing and selling products online with payment system integration, both Paypal and Stripe",
        },
        {
          id: "2",
          heading: "Cooking",
          content:
            "I like cooking and always tries new things to cook and taste it and we should try new dices",
        },
        {
          id: "3",
          heading: "Music",
          content:
            "I like to listen sufi and pop songs. It helps me to come out from the bad situation because its my best stress reliever",
        },
      ],
    },
  ];

  return (
    <section className={styles.resume_container} id="resume">
      <div className={styles.resume_heading}>
        <h2>Resume</h2>
        <span>My formal bio details</span>
      </div>
      <div className={styles.resume_parent}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="education">
          <Row className={styles.row} bsPrefix="row">
            <Col>
              <Nav
                variant="pills"
                className={`${styles.navLinkHead} flex-column tab_wrapper`}
                // bsPrefix="navLinkHead"
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="education"
                    className={styles.navLink}
                    // bsPrefix="navLink"
                  >
                    <FaGraduationCap /> Education
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="experience"
                    className={styles.navLink}
                    // bsPrefix="navLink"
                  >
                    <FaHistory /> Experience
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="skills"
                    className={styles.navLink}
                    // bsPrefix="navLink"
                  >
                    <FaLaptop /> Programming Skills
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="interests"
                    className={styles.navLink}
                    // bsPrefix="navLink"
                  >
                    <MdInterests /> Interests
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="education">
                  <ResumeData resumeData={resumeData} defaultProp="education" />
                </Tab.Pane>
                <Tab.Pane eventKey="experience">
                  <ResumeData
                    resumeData={resumeData}
                    defaultProp="experience"
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="skills">
                  <ResumeData resumeData={resumeData} defaultProp="skills" />
                </Tab.Pane>
                <Tab.Pane eventKey="interests">
                  <ResumeData resumeData={resumeData} defaultProp="interests" />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </section>
  );
};

export default Resume;
