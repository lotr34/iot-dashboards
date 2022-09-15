import React from 'react'
import { useGlobalContext } from '../context';

const Homepage = () => {
    const { openSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <div className={`${isSidebarOpen ? 'ml-72': ' ml-20'} mt-6`}>
      <div className='contents md:flex'>
        <div className='w-full md:w-[20%] h-52 border-[3px] border-red-700 rounded-l-lg'>
          devices // gw charts
        </div>
        <div className='w-full md:w-[70%] h-52 border-[3px] border-red-700 rounded-r-lg md:ml-4'>
          map
        </div>
      </div>
    </div>
  )
}

export default Homepage