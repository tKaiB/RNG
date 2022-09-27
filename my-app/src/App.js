import React from 'react'
import NavBar from '../src/components/Navbar';
import SignUp from '../src/components/Signup';
import { AuthContextProvider } from './contexts/AuthContext';




function App() {
  return (
    <div>
      <AuthContextProvider>
          <div className="App">
            <NavBar />
            <SignUp />
          </div>

      </AuthContextProvider>


    </div>



  );
}

export default App;
