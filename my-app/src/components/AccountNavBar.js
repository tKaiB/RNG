import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import { db, upload, storage } from "../firebase";
import { useEffect, useState } from "react";

const settings = ["Profile", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();
  const { user, logout } = UserAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = React.useState(
    "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
  );

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  return (
    <Box sx={{ flexGrow: 1, fontFamily: "Inter" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "aliceblue",
          color: "black",
          display: "flex",
          padding: "0 1rem",
          //fontFamily: "'Times New Roman', Times, serif",
        }}
      >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            RNG
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            to="/accountaboutus"
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
            component={Link}
            to="/accountfaq"
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Avatar" src={photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem component={Link} to="/profile">
                Profile
              </MenuItem>
              <MenuItem component={Link} to="/signin" onClick={handleLogout}>
                {" "}
                Logout
              </MenuItem>
              {/* {settings.map((setting) => (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default ResponsiveAppBar;
