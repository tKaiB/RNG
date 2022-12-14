import React, { useState, useRef } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AccountController";
import { bmiController } from "../contexts/BMIController";
import ResponsiveAppBar from "../components/AccountNavBar";
import SideBar from "../components/Sidebar";
import { Grid } from "@material-ui/core";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Slider from "@mui/material/Slider";
import BoyIcon from "@mui/icons-material/Boy";
import Box from "@mui/material/Box";

import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

/**
 * @param {boolean} gender - Get gender of user
 * @param {number} height - Get height of user
 * @param {number} weight - Get weight of user
 * @returns {string} - BMI condition of user
 */
function BMI() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const testRef = useRef();
  const weightRef = useRef();

  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const [value, setHealth] = React.useState("");
  /**
   *
   * @param {string} condition - Get condition of user
   * set health condition of user based on BMI
   */

  const handleChange3 = (event, health) => {
    setHealth(health);
  };

  /**
   * @param {String} user.uid - Get userID of user
   * @param {String} bmi - Get bmi of user
   * @param {number} time - Get time of user input
   * upload bmi data to firebase
   */

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, user.uid), {
        bmi: parseFloat(testRef.current.value),
        time: serverTimestamp(),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    alert("Data added successfully");
  };
  /**
   * @param {number} marks - get marks of slider
   * set different points for slider
   */

  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 18.5,
      label: "18.5",
    },
    {
      value: 24.9,
      label: "24.9",
    },
    {
      value: 29.9,
      label: "29.9",
    },
  ];

  function valuetext(value) {
    return `${value}??C`;
  }

  const [gender, setGender] = React.useState("");

  //const [weight, setValue1] = React.useState(30);

  //const [height, setValue2] = React.useState(150);

  const [bmiInput, setValue3] = React.useState(8);

  /**
   * @returns {String} Male
   */

  const handleCLick1 = (event) => {
    event.preventDefault();
    setGender("Male");
  };

  /**
   * @returns {String} Female
   */

  const handleCLick2 = (event) => {
    event.preventDefault();
    setGender("Female");
  };
  const number = 0;
  const heightRef = useRef();

  /**
   * @param {number} bmi - Get bmi of user
   * @returns {string} bmi - bmi of user
   */

  const handleClick3 = () => {
    let bmi =
      weightRef.current.value /
      ((heightRef.current.value / 100) * (heightRef.current.value / 100));
    console.log(bmi);
    bmi = bmi.toFixed(2);
    testRef.current.value = bmi;

    setShow(!show);
    setValue3(bmi);
  };
  let condition = "";
  if (bmiInput < 18.5) {
    condition = "Underweight";
  } else if (bmiInput >= 18.5 && bmiInput <= 24.9) {
    condition = "Normal";
  } else if (bmiInput >= 25 && bmiInput <= 29.9) {
    condition = "Overweight";
  } else if (bmiInput >= 30) {
    condition = "Obese";
  }

  return (
    <div style={{ fontFamily: "Inter" }}>
      <div style={{ paddingBottom: 10 }}>
        <ResponsiveAppBar />
      </div>
      <div>
        <Grid
          container
          alignItems="flex-start"
          justify="flex-start"
          spacing={1}
          style={{ minHeight: "100vh" }}
        >
          <Grid xs={2} sm={6} style={{ padding: 0, maxWidth: 240 }}>
            <SideBar />
          </Grid>

          <Grid xs={5}>
            <div style={{ paddingLeft: 15 }}>
              <div>
                <h1
                  style={{
                    fontSize: "3rem",
                    // fontFamily: "Inter"
                    fontFamily: "Inter",
                    fontWeight: "bold",
                  }}
                >
                  Calculate Your Body Mass Index
                </h1>
                <p
                  style={{
                    fontSize: "1.5rem",
                    //fontFamily: "'Times New Roman', Times, serif",
                    fontFamily: "Inter",
                  }}
                >
                  Calculate Your BMI Using Our Simple Calculator
                </p>
                <p style={{ fontSize: 20, fontFamily: "Inter" }}>
                  I am a <b>{gender}</b>
                </p>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "pink", textTransform: "none" }}
                  onClick={handleCLick1}
                >
                  Male
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "pink",
                    margin: "1rem",
                    textTransform: "none",
                  }}
                  onClick={handleCLick2}
                >
                  Female
                </Button>
                <FormControl sx={{ display: "block" }} variant="outlined">
                  <p> My Weight </p>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    defaultValue={number}
                    type="number"
                    endAdornment={
                      <InputAdornment position="end">kg</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                      //readOnly: true,
                    }}
                    inputRef={weightRef}
                  />
                  <FormHelperText id="outlined-weight-helper-text"></FormHelperText>

                  <p> My Height </p>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    defaultValue={number}
                    type="number"
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                      //readOnly: true,
                    }}
                    inputRef={heightRef}
                  />
                  <div style={{ paddingTop: 10, paddingBottom: 10 }}></div>
                </FormControl>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "Pink",
                    display: "flex",
                    textTransform: "none",
                    borderRadius: "10px",
                  }}
                  fullWidth
                  onClick={handleClick3}
                >
                  Calculate BMI
                </Button>
                <p>
                  Enter BMI Value
                  <FormControl
                    sx={{ display: "flex", width: "25ch" }}
                    variant="outlined"
                  >
                    <OutlinedInput
                      id="outlined-adornment-BMI"
                      defaultValue={number}
                      type="number"
                      aria-describedby="outlined-BMI-helper-text"
                      inputRef={testRef}
                    />
                  </FormControl>
                </p>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "Pink",
                    display: "flex",
                    textTransform: "none",
                    borderRadius: "10px",
                  }}
                  fullWidth
                  onClick={handleSubmit2}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Grid>

          {/* Need throw this into the useState */}
          <Grid xs={5}>
            {show ? (
              <div>
                <div>
                  <h1
                    style={{
                      textAlign: "center",
                      fontSize: "3rem",
                      //fontFamily: "'Times New Roman', Times, serif",
                    }}
                  >
                    Your BMI Is
                  </h1>

                  <h1
                    id="bmiOutput"
                    style={{
                      textAlign: "center",
                      fontSize: "3rem",
                      //fontFamily: "'Times New Roman', Times, serif",
                    }}
                  >
                    {bmiInput}
                  </h1>
                </div>
                <div style={{ position: "center" }}>
                  <BoyIcon
                    style={{ fontSize: "30rem" }}
                    baseClassName="material-icons-boy"
                  >
                    BoyIcon
                  </BoyIcon>
                </div>

                <Box>
                  <Slider
                    style={{
                      marginLeft: "4rem",
                      display: "flex",
                      width: "80%",
                    }}
                    aria-label="Custom marks"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    marks={marks}
                    value={bmiInput}
                    max={40}
                    onChange={handleChange3}
                  />
                </Box>
                <p
                  style={{
                    fontSize: "1.5rem",
                    marginLeft: "10rem",
                    paddingTop: "2rem",
                  }}
                >
                  You are in the {condition} range
                </p>
              </div>
            ) : null}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default BMI;
