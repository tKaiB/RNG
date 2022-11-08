import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateEmail,
  updateProfile,
  sendEmailVerification
} from "firebase/auth";

const UserContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const EmailVerification = () => {
    return sendEmailVerification(auth.currentUser)
  }

  /**
   * 
   * @param {string} email - Get email of user
   * @param {string} password - Get password of user
   * @returns {createUserWithEmailAndPassword} createUserWithEmailAndPassword - Create user account
   */
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /**
   * 
   * @param {string} email - Get email of user
   * @param {string} password - Get password of user
   * @returns {signInWithEmailAndPassword} signInWithEmailAndPassword - Sign in
   */
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  /**
   * 
   * @param {string} email - Get email of user
   * @returns {sendPasswordResetEmail} sendPasswordResetEmail - Reset account
   */
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  /**
   * 
   * @param {string} newEmail - Get updated email
   * @returns {updateEmail} updateEmail - Update email
   */
  const setEmail = (newEmail) => {
    return updateEmail(auth.currentUser, newEmail);
  };

  /**
   * 
   * @param {*} newProfile 
   * @returns {updateProfile} updateProfile - Update profile of user
   */
  const updateProfile = (newProfile) => {
    return updateProfile(auth.currentUser, newProfile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        createUser,
        user,
        logout,
        signIn,
        resetPassword,
        setEmail,
        updateProfile,
        EmailVerification
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
