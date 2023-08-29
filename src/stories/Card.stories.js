import Typography from '../components/Typography'
import Card from '../components/Card'

export default {
	title: 'Components/Card',
	component: Card,
	argTypes: {
		backgroundColor: {
			control: 'select',
			options: [
				'#E3DFFF',
				'#F0F2FA',
				'#ECF3FE',
				'#F7E0FF',
				'#FFF3F8',
				'#FAE7EF',
				'#F9E5F3',
				'#F7E0FF',
				'#F9FAC5',
				'#FDFAE4',
				'#FFFFF9',
				'#F3FAEA',
			],
		},
		borderColor: {
			control: 'select',
			options: [
				'#D8F0BA',
				'#FECFE2',
				'#FCF6A4',
				'#C6FFFC',
				'#C8C0FF',
				'#EBB2FF',
			],
		},
	},
}

const Template = (args) => <Card {...args} />

export const Small = Template.bind({})
Small.args = {
	backgroundColor: '#E3DFFF',
	borderColor: '#C8C0FF',
	children: (
		<>
			<Typography
				style={{
					color: '#000000',
					padding: '20px',
				}}
			>
				Card
			</Typography>
			<Typography variant='body2' component='div'>
				Some usage of card information.
			</Typography>
		</>
	),
}
