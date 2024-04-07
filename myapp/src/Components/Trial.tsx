import React from "react";
import Styles from "../Assets/CSS/Trial.module.css";

const Trial = () => {
  return (
    <div className={Styles.main_container}>
      <div className={Styles.container}>
        <h2>Get a free trial lesson today</h2>
        <p>Start fulfilling your language dreams with our school</p>
        <div className={Styles.email}>
          <input type="email" name="" id="" placeholder="Enter a email" />
          <button>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Trial;
