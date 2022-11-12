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

const recipeController = React.createContext();

export const recipeContextProvider = ({ children }) => {
  const {user ,setEmail}  = UserAuth()

  const getRecipeFromDB = async (totalCalorie, meals) => {
    function filterItems(arr, query) {
        return arr.filter((el) => el.ingredient.toLowerCase().includes(query.toLowerCase()));
      }
    let recipe = [];
    const docRef = collection(db, "recipe");
    const mealCalorie = Math.floor(totalCalorie / meals);
    const q = query(docRef, where("calories", "<=", mealCalorie), orderBy("calories", "desc"));

    const docRef2 = collection(db, "healthy");
    const q2 = query(docRef2);
    // let healthy = [];
    // if (healthy.length == 0) {
    // const querySnapshot2 = await getDocs(q2);
    // querySnapshot2.forEach((doc) => {
    //   healthy.push(doc.data().brand_and_product_name);
    // });
    // }
    // console.log(healthy);

    let healthy = []
    const querySnapshot2 = await getDocs(q2);
    querySnapshot2.forEach((doc) => {
      let tempObject = {}
      tempObject.brandName = doc.data().brand_and_product_name;
      tempObject.ingredient = doc.data().ingredient;
      healthy.push(tempObject)

    });

    console.log(healthy)


    const querySnapshot = await getDocs(q);
    let counter = 0;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let tempObject = {};
      tempObject.index = counter;
      tempObject.title = doc.data().name;
      tempObject.subheader = `Meal ${counter + 1}`;
      tempObject.calories = doc.data().calories;
      tempObject.protein = doc.data().protein;
      tempObject.sodium = doc.data().sodium;
      // tempObject.saturatedFat = doc.data().saturated fat,
      tempObject.sugar = doc.data().sugar;
      tempObject.totalFat = doc.data().totalFat;
      tempObject.time = doc.data().minutes;


      const recipeArray = doc.data().steps.split("%")
      let recipeResult = ''
      for (let i = 0; i < recipeArray.length; i++) {
        recipeResult = recipeResult + `${i + 1} . ${String(recipeArray[i])}  \n`;


      }
      tempObject.steps = recipeResult

      const ingredientsArray = doc
        .data()
        .ingredients.slice(0, -2)
        .split("%");
      let ingredientResult = "";
      let healthierIngredients = "";
      let healthyCounter = 0;
      for (let i = 0; i < ingredientsArray.length; i++) {
        // filter logic
        const result = filterItems(healthy, String(ingredientsArray[i]));

        if (result.length > 0) {
          ingredientResult =
            ingredientResult + `${i + 1} . ${String(ingredientsArray[i])} * \n`;
          // do for loop
          for (
            healthyCounter;
            healthyCounter < result.length;
            healthyCounter++
          ) {
            healthierIngredients =
              healthierIngredients +
              `${healthyCounter + 1} . ${String(result[healthyCounter].brandName)} \n`;
          }
        } else {
          ingredientResult =
            ingredientResult + `${i + 1} . ${String(ingredientsArray[i])} \n`;
        }

        // stepResult = stepResult + "hello" + "\n"
      }
      // ingredientResult = ingredientResult.replaceAll(/[']/g,'')
      tempObject.ingredients = ingredientResult;
      tempObject.ingredientsArray = ingredientsArray;
      tempObject.healthyIngredients = healthierIngredients;
      recipe.push(tempObject);

      counter++;
    });

    return recipe;
  };

  const GenerateRecipe = async (totalCalorie, meals) => {
    // overwritten in UI 
    return null 

  };

  const sendRecipetoDB = async (recipe) => {
    return null

    // implemented in python file 



  }






  return (
    <recipeController.Provider
      value={{
        getRecipeFromDB,
        GenerateRecipe,
        sendRecipetoDB
      }}
    >
      {children}
    </recipeController.Provider>
  );
};

export const RecipeController = () => {
  return useContext(recipeController);
};
