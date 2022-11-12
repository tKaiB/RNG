import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { UserAuth } from "./AccountController";
import {
    limit,
    orderBy,
    doc,
    collection,
    query,
    where,
    getDocs,
    addDoc,
    serverTimestamp,
    getDoc,
    updateDoc
  } from "firebase/firestore";
  import { db } from "../firebase";
import { CallToActionSharp } from "@material-ui/icons";
import { connectStorageEmulator } from "firebase/storage";
import { sendSignInLinkToEmail } from "firebase/auth";


const profilePageController = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const {user ,setEmail}  = UserAuth()

  const updateName =  async (name) => {
    try{
        await updateDoc(doc(db, "users", user.uid), {
            name: name
          });
          return true

    }
    catch(e){
        console.log(e.message)
        return false


    }

  }

  const updateWeight =  async (weight) => {
    try{
        await updateDoc(doc(db, "users", user.uid), {
            weight: weight
          });
          return true

    }
    catch(e){
        console.log(e.message)
        return false


    }

  }

  const updateAge =  async (age) => {
    try{
        await updateDoc(doc(db, "users", user.uid), {
            age : age
          });
          return true

    }
    catch(e){
        console.log(e.message)
        return false


    }

  }

  const updateEmail =  async (email) => {
    try{
        await setEmail(email)
          return true

    }
    catch(e){
        console.log(e.message)
        return false


    }

  }

  const DisplayName = async(id) => {
    const ref = doc(db, "users", user.uid);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
        return docSnap.data().name

    } else {
      return null
    }

  }

  const DisplayWeight = async(id) => {
    const ref = doc(db, "users", user.uid);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
        return docSnap.data().weight

    } else {
      return null
    }

  }

  const DisplayAge = async(id) => {
    const ref = doc(db, "users", user.uid);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
        return docSnap.data().age

    } else {
      return null
    }

  }

  const DisplayEmail = async(id) => {
    const ref = doc(db, "users", user.uid);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
        return docSnap.data().email

    } else {
      return null
    }

  }

  const updateProfile = async( name ,age , email , weight , id) =>{
    try {
        await setEmail(email)
          .then(async () => {
            try {
              await updateDoc(doc(db, "users", user.uid), {
                email: email,
                name: name,
                age: age,
                weight: weight,
              });
            } catch (e) {
              alert(e.message);
              return false
            }
          })
          .catch((e) => {
            alert(e.message);
            return false
          });
      } catch (e) {
        alert(e.message);
        console.log(e.message);
        return false
      }
      return true

  }












  return (
    <profilePageController.Provider
      value={{
        updateName,
        updateWeight,
        updateAge,
        updateEmail,
        DisplayName,
        DisplayWeight,
        DisplayAge,
        DisplayEmail,
        updateProfile

      }}
    >
      {children}
    </profilePageController.Provider>
  );
};

export const ProfilePageController = () => {
  return useContext(profilePageController);
};
