import { Link } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';
import Button from '../button/button.component';
import { AiOutlineLogin, AiOutlineEdit } from 'react-icons/ai';

const Header = () => {
	return (
		<header className='shadow bg-white'>
			<div className='container py-4 flex justify-between sm:grid grid-cols-3 items-center'>
				<button type='button' className='menu-button group'>
					<CgMenuGridO className='group-hover:text-white' />
				</button>
				<div className='justify-self-center'>
					<Link to='/' tabIndex='-1'>
						<div className='logo'>
							<p>lyt</p>
							<span>stay with us!</span>
						</div>
					</Link>
				</div>
				<div className='justify-self-end space-x-1 sm:space-x-3'>
					<Button buttonType='inverted'>
						<AiOutlineEdit className='md:hidden' />
						<span className='hidden md:block'>Sign in</span>
					</Button>
					<Button buttonType='main'>
						<AiOutlineLogin className='md:hidden' />
						<span className='hidden md:block'>Sing up</span>
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
