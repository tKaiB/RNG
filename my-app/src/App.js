import React from "react";
import NavBar from "./components/Navbar";
import ForgetPassword from "./pages/ForgetPassword";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import { AuthContextProvider } from "./contexts/AccountController";
import { Routes, Route } from "react-router-dom";
import Account from "./pages/Account";
import FAQ from "./pages/Faq";
import Aboutus from "./pages/Aboutus";
import UserProfile from "./pages/Userprofile";
import EditProfile from "./pages/EditProfile";
import AccountFaq from "./components/AccountFaq";
import AccountAboutus from "./pages/AccountAboutus";
import CalorieIntake from "./pages/CalorieIntake";
import BmiInput from "./pages/BMI";
import MonthlyBMI from "./pages/MonthlyBMI";
import MonthlyCalorie from "./pages/MonthlyCalorie";
import DynamicRecipeGenerator from "./pages/DynamicRecipeGenerator";

function App() {
  return (
    <div style={{ backgroundColor: "#FFe9e9"}}>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/account" element={<Account />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/accountfaq" element={<AccountFaq />} />
          <Route path="/accountaboutus" element={<AccountAboutus />} />
          <Route path="/calorieintake" element={<CalorieIntake />} />
          <Route path="/BmiInput" element={<BmiInput />} />
          <Route path="/monthlybmichart" element={<MonthlyBMI />} />"
          <Route path="/monthlycaloriechart" element={<MonthlyCalorie />} />
          <Route path= '/dynamic' element={<DynamicRecipeGenerator />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
