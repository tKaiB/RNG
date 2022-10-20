import React from "react";
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
  const docRef = collection(db, user.uid);

  const q = query(docRef, orderBy("date", "asc"));

  const getData = async () => {
    const bmidata = [];
    const time = [];

    const querySnapshot = await getDocs(q);
    //console.log(querySnapshot.id);
    let i = 0;
    querySnapshot.forEach((doc) => {
      bmidata[i] = doc.data().bmi;
      time[i] = doc.data().bmi;
      i++;
      //console.log(doc.id, " => ", doc.data().bmi);
    });

    return [bmidata,time]
  };

  console.log(getData())
  const bmidata = getData()[0]
  const time = getData()[1]

  const config = {
    type: "Vertical column",
    xAxis: { label_text: "Date" },
    yAxis: { label_text: "BMI" },
    series: [
      {
        Name: "Monthly BMI Chart",
        points: [
          // { X: time[0], Y: bmidata[0] },
          // { X: time[1], Y: bmidata[1] },
          // { X: time[2], Y: bmidata[2] },
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
