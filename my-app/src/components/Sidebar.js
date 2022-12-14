import * as React from "react";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import List from "@mui/material/List";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import InputIcon from "@mui/icons-material/Input";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { Link, useNavigate } from "react-router-dom";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";

/**
 * 
 * @global SideBarUI
 */

function SideBar() {
  const [view, setView] = React.useState();

  // const handleChange = (event, nextView) => {
  //   setView(nextView);
  // };
  return (
    <Grid style={{ fontFamily: "Inter" }}>
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        // onChange={handleChange}
        fullWidth
      >
        <ToggleButton component={Link} to="/account" value="Home">
          <HomeIcon />
          Home
        </ToggleButton>
        <ToggleButton component={Link} to="/CalorieIntake" value="Calorie Intake">
          <InputIcon />
          Calorie Intake
        </ToggleButton>
        <ToggleButton component={Link} to="/monthlycaloriechart" value="Calorie Chart">
          <AnalyticsIcon />
          Calorie Chart
        </ToggleButton>
        <ToggleButton component={Link} to="/BmiInput" value="BMI Input">
          <InputIcon />
          BMI Input
        </ToggleButton>
        <ToggleButton component={Link} to="/monthlybmichart" value="BMI Chart">
          <AnalyticsIcon />
          BMI Chart
        </ToggleButton>
        <ToggleButton component={Link} to="/dynamic" value="DynamicRecipeGenerator">
          <FormatListNumberedIcon />
          Recipe Generator
        </ToggleButton>

      </ToggleButtonGroup>
    </Grid>
  );
}
export default SideBar;
