import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { UserAuth } from "./AccountController";


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
    <UserContext.Provider
      value={{
        CalculateBMI,
        generateChart,
        inputBMI,
        getBMI



      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const bmiController = () => {
  return useContext(BMIController);
};
