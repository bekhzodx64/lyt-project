import UserCard from '../user-card/user-card.component';

const UsersGrid = ({ users }) => {
	return (
		<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container place-items-center gap-10 pt-5'>
			{users.length &&
				users.map((user) => <UserCard user={user} key={user.id} />)}
		</div>
	);
};

export default UsersGrid;
