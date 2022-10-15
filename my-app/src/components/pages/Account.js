import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import ResponsiveAppBar from "../AccountNavBar";
import SideBar from "../Sidebar";
import { Grid } from "@material-ui/core";

const drawerWidth = 240;

function Account() {
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
            <div>
              <img
                src="https://source.unsplash.com/random"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="brand"
              />
            </div>
            <h1
              style={{
                position: "absolute",
                right: "50%",
                left: "30%",
                bottom: "50%",
                color: "white",
              }}
            >
              Monthly BMI Chart
            </h1>
          </Grid>
          <Grid xs={5}>
            <div>
              <img
                src="https://source.unsplash.com/random"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="brand"
              />
            </div>
            <h1
              style={{
                position: "absolute",
                right: "7.5%",
                bottom: "50%",
                color: "white",
              }}
            >
              Monthly calorie intake chart
            </h1>
          </Grid>
        </Grid>

        {/* <Button onClick={handleLogout} type="submit">
        Log out
      </Button> */}
      </div>
    </div>
  );
}
export default Account;
