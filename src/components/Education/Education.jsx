import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("education/education.png")}
          alt="My Education"
          className={styles.educationImage}
        />
        <ul className={styles.educationItems}>
          <li className={styles.educationItem}>
            <img src={getImageUrl("education/isbm.png")} alt="ISMB icon" />
            <div className={styles.educationItemText}>
              <h3>Master of Business Administration</h3>
              <h1>Indian School of Business Management & Administration</h1>
              <p>
              Major in Operation & Production Management
              <p>2004 - 2008</p>
              </p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img src={getImageUrl("education/annauniversity.png")} alt="Anna University" />
            <div className={styles.educationItemText}>
              <h3>Bachelor of Engineering</h3>
              <h1>Anna University</h1>
              <p>
              Minor in Mechanical
              <p>2013 - 2014</p>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};