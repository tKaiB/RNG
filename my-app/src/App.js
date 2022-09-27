import React from 'react'
import NavBar from '../src/components/Navbar';
import SignUp from './components/Signup';
import SignIn from './components/Signin'
import { AuthContextProvider } from './contexts/AuthContext';
import {Routes , Route } from 'react-router-dom'
import Account from './components/Account';




function App() {
  return (
    <div>
      <AuthContextProvider> 
        <Routes>
          <Route path ='/' element={<SignIn />} />
          <Route path ='/signup' element={<SignUp />} />
          <Route path ='/account' element={<Account />} />
        </Routes>


      </AuthContextProvider>


    </div>



  );
}

export default App;
