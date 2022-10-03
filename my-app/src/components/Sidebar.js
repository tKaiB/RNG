import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";

const drawerWidth = 240;
export default function SideBar() {
  return (
<<<<<<< HEAD
    <Box sx={{ display: "flex" }}>
=======
    <Box sx={{ display: 'flex' }}>
>>>>>>> 6e0fa8fb783632b265c6f6ac8caa6bfffed00ace
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
<<<<<<< HEAD
      ></AppBar>
=======
      >
      </AppBar>
>>>>>>> 6e0fa8fb783632b265c6f6ac8caa6bfffed00ace
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
<<<<<<< HEAD
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            marginTop: 15,
            boxSizing: "border-box",
=======
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
>>>>>>> 6e0fa8fb783632b265c6f6ac8caa6bfffed00ace
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
<<<<<<< HEAD
        <List>
          <ListItem>
            <ToggleButton value="Home" aria-label="Home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ToggleButton>
          </ListItem>
          <ListItem>
            <ToggleButton value="Calorie Intake" aria-label="Calorie Intake">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Calorie Intake"} />
            </ToggleButton>
          </ListItem>
          <ListItem>
            <ToggleButton
              value="Recipe Generator"
              aria-label="Recipe Generator"
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Recipe Generator"} />
            </ToggleButton>
          </ListItem>
          <ListItem>
            <ToggleButton value="BMI Input" aria-label="BMI Input">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"BMI Input"} />
            </ToggleButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
=======
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
>>>>>>> 6e0fa8fb783632b265c6f6ac8caa6bfffed00ace
}
