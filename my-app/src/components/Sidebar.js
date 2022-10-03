import * as React from 'react';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 240;
export default function SideBar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <Box>
          <ToggleButton value="Home" aria-label="Home">
            <HomeIcon />
            <ListItemText primary={'Home'} />
          </ToggleButton>
          <ToggleButton value="Calorie Intake" aria-label="Calorie Intake">
            <HomeIcon />
            <ListItemText primary={'Calorie Intake'} />
          </ToggleButton>
          <ToggleButton value="Recipe Generator" aria-label="Recipe Generator">
            <HomeIcon />
            <ListItemText primary={'Recipe Generator'} />
          </ToggleButton>
          <ToggleButton value="BMI Input" aria-label="BMI Input">
            <HomeIcon />
            <ListItemText primary={'BMI Input'} />
          </ToggleButton>
        </Box>
        <Divider />
      </Drawer>
    </Box>
  )
}
