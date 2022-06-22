import { Fragment, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './pages/home/home';
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';
import UserDetail from './pages/user-detail/user-detail';

const App = () => {
	const perPage = 4;
	const [users, setUsers] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [searchField, setSearchField] = useState('');

	useEffect(() => {
		fetch(`https://reqres.in/api/users?per_page=${perPage}&page=${page}`)
			.then((res) => res.json())
			.then((res) => {
				setTotalPages(res.total_pages);
				setUsers([...users, ...res.data]);
				setLoading(false);
			});
	}, [page]);

	function handleSearch() {
		return users.filter((user) => {
			const fullName = `${user.first_name} ${user.last_name}`;
			return fullName.toLowerCase().includes(searchField);
		});
	}

	const filteredUsers = handleSearch();

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<Fragment>
			<Header onChangeHandler={onSearchChange} />
			<Routes>
				<Route
					path='/'
					element={
						<Home
							users={filteredUsers}
							totalPages={totalPages}
							page={page}
							setPage={setPage}
							loading={loading}
						/>
					}
				/>
				<Route path='/users/*'>
					<Route path=':userId' element={<UserDetail loading={loading} />} />
				</Route>
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Fragment>
	);
};

export default App;
