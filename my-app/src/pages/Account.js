import React from "react";
import { Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AccountController";
import ResponsiveAppBar from "../components/AccountNavBar";
import SideBar from "../components/Sidebar";
import { Grid } from "@material-ui/core";

const drawerWidth = 240;

/**
 * @param {string} email - Get email of user
 * @param {string} name - Get name of user
 * @param {number} age - Get age of user
 * @param {float} bmi - Get bmi of user
 * @returns {Account} Account - Account object
 */
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
          <Grid item xs={2} sm={6} style={{ padding: 0, maxWidth: 240 }}>
            <SideBar />
          </Grid>
          <Grid item component={Link} to="/monthlybmichart" xs={5}>
            <div>
              <img
                src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg"
                style={{
                  width: "100%",
                  minHeight: "100vh",
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
          <Grid item component={Link} to="/monthlycaloriechart" xs={5}>
            <div>
              <img
                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/9545/conversions/healthy-superfoods-thumb.jpg"
                style={{
                  width: "auto",
                  minHeight: "100vh",
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
