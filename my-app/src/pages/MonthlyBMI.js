import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
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
import BMI from "./BMI";

const drawerWidth = 240;

function MonthlyBMI() {
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

  const getData = async () => {
    const docRef = collection(db, user.uid);

    const q = query(docRef, orderBy("date", "asc"));

    const bmidata = [];
    const time = [];

    const querySnapshot = await getDocs(q);
    //console.log(querySnapshot.id);
    let i = 0;
    querySnapshot.forEach((doc) => {
      bmidata[i] = doc.data().bmi;
      time[i] = doc.data().date;
      i++;
      //console.log(doc.id, " => ", doc.data().bmi);
    });

    return [bmidata, time];
  };

  const [points, setPoints] = useState([]);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const [bmidata, time] = await getData();
      //console.log(bmidata.length);
      // set object
      for (let i = 0; i < bmidata.length; i++) {
        let newPoint = {
          X: time[i],
          Y: bmidata[i],
        };
        //console.log(time[i], bmidata[i]);
        console.log(time[i])
        setPoints((points) => [...points, newPoint]);
      }
    };

    // call the function
    fetchData();
  }, []);
  // get first point

  const config = {
    debug: true,
    type: "line",
    xAxis: { scale_type: "time" },
    series: [
      {
        name: "BMI Chart",
        points: [
          // points.map((p) => {
          //   const date = new Date(p.X * 1000);
          //   console.log(date.toLocaleDateString("en-US"), p.Y);
          //   return { x: date.toLocaleDateString("en-US"), y: p.Y };
          // }),
          // ["1/1/2020", 29.9],
          // ["1/2/2020", 71.5],
          // ["1/3/2020", 106.4],
          // ["1/6/2020", 129.2],
          // ["1/7/2020", 144.0],
          // ["1/8/2020", 176.0],
        ],
      },
    ],
  };

  const divStyle = {
    width: "40rem",
    height: "40rem",
    margin: "50px auto",
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
          <div style={divStyle}>
            <JSCharting options={config} />
          </div>
        </Grid>
      </div>
    </div>
  );
}
export default MonthlyBMI;
