export default function drawTree(
	height: number,
	ornament: string,
	frequency: number
) {
	const width = height * 2 - 1 // maximum width of the tree (always odd)
	let position = 0
	let tree = ''

	for (let i = 1; i <= height; i++) {
		const rowLength = 2 * i - 1 // number of characters in the row (always odd)
		const pad = ' '.repeat((width - rowLength) / 2) // padding on each side
		let row = ''

		for (let j = 1; j <= rowLength; j++) {
			const isOrnament = (j + position) % frequency === 0
			const char = isOrnament ? ornament : '*'

			row += char
		}
		position += rowLength

		tree += `${pad}${row}${pad}\n`
	}

	return tree
}

console.log(drawTree(5, 'o', 2))
console.log(drawTree(3, '@', 3))
console.log(drawTree(4, '+', 1))
console.log(drawTree(1, '#', 4))
