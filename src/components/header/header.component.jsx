import { useState } from 'react';
import { AiOutlineEdit, AiOutlineLogin } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Button from '../button/button.component';
import SearchPopup from '../search-popup/searchPopup.component';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';

const SEARCH_POPUP_ANIMATIONS = {
	hidden: {
		position: 'absolute',
		scaleY: 0,
		opacity: 0,
	},
	visible: {
		scaleY: 1,
		opacity: 1,
	},
	exit: {
		scaleY: 0,
		opacity: 0,
	},
};

const Header = ({ onChangeHandler }) => {
	const [showSearch, setShowSearch] = useState(false);

	const searchHandler = () => {
		setShowSearch(!showSearch);
	};

	return (
		<header className='shadow bg-white fixed top-0 left-0 right-0 z-50'>
			<div className='container py-4 flex justify-between sm:grid grid-cols-3 items-center relative'>
				<button
					type='button'
					className='search-button group'
					onClick={searchHandler}>
					{showSearch ? (
						<IoMdClose className='group-hover:text-white' />
					) : (
						<BiSearch className='group-hover:text-white' />
					)}
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
					<Link to='sign-in'>
						<Button buttonType='inverted'>
							<AiOutlineEdit className='md:hidden' />
							<span className='hidden md:block'>Sign in</span>
						</Button>
					</Link>
					<Link to='sign-up'>
						<Button buttonType='main'>
							<AiOutlineLogin className='md:hidden' />
							<span className='hidden md:block'>Sing up</span>
						</Button>
					</Link>
				</div>

				<AnimatePresence>
					{showSearch && (
						<motion.div
							variants={SEARCH_POPUP_ANIMATIONS}
							initial='hidden'
							animate='visible'
							exit='exit'
							className='origin-left'>
							<SearchPopup onSearch={onChangeHandler} />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<Outlet />
		</header>
	);
};

export default Header;
