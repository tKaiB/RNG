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


const calorieCounterController = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const user = UserAuth()

  const CalculateCalorie = (gainMuscle, loseFat, weight)=> {
    if (gainMuscle) {
      let dailyCalorie = weight * 15 + 300;
      dailyCalorie = dailyCalorie.toFixed(0);
      const carbs = ((dailyCalorie * 0.5) / 4).toFixed(2);
      const fat = ((dailyCalorie * 0.3) / 9).toFixed(2);
      const sugar = ((dailyCalorie * 0.1) / 4).toFixed(2);
      const saturatedFat = (dailyCalorie * 0.1).toFixed(2);
      return [ dailyCalorie,carbs,fat,sugar,saturatedFat]
    } else {
      let dailyCalorie = weight * 15 - 500;
      dailyCalorie = dailyCalorie.toFixed(0);
      const carbs = ((dailyCalorie * 0.5) / 4).toFixed(2);
      const fat = ((dailyCalorie * 0.3) / 9).toFixed(2);
      const sugar = ((dailyCalorie * 0.1) / 4).toFixed(2);
      const saturatedFat = (dailyCalorie * 0.1).toFixed(2);
      return [ dailyCalorie,carbs,fat,sugar,saturatedFat]
    }
    return null


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

  const inputCalorie = async ( calorie ) => {
    try {
      const docRef = await addDoc(collection(db, user.uid), {
        calorie: calorie,
        time: serverTimestamp(),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
      return false
    }

    alert("Data added successfully");
    return true
  };

  const getCalorie = async () => {
    const ref = doc(db, "users", user.uid);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
        return docSnap.data().calorie

    } else {
        return null
     
    }
  }

  






  return (
    <calorieCounterController.Provider
      value={{
        generateChart,
        CalculateCalorie,
        inputCalorie,
        getCalorie






      }}
    >
      {children}
    </calorieCounterController.Provider>
  );
};

export const CalorieCounterController = () => {
  return useContext(calorieCounterController);
};
