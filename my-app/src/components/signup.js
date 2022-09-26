import React , {useRef, useState} from 'react'
import { Button, Grid , TextField , InputAdornment} from '@material-ui/core'
import {AccountCircleOutlined , EmailOutlined , HttpsOutlined} from '@material-ui/icons'
import { Box , Alert } from '@mui/material'
import { useAuth } from "../contexts/AuthContext"


function SignUp(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const nameRef = useRef()
    const {signup} = useAuth()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return setError("Passwords do not match")
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value , passwordRef.current.value)

        } catch {
            setError("Failed to create an account")
        }
        setLoading(false)

        return




        
    }

    return(
        <div>
            <Grid container style ={{minHeight: '100vh'}}>

                <Grid item xs={12} sm ={6} alignItems="left" direction ="column"  justify = "space-between" style = {{paddingLeft :0}}>

                <div style ={{alignItems: "left"}}>
                        <Grid container direction = "column">
                            <Grid item xs={4}>
                                <h2 style={{padding:10 , paddingLeft :0}}>Sign Up</h2>
                            </Grid>

                            <Grid item xs={4}>
                                <p style={{margin: 0 , paddingBottom:7}}>If you already have an account</p>
                            </Grid>

                            <Grid item xs={4}>
                                <p style={{margin: 0}}>You can <a style={{fontWeight: 'bold', color: "#0C21C1"}}>Login here!</a></p>
                            </Grid>

                        </Grid>
    


                        
                    </div>

                    <Box onSubmit= {handleSubmit} component = "form" style ={{display : "flex" , flexDirection : "column" , maxWidth :650 , minWidth: 400 , paddingTop : 30 , paddingBottom: 20 , paddingRight :0}} >
                            {error &&  <Alert severity = "error"> This is an error</Alert>}
                            <Grid item xs={12}>
                                <TextField 
                                label= 'Email' 
                                margin ='normal'
                                placeholder = "Enter your Email Address"
                                InputProps={{startAdornment: (<InputAdornment position = "start"> <EmailOutlined /></InputAdornment>),}}
                                inputRef={emailRef}
                                fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                label= 'Name' 
                                margin ='normal'
                                placeholder= "Enter your name"
                                InputProps={{startAdornment: (<InputAdornment position = "start"> <AccountCircleOutlined /></InputAdornment>),}}
                                inputRef={nameRef}
                                fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField 
                                label= 'Password'
                                margin ='normal'
                                placeholder= "Enter your Password"
                                InputProps={{startAdornment: (<InputAdornment position = "start"> <HttpsOutlined /></InputAdornment>),}}   
                                inputRef={passwordRef}     
                                fullWidth    
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField 
                                label= 'Confirm Password'
                                margin ='normal'
                                placeholder= "Confirm your Password"
                                InputProps={{startAdornment: (<InputAdornment position = "start"> <HttpsOutlined /></InputAdornment>),}}   
                                inputRef={confirmPasswordRef}   
                                fullWidth    
                                />
                            </Grid>

                        <Button disabled={loading} variant = "contained" style={{textTransform :"none" , backgroundColor: "#000000" , color:"#ffffff", padding: "1rem", borderRadius:"50px"}}>
                            Register 
                        </Button>
                    </Box>


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