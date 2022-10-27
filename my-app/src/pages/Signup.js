import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Grid, TextField, InputAdornment } from "@material-ui/core";
import {
  AccountCircleOutlined,
  EmailOutlined,
  HttpsOutlined,
} from "@material-ui/icons";
import { Box } from "@mui/material";
import { UserAuth } from "../contexts/AuthContext";
import { app, db } from "../firebase";
import NavBar from "../components/Navbar";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

/**
 * @param {string} email - Get email of user
 * @param {string} name - Get name of user
 * @param {string} password - Get password of user
 * @returns {createUser} createUser - Create user object
 */
function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nameRef = useRef();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(emailRef.current.value, passwordRef.current.value)
        .then(async (user) => {
          try {
            await setDoc(doc(db, "users", user.user.uid), {
              email: email,
              name: nameRef.current.value,
              age: 0,
              weight: 0,
              calorie: 0,
              bmi: 0,
            });
          } catch (e) {
            setError(e.message);
            console.log(e.message);
            alert(e.message);
          }
          alert("Account Created");
          navigate("/account");
        })
        .catch((e) => {
          setError(e.message);
          console.log(e.message);
          if (e.message == "Firebase: Error (auth/email-already-in-use).")
            alert("Email already in use");
          if (e.message == "Firebase: Error (auth/invalid-email).")
            alert("Invalid Email");
          if (
            e.message ==
            "Firebase: Password should be at least 6 characters (auth/weak-password)."
          )
            alert(
              "Password is too weak, Password must be at least 6 characters"
            );
        });
      //navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>
      <NavBar />
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid
          item
          xs={8}
          sm={4}
          direction="column"
          justify="space-between"
          style={{ paddingLeft: 0 }}
        >
          <div style={{ alignItems: "left" }}>
            <Grid container direction="column" alignItems="left">
              <Grid item xs={4}>
                <h2 style={{ padding: 10, paddingLeft: 0 }}>Sign Up</h2>
              </Grid>

              <Grid item xs={4}>
                <p style={{ margin: 0, paddingBottom: 7 }}>
                  If you already have an account
                </p>
              </Grid>

              <Grid item xs={4}>
                <p style={{ margin: 0 }}>
                  You can <Link to="/signin">Login here</Link>
                </p>
              </Grid>
            </Grid>
          </div>

          <Box
            onSubmit={handleSubmit}
            component="form"
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 650,
              padding: 0,
            }}
          >
            <Grid item xs={12}>
              <TextField
                label="Email"
                margin="normal"
                placeholder="Enter your Email Address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {" "}
                      <EmailOutlined />
                    </InputAdornment>
                  ),
                }}
                inputRef={emailRef}
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Name"
                margin="normal"
                placeholder="Enter your name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {" "}
                      <AccountCircleOutlined />
                    </InputAdornment>
                  ),
                }}
                inputRef={nameRef}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Password"
                margin="normal"
                type="password"
                placeholder="Enter your Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {" "}
                      <HttpsOutlined />
                    </InputAdornment>
                  ),
                }}
                inputRef={passwordRef}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                type="password"
                margin="normal"
                placeholder="Confirm your Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {" "}
                      <HttpsOutlined />
                    </InputAdornment>
                  ),
                }}
                inputRef={confirmPasswordRef}
                fullWidth
              />
            </Grid>

            <Button
              type="submit"
              variant="contained"
              style={{
                textTransform: "none",
                backgroundColor: "#000000",
                color: "#ffffff",
                padding: "1rem",
                borderRadius: "50px",
              }}
            >
              Register
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <img
            src="https://cdn.apartmenttherapy.info/image/upload/v1556282934/k/archive/659cfbc5ef34a05e4c3f200db47af6d08d27d7cd.jpg"
            style={{
              paddingLeft: 200,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="brand"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default SignUp;
