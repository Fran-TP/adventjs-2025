export default function wrapGifts(size: number, symbol: string) {
	if (size < 2) return ''

	const ends = symbol.repeat(size)
	const middle = Array.from(
		{ length: size - 2 },
		() => `${symbol}${' '.repeat(size - 2)}${symbol}`
	)

	return [ends, ...middle, ends].join('\n')
}
