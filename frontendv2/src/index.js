import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import { AppProvider } from './context';
import App from './App';
ReactDOM.render(
	<Router>
		<AppProvider>
			<App />
		</AppProvider>
	</Router>,
	document.getElementById('root')
);