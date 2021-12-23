import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// DON'T KNOW WHAT THIS DOES, BUT TAYLOR KNOWS IT'S VERY NECESSARY FOR LIVE DEPLOYMENT <3
// FOR LIVE DEPLOYMENT, GITHUB PAGES REFERENCES YOUR GITHUB CODE, SO YOU MUST PUSH LOCAL CODE TO REMOTE REPO, AND IN TERMINAL RUN: npm run deploy AS REFERENCED IN package.json
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	// THIS REFERENCES THE <div id='root'> INSIDE OF THE index.html FILE; OUR APP COMPONENT WILL CONNECT THERE
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
