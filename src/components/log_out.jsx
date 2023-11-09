import React from 'react'
import {auth} from '../firebase'

const style = {
    button: ``
}


const LogOut = () => {
         
const signOut = () => {
    signOut(auth)
}

  return (
    <button onClick={() => auth.signOut()} className={style.button}>
        Logout
    </button>
  )
}

export default LogOut