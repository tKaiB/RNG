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
      <div>
        <ResponsiveAppBar />
      </div>
      <div>
        <Grid container>
          <div>
            <Grid style={{ padding: 0 }}>
              <SideBar />
            </Grid>
          </div>
        </Grid>

        {/* <Button onClick={handleLogout} type="submit">
        Log out
      </Button> */}
      </div>
    </div>
  );
}
export default Account;
