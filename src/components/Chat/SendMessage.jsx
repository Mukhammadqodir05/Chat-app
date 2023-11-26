import React, { useState, useEffect, useRef } from 'react';
import { auth, db } from '../../firebase';
import {GrSend} from 'react-icons/gr'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const SendMessage = () => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === '') {
      return;
    }
 
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput(''); // Clear the input field
  }; 

  return (
    <form onSubmit={sendMessage} className='w-full mt-[-49px] relative h-[50px] md:mt-[0px] flex justify-between text-xlbg-slate-100'>
      <input value={input} onChange={(e) => setInput(e.target.value)} className='w-full outline-none' type='text' placeholder='Message'/>     
      <button type='submit' className='absolute bg-white h-[50px] w-[180px] ml-[180px] mt- md:ml-[695px] text-4xl'>
        <GrSend className='text-violet-700 ml-[120px] cursor-pointer'  />
      </button>
    </form>
  );
};

export default SendMessage;
