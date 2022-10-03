import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import ResponsiveAppBar from "./AccountNavBar";
import SideBar from "./Sidebar";
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
      <div style={{paddingBottom:10}}>
        <ResponsiveAppBar />
      </div>
      <div>
        <Grid container direction = {'row'} alignItems="flex-start" justify = 'flex-start' spacing={1}>
            <Grid xs = {4} sm ={4} style={{ padding: 0 }}>
              <SideBar />
            </Grid>

            <Grid xs={6} sm ={4}>
              <h1>user email : {user && user.uid}</h1>
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
