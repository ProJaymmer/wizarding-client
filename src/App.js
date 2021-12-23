import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import WizardingSchoolsLogo from './components/WizardingSchoolsLogo';
import SchoolList from './components/SchoolList';

function App() {
	const [schoolList, setSchoolList] = useState([]);

	const makeApiCall = (schoolsUrl) => {
		fetch(schoolsUrl)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setSchoolList(data.results);
			});
	};

	useEffect(() => {
		const schoolsUrl = '';
		makeApiCall(schoolsUrl);
	}, []);

	return (
		<div className='App'>
			<header>Wizarding Schools Review</header>
			<nav>
				<Link to='/schools'>Schools</Link>
			</nav>
			<main>
				<a class='logo' href='https://github.com/ProJaymmer/wizarding-client'>
					<WizardingSchoolsLogo />
				</a>
			</main>
			<Route
				path='/schools'
				exact
				render={() => (
					<SchoolList schoolList={schoolList} setSchoolList={setSchoolList} />
				)}
			/>
		</div>
	);
}

export default App;
