import { Link } from 'react-router-dom';
import Button from '../../components/button/button.component';
import UserCard from '../../components/user-card/user-card.component';

const Home = ({ users }) => {
	return (
		<div className='space-y-5 py-20'>
			<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-10 pt-5'>
				{users
					.filter((_, idx) => idx < 5)
					.map((user) => (
						<UserCard user={user} key={user.id} />
					))}
			</div>
			<div className='flex justify-center'>
				<Link to='/users'>
					<Button buttonType='main'>All users</Button>
				</Link>
			</div>
		</div>
	);
};

export default Home;