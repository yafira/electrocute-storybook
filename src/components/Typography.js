export default function Typography({ variant, label = 'text' }) {
	let style
	if (variant === 'h1') style = 'text-9xl font-mono font-regular'
	if (variant === 'h2') style = 'text-8xl font-mono font-regular'
	if (variant === 'h3') style = 'text-7xl font-mono font-regular'
	if (variant === 'h4') style = 'text-6xl font-mono font-regular'
	if (variant === 'h5') style = 'text-5xl font-mono font-regular'
	if (variant === 'h6') style = 'text-4xl font-mono font-regular'
	if (variant === 'body1') style = 'text-3xl font-mono font-regular'
	if (variant === 'body2') style = 'text-2xl font-mono font-regular'
	if (variant === 'body3') style = 'text-lg font-mono font-regular'
	if (variant === 'body4') style = 'text-base font-mono font-regular'
	if (variant === 'body5') style = 'text-sm font-mono font-regular'
	return <p className={style}>{label}</p>
}
