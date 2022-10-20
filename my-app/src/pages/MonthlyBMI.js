import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import ResponsiveAppBar from "../components/AccountNavBar";
import SideBar from "../components/Sidebar";
import { Grid } from "@material-ui/core";
import { JSCharting } from "jscharting-react";
import { collection, query, where, getDocs } from "firebase/firestore";
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
  // const docRef = collection(db, "user.uid");

  // const q = query(docRef, where("bmi", "==", 13.33));

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "user.uid"));

    querySnapshot.forEach((doc) => {
      console.log("testing2");
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data(bmi));
    });
  };
  getData();

  const config = {
    type: "Vertical column",
    xAxis: { label_text: "Date" },
    yAxis: { label_text: "BMI" },
    series: [
      {
        Name: "Monthly BMI Chart",
        points: [
          { x: "A", y: 50 },
          { x: "B", y: 30 },
          { x: "C", y: 50 },
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
