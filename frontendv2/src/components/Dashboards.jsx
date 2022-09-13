import React from 'react'
import { useGlobalContext } from '../context';

const Dashboards = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <div className={`${isSidebarOpen ? 'ml-72': 'ml ml-16'} mt-6`}>Dashboards</div>
  )
}

export default Dashboards