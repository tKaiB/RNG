import React , {useRef} from 'react'
import { Button, Checkbox, FormGroup, Grid , TextField , FormControlLabel, InputAdornment} from '@material-ui/core'
import {AccountCircleOutlined , EmailOutlined , HttpsOutlined} from '@material-ui/icons'
import { useAuth } from "../contexts/AuthContext"


function SignUp(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const nameRef = useRef()

    const {signup} = useAuth()

    function handledubmit(e){
        e.preventDefault()

        signup(emailRef.current.value , passwordRef.current.value)
    }

    return(
        <div>
            <Grid container style ={{minHeight: '100vh'}}>

                <Grid item xs={12} sm ={6} alignItems="left" direction ="column"  justify = "space-between" style = {{paddingLeft :0}}>
                    <div style ={{display : "flex" , flexDirection : "column" , maxWidth :650 , minWidth: 400 , paddingTop : 30 , paddingBottom: 20}} >
                            <TextField 
                            label= 'Email' 
                            margin ='normal'
                            defaultValue= "Enter your Email Address"
                            InputProps={{startAdornment: (<InputAdornment position = "start"> <EmailOutlined /></InputAdornment>),}}
                            inputRef = {emailRef}
                            
                            
                            />
                            <TextField 
                            label= 'Name' 
                            margin ='normal'
                            defaultValue= "Enter your name"
                            InputProps={{startAdornment: (<InputAdornment position = "start"> <AccountCircleOutlined /></InputAdornment>),}}
                            inputRef = {nameRef}
                            
                            
                            />

                            
                            <TextField 
                            label= 'Password'
                            margin ='normal'
                            defaultValue= "Enter your Password"
                            InputProps={{startAdornment: (<InputAdornment position = "start"> <HttpsOutlined /></InputAdornment>),}}    
                            inputRef = {passwordRef}        
                            />

                            <TextField 
                            label= 'Confirm Password'
                            margin ='normal'
                            defaultValue= "Confirm your Password"
                            InputProps={{startAdornment: (<InputAdornment position = "start"> <HttpsOutlined /></InputAdornment>),}}  
                            inputRef = {confirmPasswordRef}          
                            />
                    </div>


                    <div style={{display : "flex" , flexDirection : "column" , maxWidth :650 , minWidth: 400}}>
                        <Button  variant = "contained" style={{textTransform :"none" , backgroundColor: "#000000" , color:"#ffffff"}}>
                            Register 
                        </Button>

                    </div>

                </Grid>

                <Grid item xs={12} sm={6} >
                    <img 
                    src='https://source.unsplash.com/random' 
                    style = {{width :'100%', height : '100%' , objectFit: 'cover'}}
                    alt = 'brand'/>

                </Grid>

            </Grid>


        </div>
    )


}

export default SignUp;