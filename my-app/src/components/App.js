import React from 'react'
import NavBar from './Navbar';
import SignUp from './Signup';
import { AuthProvider } from "../contexts/AuthContext"


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <SignUp />
      </div>

    </AuthProvider>

  );
}

export default App;
