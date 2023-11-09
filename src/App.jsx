import React from 'react'
import Navbar from './components/navbar' 
import Home from './components/home'
import SendMessage from './components/SendMessage'
import Chat_app from './components/chat_app'
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'


const App = () => {
  const [user] = useAuthState(auth)
  return (
    <div className=''>
      <div className=''>

      <Navbar />
      <Home />
      
{/*      
       {user ? <Chat_app /> : null}  */}
      </div>
    </div>
  )
}

export default App