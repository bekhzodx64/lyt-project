import { Fragment, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './pages/home/home';
import UserPage from './pages/user-page/user-page';
import UsersPage from './pages/users-page/users-page';

const App = () => {
	const perPage = 5;
	const [totalPages, setTotalPages] = useState(1);
	const [page, setPage] = useState(1);

	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	const [searchField, setSearchField] = useState('');
	const [filteredUsers, setFilteredUsers] = useState(users);

	useEffect(() => {
		const getUserList = () => {
			setLoading(true);
			fetch(`https://reqres.in/api/users?per_page=${perPage}&page=${page}`)
				.then((res) => res.json())
				.then((res) => {
					setTotalPages(res.totalPages);
					setUsers([...users, ...res.data]);
					setLoading(false);
				});
		};
		getUserList();
	}, [page]);

	useEffect(() => {
		const newFilteredUsers = users.filter((user) => {
			const fullName = `${user.first_name} ${user.last_name}`;
			return fullName.toLowerCase().includes(searchField);
		});
		setFilteredUsers(newFilteredUsers);
	}, [users, searchField]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLowerCase();
		setSearchField(searchFieldString);
		console.log(searchFieldString);
	};

	return (
		<Fragment>
			<Header onChangeHandler={onSearchChange} />
			<Routes>
				<Route path='/' element={<Home users={filteredUsers} />} />
				<Route path='/users/*'>
					<Route
						index
						element={
							<UsersPage
								users={filteredUsers}
								totalPages={totalPages}
								page={page}
								setPage={setPage}
								loading={loading}
							/>
						}
					/>
					<Route path=':userId' element={<UserPage users={users} />} />
				</Route>
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Fragment>
	);
};

export default App;
