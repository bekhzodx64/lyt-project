import Button from '../button/button.component';

const UserSinglePage = ({ user }) => {
	const { avatar, id, first_name, last_name, email } = user;
	return (
		<div className='flex items-center rounded-3xl overflow-hidden shadow ring-8 ring-gray-100 relative'>
			<img
				src={avatar}
				alt={`${id}-${first_name}-${last_name}`}
				className='[clip-path:polygon(0%_0%,100%_0%,75%_100%,0%_100%)] w-72 h-72 select-none'
			/>
			<div className='space-y-3 pl-5 pr-12'>
				<p className='text-4xl'>{`${first_name} ${last_name}`}</p>

				<p>
					<a href={`mailto:${email}`} className='opacity-60'>
						{email}
					</a>
				</p>

				<Button buttonType='inverted'>
					<a href={`mailto:${email}`}>contact</a>
				</Button>
			</div>

			<div className='absolute bottom-1 right-3 select-none pointer-events-none'>
				<p className='opacity-50'>id: {id}</p>
			</div>
		</div>
	);
};

export default UserSinglePage;
