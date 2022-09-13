import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Devices from './components/Devices';
import Homepage from './components/Homepage';
import Dashboards from './components/Dashboards';
import Gateways from './components/Gateways';
import Help from './components/Help';
import Settings from './components/Settings';
import Alerts from './components/Alerts';
import Logout from './components/Logout';

function App() {
  return (
    <>
			<Home />
			<Sidebar />
      <div className=''>  
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/dashboards' element={<Dashboards />} />
        <Route exact path='/devices' element={<Devices />} />
        <Route exact path='/gateways' element={<Gateways />} />
        <Route exact path='/help' element={<Help />} />
        <Route exact path='/settings' element={<Settings />} />
        <Route exact path='/alerts' element={<Alerts />} />
        <Route exact path='/logout' element={<Logout />} />
      </Routes>
      </div>

		</>
  );
}

export default App;
