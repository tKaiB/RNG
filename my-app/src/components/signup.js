import React , {useRef, useState} from 'react'
import {Link , useNaviagte} from 'react-router-dom'
import { Button, Grid , TextField , InputAdornment} from '@material-ui/core'
import {AccountCircleOutlined , EmailOutlined , HttpsOutlined} from '@material-ui/icons'
import { Box } from '@mui/material'
import {UserAuth} from "../contexts/AuthContext"


function SignUp(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const nameRef = useRef()
    const [error,setError] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const {createUser} = UserAuth();

    const handleSubmit = async(e) =>{
        e.preventDefault()
        setError('')
        try {
            await createUser(emailRef.current.value , passwordRef.current.value)
            
        } catch (e) {
            setError(e.message)
            console.log(e.message)
            
        }
        
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

                    <Box onSubmit={handleSubmit} component = "form" style ={{display : "flex" , flexDirection : "column" , maxWidth :650 , minWidth: 400 , paddingTop : 30 , paddingBottom: 20 , paddingRight :0}} >
                            <Grid item xs={12}>
                                <TextField 
                                label= 'Email' 
                                margin ='normal'
                                placeholder = "Enter your Email Address"
                                InputProps={{startAdornment: (<InputAdornment position = "start"> <EmailOutlined /></InputAdornment>),}}
                                inputRef={emailRef}
                                fullWidth
                                onChange={(e) => setEmail(e.target.value)}
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
                                type= 'password'
                                placeholder= "Enter your Password"
                                InputProps={{startAdornment: (<InputAdornment position = "start"> <HttpsOutlined /></InputAdornment>),}}   
                                inputRef={passwordRef}
                                onChange={(e) => setPassword(e.target.value)}
                                     
                                fullWidth    
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField 
                                label= 'Confirm Password'
                                type = 'password'
                                margin ='normal'
                                placeholder= "Confirm your Password"
                                InputProps={{startAdornment: (<InputAdornment position = "start"> <HttpsOutlined /></InputAdornment>),}}   
                                inputRef={confirmPasswordRef}   
                                fullWidth    
                                />
                            </Grid>

                        <Button type="submit" variant = "contained" style={{textTransform :"none" , backgroundColor: "#000000" , color:"#ffffff", padding: "1rem", borderRadius:"50px"}}>
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