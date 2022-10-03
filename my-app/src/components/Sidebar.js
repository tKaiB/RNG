import * as React from 'react';
import Grid from '@mui/material/Grid';
import HomeIcon from '@mui/icons-material/Home';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function SideBar() {
  const [view, setView] = React.useState('Home');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  return(
    <Grid>
        <ToggleButtonGroup
          orientation="vertical"
          value={view}
          exclusive
          onChange={handleChange}
          fullWidth
        >
          <ToggleButton value="Home">
            <HomeIcon />Home
          </ToggleButton>
          <ToggleButton value="Calorie Intake">
            <HomeIcon />Calorie Intake
          </ToggleButton>
          <ToggleButton value="Recipe Generator">
            <HomeIcon />Recipe Generator
          </ToggleButton>
          <ToggleButton value="BMI Input">
            <HomeIcon />BMI Input
          </ToggleButton>
        </ToggleButtonGroup>
    </Grid>
  )
}
export default SideBar