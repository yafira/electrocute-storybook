export default function Card({
	children,
	variant,
	label = '',
	backgroundColor,
	borderColor,
}) {
	const cardStyle = {
		backgroundColor: backgroundColor, // Set the background color using the prop
		border: `2px solid ${borderColor}`,
		maxWidth: 300,
		minHeight: 350,
		padding: '100px',
	}

	return <div style={cardStyle}>{children}</div>
}
