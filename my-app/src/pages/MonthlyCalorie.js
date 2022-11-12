import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AccountController";
import { CalorieCounterController } from "../contexts/CalorieCounterController";
import ResponsiveAppBar from "../components/AccountNavBar";
import SideBar from "../components/Sidebar";
import { Grid } from "@material-ui/core";
import { JSCharting } from "jscharting-react";
import {
  limit,
  orderBy,
  doc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

const drawerWidth = 240;

/**
 * @param {string} user.uid - Gets the userID
 * @param {int} calories - Gets the calories from the user
 * @param {date} date - Gets the current date
 *
 */

function MonthlyCalorie() {
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


  /**
   * 
   * @param {string}  user.uid 
   * @returns {string[]}
   */

  const getData = async () => {
    //console.log("test");
    const docRef = collection(db, user.uid + "calorie");

    const q = query(docRef, orderBy("time", "asc"));

    const caloriedata = [];
    const time = [];

    const querySnapshot = await getDocs(q);
    //console.log(querySnapshot.id);
    let i = 0;
    querySnapshot.forEach((doc) => {
      caloriedata[i] = doc.data().calorie;
      time[i] = doc.data().time;
      i++;
      //console.log(doc.id, " => ", doc.data().bmi);
    });

    return [caloriedata, time];
  };
  getData();

  const [points, setPoints] = useState([]);


  /**
   *  waits for the data to be fetched 
   */
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const [caloriedata, time] = await getData();
      //console.log(bmidata.length);
      // set object
      for (let i = 0; i < caloriedata.length; i++) {
        const newTime = new Date(time[i].seconds * 1000).toLocaleDateString();
        let newPoint = [newTime, caloriedata[i]];
        //console.log("effect test" + time[i], bmidata[i]);
        //console.log(time[i]);
        setPoints((points) => [...points, newPoint]);
      }
    };

    // call the function
    fetchData();
  }, []);
  // get first point

  const config = {
    type: "line",
    yAxis: {
      label_text: "Calorie Intake",
    },
    xAxis: {
      scale_type: "date",
      label_text: "Date",
      time: {
        parser: "MM/DD/YYYY HH:mm",
        tooltipFormat: "ll HH:mm",
        unit: "day",
        unitStepSize: 1,
        displayFormats: {
          day: "MM/DD/YYYY",
        },
      },
    },
    series: [
      {
        name: "BMI Chart",
        points: points,
        // ["1/1/2020", 29.9],
        // ["1/2/2020", 71.5],
        // ["1/3/2020", 106.4],
        // ["1/6/2020", 129.2],
        // ["1/7/2020", 144.0],
        // ["1/8/2020", 176.0],
      },
    ],
  };

  const divStyle = {
    width: "40rem",
    height: "40rem",
    margin: "50px auto",
  };

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
          <div style={divStyle}>
            <h1 style={{ textAlign: "center" }}>Your Calorie Intake Chart</h1>
            <JSCharting options={config} />
          </div>
        </Grid>
      </div>
    </div>
  );
}
export default MonthlyCalorie;
