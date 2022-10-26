import React, { useState, useRef } from "react";
import {
  Button,
  Checkbox,
  FormGroup,
  Grid,
  TextField,
  FormControlLabel,
  InputAdornment,
} from "@material-ui/core";
import { Box } from "@mui/material";
import { AccountCircle, LockRounded } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import NavBar from "../components/Navbar";

function SignIn() {
  const { signIn } = UserAuth();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(emailRef.current.value, passwordRef.current.value);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <NavBar />
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="brand"
          />
        </Grid>

        <Grid item xs={12} sm={6} style={{ paddingLeft: 50 }}>
          <div style={{ alignItems: "left" }}>
            <Grid container direction="column" alignItems="flex-start">
              <Grid item xs={4}>
                <h2 style={{ padding: 10, paddingLeft: 0 }}>Sign in</h2>
              </Grid>

              <Grid item xs={4}>
                <p style={{ margin: 0, paddingBottom: 7 }}>
                  If you dont have an account
                </p>
              </Grid>

              <Grid item xs={4}>
                <p style={{ margin: 0 }}>
                  You can <Link to="/">register here</Link>
                </p>
              </Grid>
            </Grid>
          </div>

          <Box
            component="form"
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 500,
              minWidth: 300,
              paddingTop: 30,
              paddingBottom: 20,
            }}
          >
            <TextField
              label="Email"
              margin="normal"
              placeholder="Enter your Email Address"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              inputRef={emailRef}
            />

            <TextField
              label="Password"
              margin="normal"
              placeholder="Enter your Password"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
              inputRef={passwordRef}
            />
            <Grid container alignItems="flex-end" style={{ paddingTop: 10 }}>
              <Grid item xs={8}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Remember me "
                  />
                </FormGroup>
              </Grid>

              <Grid item xs={4}>
                <Button
                  component={Link}
                  to="/forgetpassword"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "15px",
                    textTransform: "none",
                    paddingRight: 0,
                    textAlign: "right",
                  }}
                >
                  Forgot your Password?
                </Button>
              </Grid>
            </Grid>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 500,
                minWidth: 300,
              }}
            >
              <Button
                onClick={handleSubmit}
                variant="contained"
                type="submit"
                style={{
                  textTransform: "none",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  borderRadius: "50px",
                  padding: "1rem",
                }}
              >
                Login
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignIn;
