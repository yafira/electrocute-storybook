import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Icon = ({ iconSize }) => {
	return (
		<div>
			<h1>Default Icons</h1>
			<FontAwesomeIcon icon={faHouse} size={iconSize} />
		</div>
	)
}

export default Icon
