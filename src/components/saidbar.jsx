import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex relative flex-col w-36  md:w-72 h-[642px]  bg-gray-900">
      <div className="flex items-center  justify-between h-16 px-4">
        <div className="text-white text-xl font-semibold">Telegram</div>
        {/* Add your logo or any other component here */}
      </div> 

      <div className="flex-1 overflow-y-auto">
        {/* Sidebar content */}
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-4">
            <span className="inline-block w-4 h-4 bg-blue-500 rounded-full"></span>
            <span className="text-white">Chat 1</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="inline-block w-4 h-4 bg-blue-500 rounded-full"></span>
            <span className="text-white">Chat 2</span>
          </div>
          {/* Add more chats or channels here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;