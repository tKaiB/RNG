import React, { useRef, useState } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import ResponsiveAppBar from "../components/AccountNavBar";
import SideBar from "../components/Sidebar";
import { Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, value) {
  return { name, value };
}



function CalorieIntake() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const weightRef = useRef()


  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  const [values, setValue] = React.useState(30);
  const [meal, setMeal] = useState(3);

  const [show, setShow] = useState(false);
  const [calorie,setCalorie] = useState(0)

  const [protein , setProtein] = useState(0)
  const [fat, setFat] = useState(0)
  const [carbs, setCarbs]  = useState(0)
  const [sugar, setSugar] = useState(0)
  const [saturatedFat,setSaturatedFat] = useState(0)




  const rows = [
    createData("Protein", protein),
    createData("Carbs", carbs),
    createData("Fat", fat),
    createData("Sugar", sugar),
    createData("SaturatedFat",saturatedFat),
  ];

const handleClick = () => {
    if (gainMuscle===true && loseFat ===true){
      alert("error!!")
      return
    }
    else{
      const bodyWeight = weightRef.current.value * 2.205
      const protein = (bodyWeight * 0.36).toFixed(2)
      setProtein(protein)


      if(gainMuscle===true){
        
        let dailyCalorie = bodyWeight*15 + 300
        dailyCalorie=dailyCalorie.toFixed(0)
        const carbs = ((dailyCalorie*0.5)/4).toFixed(2)
        setCarbs(carbs)
        const fat = (dailyCalorie*0.3).toFixed(2)
        setFat(fat)
        const sugar = ((dailyCalorie*0.1)/4).toFixed(2)
        setSugar(sugar)
        const saturatedFat = (dailyCalorie * 0.1).toFixed(2)
        setSaturatedFat(saturatedFat)


        setCalorie(dailyCalorie)

      }
      else{
        let dailyCalorie = bodyWeight*15 -500
        dailyCalorie=dailyCalorie.toFixed(0)
        const carbs = (dailyCalorie*0.5/4).toFixed(2)
        setCarbs(carbs)
        const fat = (dailyCalorie*0.3).toFixed(2)
        setFat(fat)
        const sugar = ((dailyCalorie*0.1)/4).toFixed(2)
        setSugar(sugar)
        const saturatedFat = (dailyCalorie * 0.1).toFixed(2)
        setSaturatedFat(saturatedFat)
        setCalorie(dailyCalorie)

      }
      setShow(!show);

    }
      
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange2 = (event, newValue) => {
    setMeal(newValue);
  };

  // useState for checkbox 
  const [loseFat,setLoseFat] = useState(false)
  const [gainMuscle,setGainMuscle] = useState(false)


  const handleChange3 = (event) =>{
    setLoseFat(!loseFat)

  }

  const handleChange4 = (event) =>{
    setGainMuscle(!gainMuscle)

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
            <div style={{ padding: "2rem" }}>
              <h1
                style={{
                  fontSize: "3rem",
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                Calculate Your Calories
              </h1>
              <p
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                Calculate Your Calories Using Our Simple Calculator
              </p>
              <FormControl sx={{ width: "25ch" }} variant="outlined">
                <p> My Weight </p>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={values}
                  inputRef = {weightRef}
                  endAdornment={
                    <InputAdornment position="end">kg</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    readOnly:true,
                    "aria-label": "weight",
                  }}
                  onChange={handleChange}
                  
                />
                <FormHelperText id="outlined-weight-helper-text"></FormHelperText>
                <Slider
                  style={{ width: "15rem" }}
                  size="small"
                  defaultValue={50}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  value={values}
                  onChange={handleChange}
                  max={200}
                  
                />
              </FormControl>
              <p>I aim to:</p>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} onChange={handleChange3} label="Lost Fat" />
                <FormControlLabel control={<Checkbox />} onChange ={handleChange4} label="Gain Muscle" />
              </FormGroup>
              <div style={{ paddingTop: 10 , paddingBottom:10 }}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "Pink" }}
                  onClick={handleClick}
                >
                  Calculate Daily Calories
                </Button>
              </div>
              <p>I eat {meal} meals a day</p>
              <Slider
                style={{ width: "15rem" }}
                size="small"
                defaultValue={3}
                aria-label="Small"
                valueLabelDisplay="auto"
                max={10}
                value = {meal}
                onChange = {handleChange2}
              />
              <p>Enter Daily Calorie Intake</p>
              <FormControl sx={{ width: "25ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-calorieintake"
                  defaultValue="0"
                  value = {calorie}
                  endAdornment={
                    <InputAdornment position="end">kcal</InputAdornment>
                  }
                  aria-describedby="outlined-calorieintake-helper-text"
                />
                <FormHelperText id="outlined-calorieintake-helper-text"></FormHelperText>
              </FormControl>
            </div>
          </Grid>
          <Grid xs={5}>
            {show ? (
              <div>
                <div style={{ padding: "2rem" }}>
                  <h1
                    style={{
                      fontSize: "3rem",
                      fontFamily: "'Times New Roman', Times, serif",
                    }}
                  >
                    Your daily Calorie Goals
                  </h1>
                </div>
                <p
                  style={{
                    marginLeft: "10rem",
                    marginTop: "5rem",
                    padding: "6rem 1rem 6rem 1rem",
                    width: "50%",
                    outline: "1px solid black",
                    borderRadius: "80%",
                    textAlign: "center",
                  }}
                >
                  Total {calorie} kcal
                </p>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ) : null}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CalorieIntake;
