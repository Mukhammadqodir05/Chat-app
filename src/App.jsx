import React, { useState } from "react";
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Register from './sign_in/register'
import Log_in from './sign_in/log_in'
import Home from "./components/home";

const App = () => {
  
  const [currentForm, setCurrentForm] = useState('register');
  const [user] = useAuthState(auth)
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className=''>
      
      {user ? <Home /> : (currentForm === "register" ? <Register onFormSwitch={toggleForm} /> : <Log_in onFormSwitch={toggleForm} />)}
    
    </div>
  )
}

export default App

