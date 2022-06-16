import Button from '../button/button.component';
import { BiSearch } from 'react-icons/bi';

const SearchPopup = () => {
	return (
		<div className='absolute top-full pt-2'>
			<div className='shadow-md rounded-lg overflow-hidden flex'>
				<input
					type='input'
					placeholder='Search...'
					className='outline-none px-5 py-3 bg-gray-100'
				/>
				{/* <Button buttonType='search'>
					<BiSearch />
				</Button> */}
			</div>
		</div>
	);
};

export default SearchPopup;
