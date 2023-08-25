import Button from '../components/Button'

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		backgroundColor: {
			control: 'select',
			options: [
				'#BAAEFF',
				'#E3DFFF',
				'#C2CDE7',
				'#F0F2FA',
				'#ECF3FE',
				'#F7E0FF',
				'#FAE7EF',
				'#F9E5F3',
				'#F7E0FF',
				'#F9FAC5',
				'#FDFAE4',
				'#FFFFF9',
				'#BBFFDD',
				'#EDFDDA',
				'#EAF9D2',
			],
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
