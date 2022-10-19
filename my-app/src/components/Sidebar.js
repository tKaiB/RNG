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

function SideBar() {
  const [view, setView] = React.useState("Home");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  return (
    <Grid>
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
        fullWidth
      >
        <ToggleButton component={Link} to="/account" value="Home">
          <HomeIcon />
          Home
        </ToggleButton>
        <ToggleButton component={Link} to="/CalorieIntake" value="Calorie Intake">
          <AnalyticsIcon />
          Calorie Intake
        </ToggleButton>
        <ToggleButton component={Link} to='/recipegenerator' value="Recipe Generator">
          <FormatListNumberedIcon />
          Recipe Generator
        </ToggleButton>
        <ToggleButton component={Link} to="/BmiInput" value="BMI Input">
          <InputIcon />
          BMI Input
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
}
export default SideBar;
