import React, { useState, useRef } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import ResponsiveAppBar from "../components/AccountNavBar";
import SideBar from "../components/Sidebar";
import { Grid } from "@material-ui/core";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Slider from "@mui/material/Slider";
import BoyIcon from "@mui/icons-material/Boy";
import Box from "@mui/material/Box";

import { db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";

function BMI() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const testRef = useRef();

  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  const [value, setHealth] = React.useState("");

  const handleChange3 = (event, health) => {
    setHealth(health);
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "users", user.uid), {
        bmi: testRef.current.value,
      });
      alert("BMI updated!");
    } catch (e) {
      setError(e.message);
      alert(e.message);
      console.log(e.message);
    }
  };

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
    return `${value}°C`;
  }

  const [gender, setGender] = React.useState("");

  const [weight, setValue1] = React.useState(30);

  const [height, setValue2] = React.useState(150);

  const [bmiInput, setValue3] = React.useState(8);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  const handleCLick1 = (event) => {
    event.preventDefault();
    setGender("Male");
  };

  const handleCLick2 = (event) => {
    event.preventDefault();
    setGender("Female");
  };

  const heightRef = useRef();

  const handleClick3 = () => {
    let bmi = weight / ((height / 100) * (height / 100));
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
    <div>
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
                    fontFamily: "'Times New Roman', Times, serif",
                  }}
                >
                  Calculate Your Body Mass Index
                </h1>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "'Times New Roman', Times, serif",
                  }}
                >
                  Calculate Your BMI Using Our Simple Calculator
                </p>
                <p>
                  I am a <b>{gender}</b>
                </p>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "pink" }}
                  onClick={handleCLick1}
                >
                  Male
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "pink", margin: "1rem" }}
                  onClick={handleCLick2}
                >
                  Female
                </Button>
                <FormControl sx={{ display: "block" }} variant="outlined">
                  <p> My Weight </p>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    value={weight}
                    endAdornment={
                      <InputAdornment position="end">kg</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                      readOnly: true,
                    }}
                    onChange={handleChange1}
                  />
                  <FormHelperText id="outlined-weight-helper-text"></FormHelperText>
                  <Slider
                    style={{ width: "15rem" }}
                    size="small"
                    defaultValue={50}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    value={weight}
                    onChange={handleChange1}
                    max={200}
                  />

                  <p> My Height </p>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    value={height}
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                      readOnly: true,
                    }}
                    onChange={handleChange2}
                  />
                  <FormHelperText id="outlined-weight-helper-text"></FormHelperText>
                  <Slider
                    style={{ width: "15rem" }}
                    size="small"
                    defaultValue={50}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    value={height}
                    onChange={handleChange2}
                    max={200}
                    inputRef={heightRef}
                  />
                </FormControl>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "Pink", display: "flex" }}
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
                      defaultValue="0"
                      aria-describedby="outlined-BMI-helper-text"
                      inputRef={testRef}
                    />
                  </FormControl>
                </p>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "Pink", display: "flex" }}
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
                      fontFamily: "'Times New Roman', Times, serif",
                    }}
                  >
                    Your BMI Is
                  </h1>

                  <h1
                    id="bmiOutput"
                    style={{
                      textAlign: "center",
                      fontSize: "3rem",
                      fontFamily: "'Times New Roman', Times, serif",
                    }}
                  >
                    {bmiInput}
                  </h1>
                </div>
                <div style={{ paddingLeft: 65 }}>
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
