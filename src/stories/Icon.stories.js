import React from 'react'
import Icon from '../components/Icon'

// defines the meta information for the story
export default {
	title: 'Components/Icon',
	component: Icon,
}

// template for the story
const Template = (args) => <Icon {...args} />

// individual stories
export const Default = Template.bind({})
Default.args = {
	iconSize: '1x', // Default icon size for this story
}
