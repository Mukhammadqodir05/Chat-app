import React from 'react'
import me from '/src/assets/me.jpg'
const Search = () => {
  return (
    <div className='py-2 flex-col space-y-2'>
         <div className=''>
         <input className='ml-2 md:w-[315px] h-7 w-[110px] rounded-md bg-transparent outline-none border-none' type='text' placeholder='Search 🔍' ></input>
         </div>

         <div className='Chat items-center  flex text-left flex-col'>
           <img className='w-[40px] md:w-[50px] rounded-full' src={me}/>
            <div className='ChatInfo  '>
                <span className=' font-bold'>
                  Muhammadqodir
                </span>
             </div>
         </div>
         <h1 className='border w-full'></h1>

    </div>
  )
}

export default Search