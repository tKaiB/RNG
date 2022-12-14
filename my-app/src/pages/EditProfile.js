import React, { useEffect, useRef, useState } from "react";
import ResponsiveAppBar from "../components/AccountNavBar";
import SideBar from "../components/Sidebar";
import { Grid, TextField, Button, Box } from "@material-ui/core";

import { UserAuth } from "../contexts/AccountController";
import { ProfilePageController } from "../contexts/ProfilePageController";
import { db } from "../firebase";
import { collection, addDoc, setDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

/**
 * @param {string} user.uid - Gets the userID 
 * @param {string} email - Gets the email of the user
 * @param {string} name - Gets the name of the user
 * @param {int} age - Gets the age of the user
 * @param {int} weight - Gets the weight of the user
 */

function EditProfile() {
  const navigate = useNavigate();
  const EmailRef = useRef();
  const NameRef = useRef();
  const AgeRef = useRef();
  const WeightRef = useRef();

  // const [error, setError] = useState("");
  const error = useRef('')
  const { user, setEmail } = UserAuth();

  // const{ updateName , updateWeight , updateEmail , updateProfile } = ProfilePageController()


  /**
   * to run the function when the page initially loads
   */

  useEffect(() => {
    const fetchData = async () => {
      const ref = doc(db, "users", user.uid)
      const docSnap = await getDoc(ref);
      if (docSnap.exists()) {
        NameRef.current.value = docSnap.data().name;
        AgeRef.current.value = docSnap.data().age
        WeightRef.current.value = docSnap.data().weight
        EmailRef.current.value = user.email
      } else {
        console.log("error");
      }

    }
    fetchData()
  }, [user])


  /**
   * 
   * Display an error when any of the
   * requirements are not met
   * If all requirements are met, it will 
   * display the edited profile credentials 
   * 
   */


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EmailRef.current.value == "") {
      alert(e.message)
      error.current.value = "Error"

    }

    if (NameRef.current.value == "") {
      error.current.value = "Error"
      alert(e.message)
      console.log(error)

    }
    if (AgeRef.current.value == "") {
      error.current.value = "Error"
      alert(e.message)
      console.log(error)

    }
    if (WeightRef.current.value == "") {
      error.current.value = "Error"
      alert(e.message)
      console.log(error)

    }

    console.log(error)

    if (error.current.value == "Error") {
      alert(error)

      return
    }
    else {
      try {
        await setEmail(EmailRef.current.value)
          .then(async () => {
            try {
              await updateDoc(doc(db, "users", user.uid), {
                email: EmailRef.current.value,
                name: NameRef.current.value,
                age: AgeRef.current.value,
                weight: WeightRef.current.value,
              });
            } catch (e) {
              alert(e.message);
            }
          })
          .catch((e) => {
            alert(e.message);
          });
      } catch (e) {
        alert(e.message);
        console.log(e.message);
      }
      navigate("/profile");
    };

  }


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
