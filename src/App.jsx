import { Fragment, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './pages/home/home';
import UserPage from './pages/user-page/user-page';
import UsersPage from './pages/users-page/users-page';

const App = () => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const res = await fetch('https://reqres.in/api/users/');
		const json = await res.json();
		setUsers(json.data);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<Fragment>
			<Header />
			<Routes>
				<Route path='/' element={<Home users={users} />} />
				<Route path='/users/*'>
					<Route index element={<UsersPage users={users} />} />
					<Route path=':userId' element={<UserPage users={users} />} />
				</Route>
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Fragment>
	);
};

export default App;
