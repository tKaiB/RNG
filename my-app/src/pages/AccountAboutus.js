import React from "react";
import AccountNavBar from "../components/AccountNavBar";
import "./styles.css";
import SideBar from "../components/Sidebar";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function AccountAboutus() {
  return (
    <div>
      <div>
        <AccountNavBar />
      </div>
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
        <Button
          color="inherit"
          component={Link}
          to="/account"
          style={{
            display: "flex",
            backgroundColor: "deepskyblue",
            borderRadius: "25px",
            color: "white",
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "1rem",
            alignItems: "center",
            padding: "0.5rem 1rem",
            border: "none",
            margin: "1rem",
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
}

export default AccountAboutus;
