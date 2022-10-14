import React from "react";
import ResponsiveAppBar from "./AccountNavBar";
import { useNavigate } from "react-router-dom";
import SideBar from "./Sidebar";
import { Grid } from "@material-ui/core";

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
                    <h1>My profile</h1>
                    <p>Email : {user && user.email}</p>
                    <p id = 'name'>name: </p>
                    <p id = 'age'>placeholder</p>
                    <p id ='weight'>placeholder</p>
                </Grid>

            </Grid>


        </div>


    )

}
export default UserProfile