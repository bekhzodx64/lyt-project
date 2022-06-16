import { AiOutlineEdit, AiOutlineLogin } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Button from '../button/button.component';
import SearchPopup from '../search-popup/searchPopup.component';

const Header = () => {
	return (
		<header className='shadow bg-white'>
			<div className='container py-4 flex justify-between sm:grid grid-cols-3 items-center relative'>
				<button type='button' className='search-button group'>
					<BiSearch className='group-hover:text-white' />
				</button>
				<div className='justify-self-center'>
					<Link to='/' tabIndex='-1'>
						<div className='logo'>
							<p>lyt</p>
							<span>stay with us!</span>
						</div>
					</Link>
				</div>
				<div className='justify-self-end space-x-3'>
					<Button buttonType='inverted'>
						<AiOutlineEdit className='md:hidden' />
						<span className='hidden md:block'>Sign in</span>
					</Button>
					<Button buttonType='main'>
						<AiOutlineLogin className='md:hidden' />
						<span className='hidden md:block'>Sing up</span>
					</Button>
				</div>
				<SearchPopup />
			</div>
		</header>
	);
};

export default Header;
