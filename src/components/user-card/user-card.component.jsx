import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';

const UserCard = ({ user }) => {
	const { id, avatar, first_name, last_name, email } = user;

	const navigate = useNavigate();

	const onNavigateHandler = () => {
		navigate(`/users/${id}`);
	};
	return (
		<div key={id} className='group relative rounded-3xl overflow-hidden'>
			<img
				src={avatar}
				alt={`${user.id}-${first_name}-${last_name}`}
				className='w-64 h-64 object-cover select-none'
			/>
			<div className='absolute bg-black/50 left-0 right-0 p-3 text-white space-y-1 flex flex-col justify-center items-center max-h-1 group-hover:max-h-full group-hover:bottom-0 transition-all'>
				<span className='absolute bg-gradient-to-t bottom-full to-transparent from-black/50 h-10 w-full'></span>
				<h2 className='font-bold text-xl tracking-tighter'>{`${first_name} ${last_name}`}</h2>
				<a href={`mailto:${email}`}>{email}</a>
				<Button buttonType='white' onClick={onNavigateHandler}>
					See more
				</Button>
			</div>
		</div>
	);
};

export default UserCard;
