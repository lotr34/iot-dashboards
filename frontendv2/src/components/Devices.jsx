import React from 'react'
import { useGlobalContext } from '../context';

const Devices = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <div className={`${isSidebarOpen ? 'ml-72': 'ml ml-16'} mt-6`}>Devices</div>
  )
}

export default Devices