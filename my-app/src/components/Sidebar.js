import * as React from 'react';
import Grid from '@mui/material/Grid';

import HomeIcon from '@mui/icons-material/Home';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import List from '@mui/material/List';
export default function SideBar() {
  
  return (
    <Grid>
      <List>
        <ListItem>
          <ListItemButton>
            <HomeIcon />
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <HomeIcon />
            <ListItemText primary={"Calorie Intake"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <HomeIcon />
            <ListItemText primary={"Recipe Generator"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <HomeIcon />
            <ListItemText primary={"BMI Input"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Grid>


  )
}
