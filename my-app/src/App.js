import React from 'react'
import NavBar from '../src/components/Navbar';
import ForgetPassword from './components/ForgetPassword'
import SignUp from './components/Signup';
import SignIn from './components/Signin'
import { AuthContextProvider } from './contexts/AuthContext';
import {Routes , Route } from 'react-router-dom'
import Account from './components/Account';




function App() {
  return (
    <div style={{backgroundColor:'#FFEAEA'}}>
      <AuthContextProvider> 
        <Routes>
          <Route path ='/' element={<SignUp />} />
          <Route path ='/signin' element={<SignIn />} />
          <Route path ='/account' element={<Account />} />
          <Route path ='/forgetpassword' element={<ForgetPassword />} />
        </Routes>


      </AuthContextProvider>


    </div>



  );
}

export default App;
