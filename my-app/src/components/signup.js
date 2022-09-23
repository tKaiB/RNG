import React from 'react'
import { Grid , TextField} from '@material-ui/core'

function SignUp(){

    return(
        <div>
            <Grid container style ={{minHeight: '100vh'}}>
                <Grid item xs={12} sm={6}>
                    <img 
                    src='https://source.unsplash.com/random' 
                    style = {{width :'100%', height : '100%' , objectFit: 'cover'}}
                    alt = 'brand'/>

                </Grid>


                <Grid container item xs={12} sm={6}  style = {{padding :10}}>
                    <div />
                
                    <div>
                        <TextField label= 'Username' margin ='normal'/>
                        <TextField label= 'Password' margin ='normal'/>

                    </div>
    




                </Grid>


            </Grid>
        </div>
    )


}

export default SignUp
