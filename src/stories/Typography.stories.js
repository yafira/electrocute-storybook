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

export const Headline3 = Template.bind({})
Headline3.args = {
	label: 'Headline 3',
	variant: 'h3',
}

export const Headline4 = Template.bind({})
Headline4.args = {
	label: 'Headline 4',
	variant: 'h4',
}

export const Headline5 = Template.bind({})
Headline5.args = {
	label: 'Headline 5',
	variant: 'h5',
}

export const Headline6 = Template.bind({})
Headline6.args = {
	label: 'Headline 6',
	variant: 'h6',
}

export const Body1 = Template.bind({})
Body1.args = {
	label: 'Body 1',
	variant: 'body1',
}

export const Body2 = Template.bind({})
Body2.args = {
	label: 'Body 2',
	variant: 'body2',
}

export const Body3 = Template.bind({})
Body3.args = {
	label: 'Body 3',
	variant: 'body3',
}

export const Body4 = Template.bind({})
Body4.args = {
	label: 'Body 4',
	variant: 'body4',
}

export const Body5 = Template.bind({})
Body5.args = {
	label: 'Body 5',
	variant: 'body5',
}
