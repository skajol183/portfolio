import React from "react";
import styles from "./ResumeData.module.scss";

const ResumeData = ({ resumeData, defaultProp }) => {
  const educationData = resumeData[0].eduData;
  const experienceData = resumeData[1].expData;
  const skillsData = resumeData[2].skillsData;
  const interestedData = resumeData[3].interestedData;

  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <ul>
          {defaultProp === "education"
            ? educationData.map((item) => {
                return (
                  <li className={styles.list}>
                    <div className={styles.heading}>
                      <h3>{item.heading}</h3>
                      <p>{item.content}</p>
                    </div>
                    <div className={styles.content}>
                      <button
                        className={`${styles.resumeBtn} btn highlighted-btn`}
                      >
                        {item.yearData}
                      </button>
                    </div>
                  </li>
                );
              })
            : defaultProp === "experience"
            ? experienceData.map((item) => {
                return (
                  <li className={styles.list}>
                    <div className={styles.heading}>
                      <h3>{item.heading}</h3>
                      <h4>{item.post}</h4>
                      <p>{item.content}</p>
                    </div>
                    <div className={styles.content}>
                      <button
                        className={`${styles.resumeBtn} btn highlighted-btn`}
                      >
                        {item.yearData}
                      </button>
                    </div>
                  </li>
                );
              })
            : defaultProp === "skills"
            ? skillsData.map((item) => {
                return (
                  <li className={styles.list}>
                    <div className={styles.heading}>
                      <h3>{item.heading}</h3>
                      <progress id="file" value={item.progressValue} max="100">
                        {item.progressValue}%
                      </progress>
                    </div>
                  </li>
                );
              })
            : defaultProp === "interests"
            ? interestedData.map((item) => {
                return (
                  <li className={styles.list}>
                    <div className={styles.heading}>
                      <h3>{item.heading}</h3>
                      <h4>{item.post}</h4>
                      <p>{item.content}</p>
                    </div>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default ResumeData;
