import React from "react";
import { Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import ResponsiveAppBar from "../components/AccountNavBar";
import SideBar from "../components/Sidebar";
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
          <Grid component={Link} to="/monthlybmichart" xs={5}>
            <div>
              <img
                src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: "0.5",
                }}
                alt="brand"
              />
            </div>

            <h1
              style={{
                position: "absolute",
                right: "50%",
                left: "30%",
                bottom: "50%",
                color: "black",
              }}
            >
              Monthly BMI Chart
            </h1>
          </Grid>
          <Grid component={Link} to="/monthlycaloriechart" xs={5}>
            <div>
              <img
                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/9545/conversions/healthy-superfoods-thumb.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: "0.5",
                }}
                alt="brand"
              />
            </div>

            <h1
              style={{
                position: "absolute",
                right: "7.5%",
                bottom: "50%",
                color: "black",
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
