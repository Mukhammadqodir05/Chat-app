import React from 'react'
import Chat_app from './chat_app'
import SendMessage from './SendMessage' 
import {GoPersonAdd} from 'react-icons/go'

const Main_chat = () => {

  return (
    <div className=''> 
     <div className=' w-full p-[10px] h-[70px] relative bg-[#C79BA4] flex items-center justify-between'>
         <div className=' flex gap-10'>
            <GoPersonAdd />
         </div>
     </div> 
      <Chat_app/>
      <SendMessage />
   </div>
  )
}

export default Main_chat