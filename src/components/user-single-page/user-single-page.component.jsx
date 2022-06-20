import Button from '../button/button.component';

const UserSinglePage = ({ user }) => {
	const { avatar, id, first_name, last_name, email } = user;
	return (
		<div className='flex flex-col md:flex-row items-center rounded-3xl overflow-hidden shadow ring-8 ring-gray-100 relative'>
			<img
				src={avatar}
				alt={`${id}-${first_name}-${last_name}`}
				className='[clip-path:circle(70%_at_20%_30%)] md:[clip-path:polygon(0%_0%,100%_0%,75%_100%,0%_100%)] w-full object-cover h-72 select-none'
			/>
			<div className='space-y-3 md:pl-5 py-5 md:pr-12'>
				<p className='text-4xl'>{`${first_name} ${last_name}`}</p>

				<p>
					<a href={`mailto:${email}`} className='opacity-60'>
						{email}
					</a>
				</p>

				<div className='flex justify-center md:block'>
					<Button buttonType='inverted'>
						<a href={`mailto:${email}`}>contact</a>
					</Button>
				</div>
			</div>

			<div className='absolute bottom-1 right-3 select-none pointer-events-none'>
				<p className='opacity-50'>id: {id}</p>
			</div>
		</div>
	);
};

export default UserSinglePage;
