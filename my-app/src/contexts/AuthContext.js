import React, { useContext, useEffect, useState } from 'react'
import { auth  } from '../firebase'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut, onAuthStateChanged  , sendPasswordResetEmail} from "firebase/auth";


const UserContext = React.createContext()

export const AuthContextProvider =({children}) => {

    const [user,setUser] = useState({})

    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =  (email, password) =>{
        return signInWithEmailAndPassword (auth, email,password).catch(error => {
            console.log(error)
        })

    }

    const logout =() =>{
        return signOut(auth)
    }

    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
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
        <UserContext.Provider value ={{createUser ,user ,logout , signIn , resetPassword }}>
            {children}
        </UserContext.Provider>
     )
}

export const UserAuth =() =>{
    return useContext(UserContext)
}

