import React from 'react'
import { Button} from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext'

function Account(){

    const { user , logout} = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async () =>{
        try {
            await logout()
            navigate('/')
            
        } catch (e) {
            console.log(e.message)
        }
    }


    return (
        <div>
            <h1>Successfully Loggged in </h1>
            <Button onClick = {handleLogout} type="submit">
                Log out 
            </Button>
        </div>
    )
}
export default Account