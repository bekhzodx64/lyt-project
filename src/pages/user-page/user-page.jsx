import { useParams } from 'react-router-dom';
import UserSinglePage from '../../components/user-single-page/user-single-page.component';

const UserPage = ({ users }) => {
	const { userId } = useParams();

	const index = users.findIndex((e) => e.id === parseInt(userId));
	const user = users[index];

	return (
		<div className='container'>
			<div className='flex justify-center items-center md:min-h-screen py-28'>
				<UserSinglePage user={user} />
			</div>
		</div>
	);
};

export default UserPage;
