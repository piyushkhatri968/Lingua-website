"use client";
import React from "react";
import styles from "../Assets/CSS/Info.module.css";
import { FaPlus } from "react-icons/fa";

const Info = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <p>MORE INFO</p>
        <h1>Common Questions</h1>
        <div className={styles.grid}>
          <div className={styles.disclosure}>
            <div>How the first lesson with teacher will be?</div>
            <div>
              <FaPlus />
            </div>
          </div>
          <div className={styles.disclosure}>
            <div>How the first lesson with teacher will be?</div>
            <div>
              <FaPlus />
            </div>
          </div>
          <div className={styles.disclosure}>
            <div>How the first lesson with teacher will be?</div>
            <div>
              <FaPlus />
            </div>
          </div>
          <div className={styles.disclosure}>
            <div>How the first lesson with teacher will be?</div>
            <div>
              <FaPlus />
            </div>
          </div>
          <div className={styles.disclosure}>
            <div>How the first lesson with teacher will be?</div>
            <div>
              <FaPlus />
            </div>
          </div>
          <div className={styles.disclosure}>
            <div>How the first lesson with teacher will be?</div>
            <div>
              <FaPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
