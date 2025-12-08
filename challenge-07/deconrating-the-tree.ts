export default function drawTree(
	height: number,
	ornament: string,
	frequency: number
) {
	const width = height * 2 - 1
	let position = 0
	let tree = ''
	const trunk = `${' '.repeat((width - 1) / 2)}#`

	for (let i = 1; i <= height; i++) {
		const rowLength = 2 * i - 1
		const pad = ' '.repeat((width - rowLength) / 2)
		let row = ''

		for (let j = 1; j <= rowLength; j++) {
			const isOrnament = (j + position) % frequency === 0
			const char = isOrnament ? ornament : '*'

			row += char
		}
		position += rowLength

		tree += `${pad}${row}${pad}\n`
	}

	return `${tree}${trunk}`
}
