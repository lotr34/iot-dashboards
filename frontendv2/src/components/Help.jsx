import React from 'react'
import { useGlobalContext } from '../context';

const Help = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <div className={`${isSidebarOpen ? 'ml-72': 'ml ml-16'} mt-6`}>Help</div>
  )
}

export default Help