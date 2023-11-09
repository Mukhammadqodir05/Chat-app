import React, { useState } from 'react'
import Said from './said'
import search from '/src/assets/search.jpg'

const Home = () => {
  

  return (
    <div className="home flex h-[100vh] w-full justify-center bg-slate-500">
      <div className="container   grid grid-cols-[1fr,2fr] border w-full h-full">
        <div className="sidebar mt-[80px] lg:flex  bg-gray-400">
          
          <div className="relative  ">
            <input 
              className="h-10 mt-[10px] px-4 pr-1 md:ml-[20px]  md:w-[470px] rounded-full focus:outline-none"
              type="text"
              placeholder="Search"
            />

            <div className="absolute top-0 right-0 mt-4 md:mr-4 mr-4">
              <img className="h-7 w-7" src={search} alt="Search" />
            </div>

            <div className='ml-2 mt-2'>
              Archived Chats
            </div>

          <div className='ml-2 '>
             <Said />
          </div>
          </div>
        </div> 

   {/* Chat starts here */}
        <div className='mt-[80px]'>
           Chats
        </div>
      </div>
    </div>
  );
}

export default Home