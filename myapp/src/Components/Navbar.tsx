"use client";
import React, { useState } from "react";
// import "@/Assets/CSS/Navbar.css";
import "../Assets/CSS/Navbar.css";
import logo from "../Assets/Pictures/Logo.png";
import Image from "next/image";

const Navbar = () => {
  const [active, setactive] = useState("nav_menu");
  const [toggle, settoggle] = useState("nav_toggler");
  const navToggle = () => {
    active === "nav_menu"
      ? setactive("nav_menu nav_active")
      : setactive("nav_menu");

    //toggle icon
    toggle === "nav_toggler"
      ? settoggle("nav_toggler toggle")
      : settoggle("nav_toggler");
  };

  return (
    <div>
      <nav className="Navbar">
        <div className="logo">
          <a href="#">
            <Image src={logo} alt="Logo" />
          </a>
        </div>
        <div className="options">
          <ul className={active}>
            <li className="nav_item">
              <a href="#">Courses</a>
            </li>
            <li className="nav_item">
              <a href="#">About Us</a>
            </li>
            <li className="nav_item">
              <a href="#">Teacher</a>
            </li>
            <li className="nav_item">
              <a href="#">Pricing</a>
            </li>
            <li className="nav_item">
              <a href="#">careers</a>
            </li>
            <li className="nav_item">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="btn">
          <button>Get Started</button>
        </div>
        <div onClick={navToggle} className={toggle}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
