import React from 'react'
import IconComponent from '../components/Icon'
import {
	faHouse,
	faRotate,
	faGear,
	faCircleQuestion,
	faCircleInfo,
	faRightFromBracket,
	faUser,
	faStar,
	faMagnifyingGlass,
	faTriangleExclamation,
	faCircleXmark,
	faMicrophone,
	faLocationDot,
	faSun,
	faMoon,
} from '@fortawesome/free-solid-svg-icons'

export default {
	title: 'Components/Icon',
	component: IconComponent,
}

const Template = (args) => <IconComponent {...args} />

export const DefaultIcons = Template.bind({})
DefaultIcons.args = {
	iconSize: '2x',
	iconMargin: '20px',
	iconList: [
		faHouse,
		faRotate,
		faGear,
		faCircleQuestion,
		faCircleInfo,
		faRightFromBracket,
		faUser,
		faStar,
		faMagnifyingGlass,
		faTriangleExclamation,
	],
}

// Second story with another set of icons
export const ActionableIcons = Template.bind({})
ActionableIcons.args = {
	iconSize: '2x',
	iconMargin: '10px',
	iconList: [faCircleXmark, faMicrophone, faLocationDot],
}

// Third story with a different set of icons
export const ControlIcons = Template.bind({})
ControlIcons.args = {
	iconSize: '2x',
	iconMargin: '10px',
	iconList: [faSun, faMoon],
}
