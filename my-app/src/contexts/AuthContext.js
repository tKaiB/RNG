import React, { useContext, useEffect, useState } from 'react'
import { auth  } from '../firebase'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut, onAuthStateChanged  , sendPasswordResetEmail , updateEmail} from "firebase/auth";


const UserContext = React.createContext()

export const AuthContextProvider =({children}) => {

    const [user,setUser] = useState({})

    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =  (email, password) =>{
        return signInWithEmailAndPassword (auth, email,password)
        }

    

    const logout =() =>{
        return signOut(auth)
    }

    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }

    const setEmail = (newEmail) =>{
        return updateEmail(auth.currentUser,newEmail)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () =>{
            unsubscribe()
        }
    },[])

     return(
        <UserContext.Provider value ={{createUser ,user ,logout , signIn , resetPassword ,setEmail}}>
            {children}
        </UserContext.Provider>
     )
}

export const UserAuth =() =>{
    return useContext(UserContext)
}

