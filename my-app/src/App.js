import React from 'react'
import NavBar from '../src/components/Navbar';
import SignUp from '../src/components/Signup';
import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <div>
      <AuthProvider>
        <div className="App">
            <NavBar />
            <SignUp />
          </div>
      </AuthProvider>

    </div>



  );
}

export default App;
