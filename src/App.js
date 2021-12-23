import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import WizardingSchoolsLogo from './components/WizardingSchoolsLogo';

function App() {
	// const makeApiCall = (schoolsUrl) => {
	// 	fetch(schoolsUrl)
	// 		.then( (response) => {
	// 			return response.json();
	// 		})
	// 		.then( (data) => {
	// 			console.log(data);

	// 		})
	// }
	return (
		<div className='App'>
			<nav>
				<Link to='/'>
					<WizardingSchoolsLogo />
				</Link>
				<h1>Jay's Site</h1>
			</nav>
		</div>
	);
}

export default App;
