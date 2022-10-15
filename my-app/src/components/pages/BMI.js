import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import ResponsiveAppBar from "../AccountNavBar";
import SideBar from "../Sidebar";
import { Grid } from "@material-ui/core";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Slider from "@mui/material/Slider";
import BoyIcon from "@mui/icons-material/Boy";
import Box from "@mui/material/Box";

function BMI() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  // const health = [
  //   if (marks < 18.5) 
  //       health = "Underweight"
  //   if (maths >18.5 && marks < 24.9)
  //       health= "Healthy"
  //   if  (maths >25 && marks < 29.9)
  //   health = "Overweight"
  //   if (maths >30)
  //   health = "Obese"
  // ];
  
  const [value, setHealth] = React.useState("");

  const handleChange3 = (event, health) => {
    setHealth(health);
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
            <div >
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
                  }}
                  onChange={handleChange1}
                />
                <FormHelperText id="outlined-weight-helper-text">
                </FormHelperText>
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
                  }}
                  onChange={handleChange2}
                />
                <FormHelperText id="outlined-weight-helper-text">
                </FormHelperText>
                <Slider
                  style={{ width: "15rem" }}
                  size="small"
                  defaultValue={50}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  value={height}
                  onChange={handleChange2}
                  max={200}
                />
              </FormControl>
              <Button
                variant="contained"
                style={{ backgroundColor: "Pink" , display:'flex' }}
                fullWidth
              >
                Calculate BMI
              </Button>
              <p>
                Enter BMI Value
                <FormControl
                  sx={{ display: "flex",  width: "25ch" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-BMI"
                    defaultValue="0"
                    aria-describedby="outlined-BMI-helper-text"
                  />
                </FormControl>
              </p>
              <Button
                variant="contained"
                style={{ backgroundColor: "Pink" , display:'flex' }}
                fullWidth
              >
                Submit
              </Button>

            </div>
          </Grid>

          {/* Need throw this into the useState */}
          <Grid xs={5}>
            <div >
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "3rem",
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                Your BMI Is
              </h1>
            </div>
            <BoyIcon
              style={{ fontSize: "30rem" }}
              baseClassName="material-icons-boy"
            >
              BoyIcon
            </BoyIcon>
            ;
            <Box>
              <Slider
                style={{ marginLeft: "4rem", display: "flex", width: "80%" }}
                aria-label="Custom marks"
                defaultValue={20}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                marks={marks}
                max={40}
                onChange={handleChange3}
              />
            </Box>
            {/* <p>You are in the {health} range</p> */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default BMI;
