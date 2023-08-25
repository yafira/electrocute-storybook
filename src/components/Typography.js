export default function Typography({ variant, label = 'text' }) {
	let style
	if (variant === 'h1') style = 'text-3xl font-bold'
	if (variant === 'h2') style = 'text-2xl font-bold'
	return <p className={style}>{label}</p>
}
