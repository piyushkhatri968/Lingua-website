import React from "react";
import styles from "../Assets/CSS/Student.module.css";
import Image from "next/image";
import person from "../Assets/Pictures/person4.png";
import flag from "../Assets/Pictures/flag3.png";

const Student = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <p>TOP STUDYING</p>
        <h1>Our Students Say</h1>
        <div className={styles.flex}>
          <div className={styles.left}>
            <Image src={person} width={440} height={500} alt="person" />
          </div>
          <div className={styles.right}>
            <h2>Martin Watson</h2>
            <div className={styles.flag}>
              <Image src={flag} alt="flag" />
              <p>English Teacher</p>
            </div>
            <p className={styles.stubio}>
              There is no way I could have made the same progress learning
              Spanish without using Lingua. The best part is now learning
              Spanish has become one of my biggest hobbies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
