import React, { useState } from 'react';
import LogOut from './log_out';
import {VscMenu, VscChromeClose} from 'react-icons/vsc'
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import me from '/src/assets/me.jpg'

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [user] = useAuthState(auth);

  return (
    <div className='flex justify-between fixed w-full md:w-[100%] h-[80px] md:h-[80px]   items-center bg-slate-600'>


       <h1 className='messenger cursor-pointer lg:flex hidden mt-[-7px] text-3xl md:ml-2  text-white font-bold'>
        Messenger
      </h1> 


      <div className=' md:mr-[15px] ml-[10px] text-4xl z-10 cursor-pointer mt-[-7px] text-white' onClick={handleClick}>
       { !nav ? <  VscMenu /> : <VscChromeClose className="ml-[10px]   md:mr-[240px] text-3xl " />}
      </div>

  
      <div className={nav ? 'eyy open' : 'eyy'} >
           <ul className='text-white z-10 space-y-2  text-left  flex-col flex ml-[50px] mt-20 text-2xl'>
              <li className='w-[100px] '>
                 <img className='rounded-full' src={me} />
                 <p className=' text-base'>Muhammadqodir</p>
              </li>
              <hr className='border  ml-[-50px] border-black  '/>
            
             <li className='mt-[20px] hover:shadow-xl'><LogOut/></li> 
             <li>they</li>
             <li>he</li>
           </ul>
      </div>

    
    </div>
  );
};

export default Navbar;