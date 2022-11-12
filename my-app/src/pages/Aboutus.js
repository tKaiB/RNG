import React from "react";
import NavBar from "../components/Navbar";
import "./styles.css";

/**
 *
 * @returns {JSX} - FAQ page
 */
function Aboutus() {
  return (
    <div style={{ fontFamily: "Inter" }}>
      <NavBar />
      <div class="about-section">
        <h1>About Us</h1>
        <p>
          We are a group of students from the Nanyang Technological University
          who are aiming to provide an application for health conscious people
          to find recipes that suit their individual health needs as well as
          healthier food choices available in Singapore for citizens.
        </p>
      </div>
      <div class="Our-Team">
        <h2>Our Team</h2>
        <p>JAIN SHIKHAR - Year 2 Computer Science Undergraduate</p>
        <p>LIM ZI SUAN - Year 2 Computer Science Undergraduate</p>
        <p>VIGNESH EZHIL - Year 2 Computer Science Undergraduate</p>
        <p>EVA LIM LITING - Year 3 Computer Science Undergraduate</p>
        <p>
          REMELIA SHIRLLEY JOHN BENEDICT - Year 3 Computer Engineering
          Undergraduate
        </p>
        <p>Tan Kai Boon - Year 2 Computer Science Undergraduate</p>
      </div>
    </div>
  );
}

export default Aboutus;
