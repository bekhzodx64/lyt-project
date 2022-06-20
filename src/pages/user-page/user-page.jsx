import { useParams } from 'react-router-dom';
import UserSinglePage from '../../components/user-single-page/user-single-page.component';

const UserPage = ({ users }) => {
	const { userId } = useParams();

	const index = users.findIndex((e) => e.id === parseInt(userId));
	const user = users[index];

	return (
		<div className='container'>
			<div className='flex justify-center items-center min-h-screen'>
				<UserSinglePage user={user} />
			</div>
		</div>
	);
};

export default UserPage;
