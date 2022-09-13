import React from 'react'
import { useGlobalContext } from '../context';

const Homepage = () => {
    const { openSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <div className={`${isSidebarOpen ? 'ml-72': 'ml ml-16'} mt-6`}>Homepage</div>
  )
}

export default Homepage