import Typography from '../components/Typography'

export default {
	title: 'Components/Typography',
	component: Typography,
	argTypes: {},
}

const Template = (args) => <Typography {...args} />

export const Headline1 = Template.bind({})
Headline1.args = {
	label: 'Headline 1',
	variant: 'h1',
}

export const Headline2 = Template.bind({})
Headline2.args = {
	label: 'Headline 2',
	variant: 'h2',
}

export const Body = Template.bind({})
Body.args = {
	label: 'body',
}
