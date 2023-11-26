import React, { useState } from 'react'
import { auth } from '../firebase'
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider, signInWithRedirect, createUserWithEmailAndPassword } from 'firebase/auth'
import { BsPersonCircle } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordFill } from 'react-icons/ri'

const googleSignIn = () => {
  const provider = new GoogleAuthProvider()
  signInWithRedirect(auth, provider)
}

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  

  const Sign_up = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true at the start of account creation
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential); // Handle the userCredential as needed
    } catch (error) {
      console.error(error);
      setError('Something went wrong. Please try again.'); // Update error message
    } finally {
      setLoading(false); // Set loading state to false, regardless of success or failure
    }
  };
    
 
  return (
    <div className="sign_in flex w-[100%] items-center justify-center h-screen">
      <div className="md:w-80 sec_div bg-transparent w-72 h-[500px] md:h-[500px] flex  items-center flex-col rounded-3xl p-4">
          <div className=' space-y-2  text-sky-400'>
             <BsPersonCircle className='text-8xl cursor-pointer ' />
              <h1 className=' text-center'>Register</h1>
          </div>
               {loading && <p className="absolute mt-[500px] text-white text-xl">Loading...</p>}
                {error && <p className=" absolute mt-[500px] text-white text-xl"> something went wrong</p>}
                <HiOutlineMail  className='absolute text-xl md:ml-[-220px] mt-[165px] ml-[-200px] text-white '/>
                <RiLockPasswordFill  className='absolute text-xl md:ml-[-220px] mt-[223px] ml-[-200px] text-white '/>
                <GoogleButton className='absolute mt-[370px]' onClick={googleSignIn} />

         <form onSubmit={Sign_up} className='mt-[30px] text-white space-y-7 text-center '>
                
                 <input className='input outline-none py-1 bg-transparent border-b md:w-[240px] w-[220px]'
                    type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='email' />

                 <input className='input outline-none py-1 bg-transparent border-b md:w-[240px] w-[220px]'
                    type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='**********' />

                 <button variant="primary" type="Submit" className='px-20 rounded-full py-2 text-white bg-[#2432cf]'>Sign in</button>
          </form>
                 <p className='absolute mt-[330px] text-white'>Or </p>
                 <p className='absolute ml-[-40px] mt-[443px] text-white'>you have an account? </p>
                  
                 
           <button className='absolute mt-[443px] ml-[170px] text-white underline md:hover:underline' onClick={() => props.onFormSwitch('login')}>
                  Login
          </button>
                
           
     </div>
  </div>
  )
}

export default Register

