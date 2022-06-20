import { Link } from 'react-router-dom';
import Button from '../../components/button/button.component';
import UserCard from '../../components/user-card/user-card.component';

const UsersPage = ({ users }) => {
	return (
		<div className='space-y-5 pt-20'>
			<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-10 pt-5'>
				{users
					.filter((_, idx) => idx < 5)
					.map((user) => (
						<UserCard user={user} key={user.id} />
					))}
			</div>

			<div className='flex justify-center'>
				<Link to='/users'>
					<Button buttonType='main'>Load more</Button>
				</Link>
			</div>
		</div>
	);
};

export default UsersPage;
