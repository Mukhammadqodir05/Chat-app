import React from 'react'
import Navbar from './navbar'
import Search from './search';
import Friends from './members';
import Main_chat from './Chat/main_chat';


const Home = () => {
  

  return (
    <div className="home  fixed flex h-[100vh] justify-center items-center w-full bg-[#302c73]">
      <div className="hidden  con h-[700px] md:grid md:grid-cols-[1fr,3fr] relative border overflow-hidden  md:w-[1200px] md:h-[700px]">
      
    {/* sidebar  starts here*/}
        <div className="sidebar    bg-gray-400">
          <div className='absolute'>
            <Navbar />
          </div>
             
            <div className=' space-y-2 mt-[80px]'>
            <div className='ml-2 mt-2 '>
             Your Chats
            </div>

          <div className='ml-[-180px] h-[587px] overflow-y-auto duration-500'>
             <Friends />
          </div>
          </div>
            </div>
        


   {/* Chat starts here */}
        <div className=' '>
          <Main_chat />
        </div>
      </div>
    </div>
  );
}

export default Home