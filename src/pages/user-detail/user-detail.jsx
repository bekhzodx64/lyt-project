import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../../components/button/button.component';

const UserDetail = () => {
	const { userId } = useParams();
	const [user, setUser] = useState([]);
	const [description, setDescription] = useState([]);
	const [loading, setLoading] = useState(true);

	const { id, avatar, first_name, last_name, email } = user;
	const { text, url } = description;

	useEffect(() => {
		fetch(`https://reqres.in/api/users/${userId}`)
			.then((res) => res.json())
			.then((res) => {
				setUser(res.data);
				setDescription(res.support);
				setLoading(false);
			});
	}, []);

	return (
		<div className='container'>
			<div className='flex justify-center items-center md:min-h-screen py-28'>
				{loading ? (
					<div className='flex flex-col w-full max-w-3xl md:flex-row items-center rounded-3xl overflow-hidden shadow ring-8 ring-gray-100 relative'>
						<div className='[clip-path:circle(70%_at_20%_30%)] md:[clip-path:polygon(0%_0%,100%_0%,75%_100%,0%_100%)] w-full md:w-72 object-cover h-72 bg-gray-300 select-none' />
					</div>
				) : (
					<div className='flex flex-col md:w-full md:max-w-3xl md:flex-row items-center rounded-3xl overflow-hidden shadow ring-8 ring-gray-100 relative'>
						<img
							src={avatar}
							alt={`${id}-${first_name}-${last_name}`}
							className='[clip-path:circle(70%_at_20%_30%)] md:[clip-path:polygon(0%_0%,100%_0%,75%_100%,0%_100%)] w-full md:w-72 object-cover h-72 select-none'
						/>
						<div className='space-y-3 p-5 md:pl-5 py-5 md:pr-12'>
							<p className='text-4xl'>{`${first_name} ${last_name}`}</p>

							<div className='space-y-3'>
								<a href={`mailto:${email}`} className='opacity-60'>
									{email}
								</a>
								<p className='text-sm'>{text}</p>
							</div>

							<div className='flex justify-center md:block space-x-3'>
								<Button buttonType='inverted'>
									<a href={`mailto:${email}`}>contact</a>
								</Button>
								<Button buttonType='main'>
									<a href={url}>donate</a>
								</Button>
							</div>
						</div>

						<div className='absolute bottom-1 right-3 select-none pointer-events-none'>
							<p className='opacity-50'>id: {userId}</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default UserDetail;
