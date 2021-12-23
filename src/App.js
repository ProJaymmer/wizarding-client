import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
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
				console.log(data.schools[0].name);
				// setSchoolList(data.schools);
			});
	};

	useEffect(() => {
		const schoolsUrl = 'http://localhost:4000/schools/';
		makeApiCall(schoolsUrl);
	}, []);

	return (
		<div className='App'>
			<header>Wizarding Schools Review</header>
			<nav>
				<Link to='/'></Link>
				<Link to='/schools'>Schools</Link>
			</nav>
			<main>
				<a
					className='logo'
					href='https://github.com/ProJaymmer/wizarding-client'>
					<WizardingSchoolsLogo />
				</a>
			</main>
			<Routes>
				<Route
					exact
					path='/schools'
					element={
						<SchoolList
							schoolList={schoolList ? schoolList : ''}
							setSchoolList={setSchoolList}
						/>
					}
				/>
			</Routes>
			{/* <Route
				path='/schools'
				component={SchoolList} schoolList={schoolList} setSchoolList={setSchoolList} /> */}
		</div>
	);
}

export default App;
