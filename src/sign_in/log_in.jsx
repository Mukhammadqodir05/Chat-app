import React, { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { RiLockPasswordFill } from 'react-icons/ri'


const Log_in = (props) => {
  const [err, setErr] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    setErr(false); // Reset error state before attempting login
    setLoading(true); // Set loading state to indicate the start of the login process
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential); // Handle the userCredential as needed
    } catch (error) {
      console.error(error);
      setErr(true);
    } finally {
      setLoading(false); // Set loading state to false, regardless of success or failure
    }
  };

  return (
    <div className="sign_in flex w-[100%] items-center justify-center h-screen">
      <div className="md:w-80 sec_div bg-transparent w-72 h-[440px] flex  items-center flex-col rounded-3xl p-4">
        <div className="space-y-2  text-sky-400">
          <BsPersonCircle className="text-8xl cursor-pointer" />
          <h1 className="text-center">Log in</h1>
        </div>
        
        {err && <p className=" absolute mt-[500px] text-white text-xl"> something went wrong</p>}
        {loading && <p className=" absolute mt-[450px] text-white text-xl"> loading...</p>}
        <HiOutlineMail className="absolute text-xl md:ml-[-220px] mt-[165px] ml-[-200px] text-white" />
        <RiLockPasswordFill  className='absolute text-xl md:ml-[-220px] mt-[220px] ml-[-200px] text-white '/>
      
        <form onSubmit={login} className="mt-[30px] text-white space-y-7   text-center ">
          <input
            className="input outline-none py-1 bg-transparent border-b md:w-[240px] w-[220px]"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            className="input outline-none py-1 bg-transparent border-b md:w-[240px] w-[220px]"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="**********"
          />
          <button type="submit" className="px-20 rounded-full py-2 text-white bg-[#2432cf]" >
            Log in
          </button>
        </form>
        
        <p className="absolute ml-[-60px] mt-[380px] text-white text-sm">you don't have an account? </p>
        <button className="absolute mt-[380px] ml-[170px] underline text-sm text-white hover:underline" onClick={() => props.onFormSwitch('register')}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Log_in;