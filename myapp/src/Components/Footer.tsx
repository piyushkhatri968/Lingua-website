import React from "react";
import styles from "../Assets/CSS/Footer.module.css";
import Image from "next/image";
import footerlogo from "../Assets/Pictures/end logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div id={styles.row1} className={styles.rows}>
          <Image src={footerlogo} alt="footer logo" />
          <p>
            20 Osgood Rd, Milford, NH 03055, USA <br />
            +1283871239190213021
          </p>
        </div>
        <div id={styles.row2} className={styles.rows}>
          <ul>
          <li>Company</li>
            <li>Careers</li>
            <li>Teachers</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>
        <div id={styles.row3} className={styles.rows}>
          <ul>
          <li>Product</li>
            <li>Courses</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>
        <div id={styles.row4} className={styles.rows}>
          <ul>
          <li>Legal</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div id={styles.row5} className={styles.rows}>
          <div>
            <FaFacebook />
          </div>
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
