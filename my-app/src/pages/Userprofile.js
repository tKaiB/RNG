import React from "react";
import ResponsiveAppBar from "../components/AccountNavBar";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/Sidebar";
import { Grid, Button } from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { UserAuth, AuthContextProvider } from "../contexts/AccountController";
import { ProfilePageController } from "../contexts/ProfilePageController";
import { db, upload, storage } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";

function UserProfile() {
  const { user } = UserAuth();
  const{DisplayName , DisplayWeight , DisplayEmail , DisplayAge} = ProfilePageController()
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = React.useState(
    "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
  );
  const [loading, setLoading] = useState(false);
  async function getRecord() {
    const ref = doc(db, "users", user.uid);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      document.getElementById("name").innerText =
        "Name: " + docSnap.data().name;
      document.getElementById("age").innerText =
        "Age: " + docSnap.data().age + " Years Old";
      document.getElementById("weight").innerText =
        "Weight: " + docSnap.data().weight + " Kg";
    } else {
      console.log("error");
    }
  }

  async function upload(file, user, setLoading) {
    const fileRef = ref(storage, user.uid + ".png");
    setLoading(true);
    const snapshot = await uploadBytes(fileRef, file);

    const photoURL = await getDownloadURL(fileRef);

    updateProfile(user, { photoURL });
    //console.log(photolink);
    //console.log(user.photoURL);
    setLoading(false);
    alert("Uploaded file!");
  }

  getRecord();

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }
  function handleCLick() {
    upload(photo, user, setLoading);
  }

  useEffect(() => {
    //console.log(user.uid);
    //console.log(user.photoURL);
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
      //console.log(user.photoURL);
    }
  }, [user]);

  return (
    <div style={{ fontFamily: "Inter" }}>
      <div style={{ paddingBottom: 9 }}>
        <ResponsiveAppBar />
      </div>

      <Grid
        container
        alignItems="flex-start"
        justify="flex-start"
        spacing={1}
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={2} sm={6} style={{ padding: 0, maxWidth: 240 }}>
          <SideBar />
        </Grid>

        <Grid item xs={1}>
          <div></div>
        </Grid>

        <Grid item>
          <p
            style={{
              //fontFamily: "inter",
              fontSize: "32px",
              fontStyle: "regular",
              textDecoration: "underline",
            }}
          >
            My Profile
          </p>
          <Avatar
            alt="Avatar"
            src={photoURL}
            sx={{ width: 120, height: 120 }}
          />
          <div sx={{ display: "inline-flex" }}>
            <input type="file" onChange={handleChange} />
            <Button
              disabled={loading || !photo}
              variant="contained"
              style={{ backgroundColor: "Pink" }}
              onClick={handleCLick}
            >
              Update Profile Picture
            </Button>
          </div>
          <p id="name">
            Name:
            <Box
              component="form"
              sx={{
                marginLeft: "1rem",
                display: "inline-flex",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Insert Name"
                variant="standard"
              />
            </Box>
          </p>
          <p>
            Email : {user && user.email}
            {user && user.email ? (
              <box></box>
            ) : (
              <Box
                component="form"
                sx={{
                  marginLeft: "2rem",
                  display: "inline-flex",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Insert Email"
                  variant="standard"
                />
              </Box>
            )}
          </p>
          <p id="age">
            Age:
            <Box
              component="form"
              sx={{
                marginLeft: "1rem",
                display: "inline-flex",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Insert Age"
                variant="standard"
              />
            </Box>
          </p>
          <p id="weight">
            Weight:
            <Box
              component="form"
              sx={{
                marginLeft: "1rem",
                display: "inline-flex",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Insert Weight"
                variant="standard"
              />
            </Box>
          </p>
        </Grid>

        <Grid item style={{ margin: 32 }}>
          <Button
            style={{ paddingLeft: "20rem" }}
            component={Link}
            to="/editprofile"
            startIcon={<EditOutlined />}
          ></Button>
        </Grid>
      </Grid>
    </div>
  );
}
export default UserProfile;
