const SearchPopup = () => {
	return (
		<div className='absolute z-10 top-full pt-2'>
			<div className='shadow-md rounded-lg overflow-hidden flex'>
				<input
					type='input'
					placeholder='Search...'
					className='outline-none px-5 py-3 bg-gray-100'
				/>
			</div>
		</div>
	);
};

export default SearchPopup;
