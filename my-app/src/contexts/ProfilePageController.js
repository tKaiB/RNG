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
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { CallToActionSharp } from "@material-ui/icons";
import { connectStorageEmulator } from "firebase/storage";
import { sendSignInLinkToEmail } from "firebase/auth";

const profilePageController = React.createContext();

export const ProfileContextProvider = ({ children }) => {
  const { user, setEmail } = UserAuth();
  /**
   *
   * @param {String} name - Get name of user
   * @returns {boolean} - Return true if name is valid
   * @returns {boolean} - Return false if name is invalid
   * @return {updateName} - Update name
   */

  const updateName = async (name) => {
    try {
      await updateDoc(doc(db, "users", user.uid), {
        name: name,
      });
      return true;
    } catch (e) {
      console.log(e.message);
      return false;
    }
  };
  /**
   *
   * @param {String} weight - Get weight of user
   * @returns {boolean} - Return true if weight is valid
   * @returns {boolean} - Return false if weight is invalid
   * @return {updateWeight} - Update weight
   */

  const updateWeight = async (weight) => {
    try {
      await updateDoc(doc(db, "users", user.uid), {
        weight: weight,
      });
      return true;
    } catch (e) {
      console.log(e.message);
      return false;
    }
  };

  /**
   *
   * @param {String} age - Get age of user
   * @returns {boolean} - Return true if age is valid
   * @returns {boolean} - Return false if age is invalid
   * @return {updateAge} - Update age
   */
  const updateAge = async (age) => {
    try {
      await updateDoc(doc(db, "users", user.uid), {
        age: age,
      });
      return true;
    } catch (e) {
      console.log(e.message);
      return false;
    }
  };
  /**
   *
   * @param {String} email - Get email of user
   * @returns {boolean} - Return true if email is valid
   * @returns {boolean} - Return false if email is invalid
   * @return {updateEmail} - Update email
   */
  const updateEmail = async (email) => {
    try {
      await setEmail(email);
      return true;
    } catch (e) {
      console.log(e.message);
      return false;
    }
  };
  /**
   * @param {String} user.uid - Get user id
   * @param {String} name - Get name of user
   * @returns {String} user.name - Return name of user
   */

  const DisplayName = async (id) => {
    const ref = doc(db, "users", user.uid);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      return docSnap.data().name;
    } else {
      return null;
    }
  };
  /**
   *
   * @param {String} user.uid - Get user id
   * @param {String} user.weight - Get weight of user
   * @returns {String} user.weight - Return weight of user
   */
  const DisplayWeight = async (id) => {
    const ref = doc(db, "users", user.uid);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      return docSnap.data().weight;
    } else {
      return null;
    }
  };
  /**
   *
   * @param {String} user.uid - Get user id
   * @param {String} user.age - Get age of user
   * @returns {String} user.age - Return age of user
   */
  const DisplayAge = async (id) => {
    const ref = doc(db, "users", user.uid);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      return docSnap.data().age;
    } else {
      return null;
    }
  };
  /**
   *
   * @param {String} user.uid - Get user id
   * @param {String} user.email - Get email of user
   * @returns {String} user.email - Return email of user
   */
  const DisplayEmail = async (id) => {
    const ref = doc(db, "users", user.uid);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      return docSnap.data().email;
    } else {
      return null;
    }
  };
  /**
   *
   * @param {String} name - Get name of user
   * @param {String} age - Get age of user
   * @param {String} email - Get email of user
   * @param {String} weight - Get weight of user
   * @param {String} id - Get user id
   * @returns {updateProfile} - Update profile
   *
   */
  const updateProfile = async (name, age, email, weight, id) => {
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
            return false;
          }
        })
        .catch((e) => {
          alert(e.message);
          return false;
        });
    } catch (e) {
      alert(e.message);
      console.log(e.message);
      return false;
    }
    return true;
  };

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
        updateProfile,
      }}
    >
      {children}
    </profilePageController.Provider>
  );
};

export const ProfilePageController = () => {
  return useContext(profilePageController);
};
