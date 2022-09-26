import React, { useContext, useEffect, useState } from 'react'

import{ auth } from "../firebase"


const AuthContext = React. createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){

    const [currentUser, setCurrentUSer] = useState()

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
        
    }

    useEffect(()=> {
        const unsubcribe = auth.onAuthStateChaanged(user=> {
            setCurrentUSer(user)
        })
        return unsubcribe
    
    },[])




    const value ={
        currentUser,
        signin
    }
    return(
        <AuthContext.provider value = {value}>
            {children}
        </AuthContext.provider>
    )
}