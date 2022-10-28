import React, { useRef, useState } from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  Box,
  Button,
} from "@material-ui/core";
import { EmailOutlined } from "@material-ui/icons";
import NavBar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

/**
 * @param {string} email - Get email of user
 * @returns {resetPassword} resertPassword - Reset password object
 */
function ForgetPassword() {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const { resetPassword } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await resetPassword(emailRef.current.value);
    } catch (e) {
      setError(e.message);
    }
    navigate("/");
  };
  return (
    <div style={{ fontFamily: "Inter" }}>
      <NavBar />
      <Grid container direction="column" alignItems="flex-start">
        <Grid item xs={12} xm={6}>
          <p
            style={{
              //: "Inter",
              fontSize: 32,
              fontVariant: "regular",
              marginBottom: 0,
            }}
          >
            Forget Password?
          </p>
        </Grid>
        <Grid item xs={12} xm={6}>
          <p
            style={{
              //fontFamily: "Inter",
              fontSize: 20,
              fontVariant: "regular",
            }}
          >
            A pin will be sent to your email, which will enable you to reset
            your password.
          </p>
        </Grid>
        <Grid item xs={12} xm={6}>
          <Box
            component="form"
            style={{ display: "flex", flexDirection: "column", minWidth: 570 }}
          >
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
              style={{ paddingBottom: 15 }}
            />

            <Grid item xs={12} xm={6}>
              <Box
                component="form"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minWidth: 570,
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
                        <EmailOutlined />
                      </InputAdornment>
                    ),
                  }}
                  inputRef={emailRef}
                  style={{ paddingBottom: 15 }}
                />

                <Button
                  onClick={handleSubmit}
                  type="submit"
                  variant="contained"
                  style={{
                    textTransform: "none",
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    padding: "1rem",
                    borderRadius: "50px",
                    marginBottom: "35rem",
                  }}
                >
                  Reset password
                </Button>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default ForgetPassword;
