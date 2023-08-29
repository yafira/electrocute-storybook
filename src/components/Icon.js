import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

function Icon({ iconSize, iconMargin, iconList }) {
	const iconContainerStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
	}

	const iconStyle = {
		margin: iconMargin,
	}

	return (
		<div style={iconContainerStyle}>
			{/* Default Icons */}
			{iconList.slice(0, 10).map((icon, index) => (
				<FontAwesomeIcon
					key={index}
					icon={icon}
					size={iconSize}
					style={iconStyle}
				/>
			))}

			{/* Actionable Icons */}
			{iconList.slice(10, 13).map((icon, index) => (
				<FontAwesomeIcon
					key={index}
					icon={icon}
					size={iconSize}
					style={iconStyle}
				/>
			))}

			{/* Controls */}
			{iconList.slice(13).map((icon, index) => (
				<FontAwesomeIcon
					key={index}
					icon={icon}
					size={iconSize}
					style={iconStyle}
				/>
			))}
		</div>
	)
}

Icon.propTypes = {
	iconSize: PropTypes.string,
	iconMargin: PropTypes.string,
	iconList: PropTypes.arrayOf(PropTypes.object),
}

export default Icon
