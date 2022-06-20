const BUTTON_TYPES_CLASSES = {
	main: 'main',
	inverted: 'inverted',
	search: 'search',
	white: 'white',
};

const Button = ({ children, buttonType, className, ...otherProps }) => {
	return (
		<button
			className={`button ${BUTTON_TYPES_CLASSES[buttonType]} ${className}`}
			{...otherProps}>
			{children}
		</button>
	);
};

export default Button;
