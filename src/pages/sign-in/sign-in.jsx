import Button from '../../components/button/button.component';
import { Link } from 'react-router-dom';

const SignIn = () => {
	return (
		<div className='container'>
			<div className='flex lg:h-screen py-28'>
				<div className='bg-white border shadow rounded-2xl p-8 space-y-4 max-w-md w-full relative m-auto'>
					<h2 className='text-center font-bold capitalize text-3xl absolute bg-white top-0 -translate-y-1/2 px-2 select-none pointer-events-none'>
						sign in
					</h2>
					<form className='flex flex-col space-y-5'>
						<input
							required
							type='email'
							className='bg-slate-50 shadow-inner transition-all px-3 py-4 rounded-lg outline-none'
							placeholder='Email'
						/>
						<input
							required
							type='password'
							className='bg-slate-50 shadow-inner transition-all px-3 py-4 rounded-lg outline-none'
							placeholder='Password'
						/>
						<div className='flex justify-center'>
							<Button buttonType='inverted' className='w-full sm:w-2/4'>
								Submit
							</Button>
						</div>
						<div className='text-sm text-center'>
							<p>
								New to LYT ?{' '}
								<Link to='/sign-up' className='text-blue-400'>
									Create an account
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
