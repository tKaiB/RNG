import React from "react";
import ResponsiveAppBar from "../components/AccountNavBar";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/Sidebar";
import { Grid , Button } from "@material-ui/core";
import {EditOutlined} from "@material-ui/icons";



import {UserAuth} from '../contexts/AuthContext'
import {db} from '../firebase'

import { doc, getDoc } from "firebase/firestore";




function UserProfile() {
    const {user} = UserAuth()

    async function getRecord(){
        const ref = doc(db,"users", user.uid)
        const docSnap = await getDoc(ref)
        if(docSnap.exists()){
            console.log(docSnap.data())
            document.getElementById('name').innerText = 'Name: ' + docSnap.data().name
            // document.getElementById('age').innerText = 'Age: ' + docSnap.data().age + " Years Old"
            // document.getElementById('weight').innerText = 'Weight: ' + docSnap.data().name + " Kg"

        }
        else{
            console.log("error")
        }
    }

    getRecord()





    return (
        <div>
            <div style={{paddingBottom:9}}>
            <ResponsiveAppBar />
            </div>

            <Grid container alignItems="flex-start" justify = 'flex-start' spacing={1} style ={{minHeight:"100vh"}}>

                <Grid item xs = {2} sm ={6} style={{ padding: 0 , maxWidth:240 }}>
                <SideBar />
                </Grid>

                <Grid item xs = {1}>
                    <div>

                    </div>

                </Grid>

                <Grid item >
                    <p style={{fontFamily:"inter", fontSize:'32px' , fontStyle : "regular" , textDecoration: "underline"}}>My Profile</p>
                    <p>Email : {user && user.email}</p>
                    <p id = 'name'>name: </p>
                    <p id = 'age'>Age:</p>
                    <p id ='weight'>Weight:</p>
                </Grid>

                <Grid item style={{margin:32}} >
                    <Button component ={Link} to ='/editprofile' startIcon={<EditOutlined />} >
                    </Button>
                </Grid>



            </Grid>


        </div>


    )

}
export default UserProfile