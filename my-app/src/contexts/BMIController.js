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
    getDoc
  } from "firebase/firestore";
  import { db } from "../firebase";


const BMIController = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const user = UserAuth()

  const CalculateBMI = (gender, height, weight)=> {
    let bmi =weight / ((height / 100) * (height/ 100));
    bmi = bmi.toFixed(2);
    return bmi


  }

  const generateChart = async () => {
    const docRef = collection(db, user.uid + "calorie");

    const q = query(docRef, orderBy("time", "asc"));

    const caloriedata = [];
    const time = [];

    const querySnapshot = await getDocs(q);
    //console.log(querySnapshot.id);
    let i = 0;
    querySnapshot.forEach((doc) => {
      caloriedata[i] = doc.data().calorie;
      time[i] = doc.data().time;
      i++;
      //console.log(doc.id, " => ", doc.data().bmi);
    });

    return [caloriedata, time];
  }

  const inputBMI = async ( bmi ) => {
    try {
      const docRef = await addDoc(collection(db, user.uid), {
        bmi: bmi,
        time: serverTimestamp(),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
      return false
    }

    alert("Data added successfully");
    return true
  };

  const getBMI = async () => {
    const ref = doc(db, "users", user.uid);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
        return docSnap.data().bmi

    } else {
        return null
     
    }

  }
  






  return (
    <BMIController.Provider
      value={{
        CalculateBMI,
        generateChart,
        inputBMI,
        getBMI



      }}
    >
      {children}
    </BMIController.Provider>
  );
};

export const BmiController = () => {
  return useContext(BMIController);
};
