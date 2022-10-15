import React ,{useRef} from "react";
import ResponsiveAppBar from "../AccountNavBar";
import SideBar from "../Sidebar";
import { Grid, TextField } from "@material-ui/core";


import {UserAuth} from '../../contexts/AuthContext'
import {db} from '../../firebase'
import { Link, useNavigate } from "react-router-dom";

function EditProfile(){
    const navigate = useNavigate();
    const EmailRef = useRef();
    const NameRef = useRef();
    const AgeRef = useRef();
    const WeightRef = useRef();

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

                <Grid item xs={8}>
                    <p style={{fontFamily:"inter", fontSize:'32px' , fontStyle : "regular" , textDecoration: "underline"}}>Edit Profile</p>


                    <div style={{display: 'flex' , alignItems:"center", flexDirection:'row'}}>
                        <p style={{margin: 20 , fontSize:20, textAlign:'center', paddingRight:10}}>Email: </p>
                        <TextField
                                margin="normal"
                                inputRef={EmailRef}
                                variant='outlined'
                                placeholder="Enter your new email "
                                size ='small'
                                
                            />

                    </div>

                    <div style={{display: 'flex',alignItems:"center"}}>
                        <p style={{margin:20 , fontSize:20, textAlign:'center', paddingRight:10}}>Name: </p>
                        <TextField
                                margin="normal"
                                inputRef={NameRef}
                                variant='outlined'
                                placeholder="Enter your new Name "
                                size ='small'
                                
                            />

                    </div>

                    <div style={{display: 'flex',alignItems:"center"}}>
                        <p style={{margin:20, fontSize:20 , textAlign:'center', paddingRight:25}}>Age: </p>
                        <TextField
                                margin="normal"
                                inputRef={AgeRef}
                                placeholder="Enter your new Age "
                                size ='small'
                                variant = 'outlined'
                                
                            />

                    </div>

                    <div style={{display: 'flex',alignItems:"center"}}>
                        <p style={{margin:20,fontSize:20, textAlign:'center'}}>Weight: </p>
                        <TextField
                                margin="normal"
                                inputRef={WeightRef}
                                placeholder='Enter your new Weight'
                                size = 'small'
                                variant = 'outlined'
                               
                                
                            />
                    </div>
          



  

                  


                </Grid>




            </Grid>


        </div>
    )
}
export default EditProfile