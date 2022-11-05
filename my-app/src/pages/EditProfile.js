import React, { useRef, useState } from "react";
import ResponsiveAppBar from "../components/AccountNavBar";
import SideBar from "../components/Sidebar";
import { Grid, TextField, Button, Box } from "@material-ui/core";

import { UserAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { collection, addDoc, setDoc, doc, updateDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  const EmailRef = useRef();
  const NameRef = useRef();
  const AgeRef = useRef();
  const WeightRef = useRef();

  const [error, setError] = useState("");
  const { user, setEmail } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (EmailRef.current.value == "") {
        setError(e.message);
        alert(e.message);
      }
      await setEmail(EmailRef.current.value)
        .then(async () => {
          try {

            if (NameRef.current.value == "") {
              setError(e.message);
              alert(e.message);

            }
            if (AgeRef.current.value == "") {
              setError(e.message);
              alert(e.message);

            }
            if (WeightRef.current.value == "") {
              setError(e.message);
              alert(e.message);

            }
            await updateDoc(doc(db, "users", user.uid), {
              email: EmailRef.current.value,
              name: NameRef.current.value,
              age: AgeRef.current.value,
              weight: WeightRef.current.value,
            });
          } catch (e) {
            setError(e.message);
            alert(e.message);
          }
        })
        .catch((e) => {
          setError(e.message);
          alert(e.message);
        });
    } catch (e) {
      setError(e.message);
      alert(e.message);
      console.log(e.message);
    }
    navigate("/profile");
  };

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

        <Grid item xs={8}>
          <p
            style={{
              //fontFamily: "inter",
              fontSize: "32px",
              fontStyle: "regular",
              textDecoration: "underline",
            }}
          >
            Edit Profile
          </p>

          <Box component="form">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <p
                style={{
                  margin: 20,
                  fontSize: 20,
                  textAlign: "center",
                  paddingRight: 10,
                }}
              >
                Email:{" "}
              </p>
              <TextField
                margin="normal"
                inputRef={EmailRef}
                variant="outlined"
                placeholder="Enter your new email "
                size="small"
              />
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <p
                style={{
                  margin: 20,
                  fontSize: 20,
                  textAlign: "center",
                  paddingRight: 10,
                }}
              >
                Name:{" "}
              </p>
              <TextField
                margin="normal"
                inputRef={NameRef}
                variant="outlined"
                placeholder="Enter your new Name "
                size="small"
              />
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <p
                style={{
                  margin: 20,
                  fontSize: 20,
                  textAlign: "center",
                  paddingRight: 25,
                }}
              >
                Age:{" "}
              </p>
              <TextField
                margin="normal"
                inputRef={AgeRef}
                placeholder="Enter your new Age "
                size="small"
                variant="outlined"
              />
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ margin: 20, fontSize: 20, textAlign: "center" }}>
                Weight:{" "}
              </p>
              <TextField
                margin="normal"
                inputRef={WeightRef}
                placeholder="Enter your new Weight"
                size="small"
                variant="outlined"
              />
            </div>

            <Button
              onClick={handleSubmit}
              variant="contained"
              type="submit"
              fullWidth
              style={{
                maxWidth: 300,
                textTransform: "none",
                backgroundColor: "pink",
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default EditProfile;
