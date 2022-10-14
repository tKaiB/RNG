import React ,{useRef} from "react";
import ResponsiveAppBar from "./AccountNavBar";
import SideBar from "./Sidebar";
import { Grid, TextField } from "@material-ui/core";


import {UserAuth} from '../contexts/AuthContext'
import {db} from '../firebase'

function EditProfile(){
    const confirmEmailRef = useRef();
    return(
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
                    <p style={{fontFamily:"inter", fontSize:'32px' , fontStyle : "regular" , textDecoration: "underline"}}>Edit Profile</p>
                    <div style={{display: 'flex'}}>
                        <p style={{paddingTop:19 , fontSize:20}}>Email: </p>
                        <TextField
                                margin="normal"
                                inputRef={confirmEmailRef}
                                style={{paddingTop:20, paddingLeft:2}}
                                
                            />

                    </div>

  

                  


                </Grid>




            </Grid>


        </div>
    )
}
export default EditProfile