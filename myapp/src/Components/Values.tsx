import React from "react";
import Styles from "../Assets/CSS/Values.module.css";
import Image from "next/image";
import icon1 from "../Assets/Pictures/icon1.png";
import icon2 from "../Assets/Pictures/icone2.png";
import icon3 from "../Assets/Pictures/icon3.png";

const Values = () => {
  return (
    <div className={Styles.main_container}>
      <div className={Styles.container}>
        <p>WHY CHOOSE US</p>
        <h1>Our Values</h1>
        <div className={Styles.flex}>
          <div>
            <Image src={icon1} alt="icon" />
            <h2>Speaking Clubs</h2>
            <p>
              In our school you will practice your speaking skills and just get
              a lot of positive emotions!
            </p>
          </div>
          <div>
            <Image src={icon2} alt="icon" />
            <h2>Quality Control</h2>
            <p>
              In our school you will practice your speaking skills and just get
              a lot of positive emotions!
            </p>
          </div>
          <div>
            <Image src={icon3} alt="icon" />
            <h2>Progress analysis</h2>
            <p>
              In our school you will practice your speaking skills and just get
              a lot of positive emotions!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
