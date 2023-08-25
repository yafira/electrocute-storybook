import Button from '../components/Button'

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		backgroundColor: {
			control: 'select',
			options: ['#E3DFFF', '#FAE7EF', '#F9FAC5', '#EDFDDA'],
		},
		handleClick: { action: 'handleClick' },
	},
}

const Template = (args) => <Button {...args} />

export const Small = Template.bind({})
Small.args = {
	label: 'Click Me',
	size: 'sm',
}

export const Large = Template.bind({})
Large.args = {
	label: 'Click Me',
	size: 'lg',
}
