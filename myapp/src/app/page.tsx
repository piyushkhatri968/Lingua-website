import Navbar from "@/Components/Navbar";
import React from "react";
import Styles from "../Assets/CSS/page.module.css";
import Image from "next/image";
import image from "../Assets/Pictures/Image.png";
import Values from "@/Components/Values";
import Teacher from "@/Components/Teacher";
import Student from "@/Components/Student";
import Info from "@/Components/Info";
import Trial from "@/Components/Trial";
import Footer from "@/Components/Footer";

const page = () => {
  return (
    <div className={Styles.main_container}>
      <div className={Styles.container}>
        <div>
          <Navbar />
          <div className={Styles.main}>
            <div className={Styles.left}>
              <h1>A Unique approach to learning foreign languages online</h1>
              <p>
                Learn at your own pace, with lifetime access on mobile and
                desktop
              </p>
              <div className={Styles.btn}>
                <button>Get Started</button>
              </div>
            </div>
            <div className={Styles.right}>
              <Image src={image} alt="Image" />
            </div>
          </div>
        </div>
      </div>
      <Values />
      <Teacher />
      <Student />
      <Info />
      <Trial />
      <Footer/>
    </div>
  );
};

export default page;
