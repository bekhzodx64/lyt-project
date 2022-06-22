const SearchPopup = ({ onSearch }) => {
	return (
		<div className='absolute z-10 left-5 top-12 md:left-20 md:top-1/2 md:-translate-y-1/2'>
			<div className='flex'>
				<input
					type='input'
					placeholder='Search...'
					className='outline-none px-5 py-2 bg-gray-100 rounded-lg'
					onChange={onSearch}
				/>
			</div>
		</div>
	);
};

export default SearchPopup;
