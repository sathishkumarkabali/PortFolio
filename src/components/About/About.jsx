import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/AboutMe.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-end Developer</h3>
              <p>
              A Frontend Developer specializes in creating intuitive and engaging user interfaces for websites and applications. They utilize languages such as HTML, CSS, and JavaScript, along with frameworks like React, Angular, or Vue.js, to build responsive and visually appealing designs. Frontend Developers work closely with designers and backend developers to ensure seamless integration and functionality, focusing on optimizing user experience (UX) and performance. Strong problem-solving skills, attention to detail, and an understanding of web accessibility principles are essential for this role.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-end Developer</h3>
              <p>
              A skilled backend developer with a strong background in .NET Core and C#. Proficient in designing and implementing RESTful APIs, microservices architectures, and database integrations using SQL Server. Experienced in developing scalable and secure web applications, ensuring efficient data processing and high performance. Adept at collaborating with cross-functional teams and utilizing Agile methodologies. Passionate about leveraging modern development practices and tools to deliver robust solutions that meet client requirements. Strong problem-solving skills and a commitment to writing clean, maintainable code.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cloud.png")} alt="Cloud icon" />
            <div className={styles.aboutItemText}>
              <h3>DataBase & Cloud Services</h3>
              <p>
              Results-driven IT professional with extensive experience designing, implementing, and managing cloud solutions on AWS and Azure platforms. Proficient in deploying scalable applications, optimizing infrastructure, and ensuring adherence to security best practices. Experienced in leveraging services such as EC2, S3, and Lambda on AWS, as well as Virtual Machines, Azure Functions, and Azure DevOps on Azure. Strong background in automation, configuration management, and CI/CD pipelines. Possess excellent problem-solving abilities and a solid understanding of networking, database management, and architectural principles. Passionate about adopting the latest cloud technologies to drive innovation and improve operational efficiency.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
