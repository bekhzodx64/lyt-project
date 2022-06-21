import Button from '../../components/button/button.component';
import UserCard from '../../components/user-card/user-card.component';

const UsersPage = ({ users, totalPages, loading, page, setPage }) => {
	return (
		<div className='space-y-5 py-20 container'>
			<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-10 pt-5'>
				{users.map((user) => (
					<UserCard user={user} key={user.id} />
				))}
			</div>

			<div className='flex justify-center'>
				{totalPages !== page && (
					<Button buttonType='inverted' onClick={() => setPage(page + 1)}>
						{loading ? 'Loading...' : 'Load more'}
					</Button>
				)}
			</div>
		</div>
	);
};

export default UsersPage;
