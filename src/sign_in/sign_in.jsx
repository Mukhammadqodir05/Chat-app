import React from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../firebase'
import GoogleButton from 'react-google-button'
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'


const googleSignIn = () => {
         const provider = new GoogleAuthProvider()
         signInWithRedirect(auth, provider)
     }
     

const Sign_in = () => {
 
  return (
    <div className='flex justify-center'>
      
      
      
        <GoogleButton onClick={googleSignIn} />
      
    </div>
  )
}

export default Sign_in