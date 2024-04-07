import React from "react";
import Styles from "../Assets/CSS/Teacher.module.css";
import Image from "next/image";
import person1 from "../Assets/Pictures/person1.png";
import person2 from "../Assets/Pictures/person2.png";
import person3 from "../Assets/Pictures/person3.png";
import flag1 from "../Assets/Pictures/flag1.png";
import flag2 from "../Assets/Pictures/flag2.png";
import flag3 from "../Assets/Pictures/flag3.png";

const Teacher = () => {
  return (
    <div>
      <div className={Styles.container}>
        <p>KEY PERSON</p>
        <h1>Meet Our Teachers</h1>
        <div className={Styles.flex}>
          <div>
            <div className={Styles.image}>
              <Image src={person1} alt="person" />
            </div>
            <h2>Christian Howard</h2>
            <div className={Styles.flag}>
              <Image src={flag1} alt="flag1" />
              <p>Italian teacher</p>
            </div>
          </div>
          <div>
            <div className={Styles.image}>
              <Image src={person2} alt="person" />
            </div>
            <h2>Sandra Wilson</h2>
            <div className={Styles.flag}>
              <Image src={flag2} alt="flag1" />
              <p>Spanish teacher</p>
            </div>
          </div>
          <div>
            <div className={Styles.image}>
              <Image src={person3} alt="person" />
            </div>
            <h2>Jimmy Cooper</h2>
            <div className={Styles.flag}>
              <Image src={flag3} alt="flag1" />
              <p>English teacher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
