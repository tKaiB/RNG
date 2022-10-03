import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "aliceblue",
          color: "black",
          display: "flex",
          padding: "0 1rem",
          fontFamily: "'Times New Roman', Times, serif",
        }}
      >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            RNG
          </Typography>
          <Typography
            variant="h6"
            component="a"
            href="/Aboutus"
            sx={{
              color: "black",
              textDecoration: "none",
              listStyle: "none",
              display: "flex",
              padding: "1rem",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            component="a"
            href="/Faq"
            sx={{
              color: "black",
              textDecoration: "none",
              listStyle: "none",
              display: "flex",
              padding: "1rem",
            }}
          >
            FAQ
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to='/'
            sx={{
              backgroundColor: "deepskyblue",
              borderRadius: "25px",
              color: "white",
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: "1rem",
              alignItems: "center",
              padding: "0.5rem 1rem",
              border: "none",
              margin: "1rem",
            }}
          >
            Sign Up
          </Button>
          <Button
            color="inherit"
            component ={Link}
            to='/signin'
            sx={{
              backgroundColor: "deepskyblue",
              borderRadius: "25px",
              color: "white",
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: "1rem",
              alignItems: "center",
              padding: "0.5rem 1rem",
              border: "none",
            }}
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
