import { Fragment, useEffect, useState } from 'react';
import Header from './components/header/header.component';
import UsersGrid from './components/users-grid/users-grid.component';

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
			<UsersGrid users={users} />
		</Fragment>
	);
};

export default App;
