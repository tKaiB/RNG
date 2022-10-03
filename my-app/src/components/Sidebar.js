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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            marginTop: 15,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
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
}
