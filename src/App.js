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
			<header>Wizarding Schools Review</header>
			<nav>
				<Link to='https://github.com/ProJaymmer/wizarding-client'>
					<WizardingSchoolsLogo />
				</Link>
			</nav>
		</div>
	);
}

export default App;
