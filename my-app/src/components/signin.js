import React from 'react'
import { Button, Checkbox, FormGroup, Grid , TextField , FormControlLabel, InputAdornment} from '@material-ui/core'
import {AccountCircle , LockRounded} from '@material-ui/icons'



function SignIn(){

    return(
        <div>
            <Grid container style ={{minHeight: '100vh'}}>
                <Grid item xs={12} sm={6}>
                    <img 
                    src='https://source.unsplash.com/random' 
                    style = {{width :'100%', height : '100%' , objectFit: 'cover'}}
                    alt = 'brand'/>

                </Grid>


                <Grid item xs={12} sm={6} alignItems= "left" direction = "column" justify = "space-between" style = {{paddingLeft :50}}>
                    <div style ={{alignItems: "left"}}>
                        <Grid container direction = "column">
                            <Grid item xs={4}>
                                <h2 style={{padding:10 , paddingLeft :0}}>Sign in</h2>
                            </Grid>

                            <Grid item xs={4}>
                                <p style={{margin: 0 , paddingBottom:7}}>If you dont have an account</p>
                            </Grid>

                            <Grid item xs={4}>
                                <p style={{margin: 0}}>You can register here</p>
                            </Grid>

                        </Grid>
    


                        
                    </div>


                    <div style ={{display : "flex" , flexDirection : "column" , maxWidth :500 , minWidth: 300 , paddingTop : 30 , paddingBottom: 20}} >
                        <TextField 
                        label= 'Email' 
                        margin ='normal'
                        defaultValue= "Enter your Email Address"
                        InputProps={{startAdornment: (<InputAdornment position = "start"> <AccountCircle /></InputAdornment>),}}
                        
                        
                        />

                        
                        <TextField 
                        label= 'Password'
                         margin ='normal'
                         defaultValue= "Enter your Password"
                         InputProps={{startAdornment: (<InputAdornment position = "start"> <LockRounded /></InputAdornment>),}}
                        
                         
                         />
                        <Grid container style={{paddingTop:10}}>
                            <Grid item xs={8}>
                                <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me " />
                                </FormGroup>
                            </Grid>

                            <Grid item xs={4} alignItems = "end" >
                                <Button style={{fontFamily :"Inter" , fontSize: "15px" , textTransform : "none" , paddingRight : 0 , textAlign:"right"}}>Forgot your Password</Button>
                            </Grid>
                           
                           
                            
                        </Grid>

    
                        

                    </div>

         

                    <div style={{display : "flex" , flexDirection : "column" , maxWidth :500 , minWidth: 300}}>
                        <Button  variant = "contained" style={{textTransform :"none" , backgroundColor: "#000000" , color:"#ffffff"  ,borderRadius:"50px" , padding: "1rem"}}>
                            Login 
                        </Button>

                    </div>

    

                </Grid>


            </Grid>
        </div>
    )


}

export default SignIn;
