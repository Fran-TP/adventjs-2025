export default function minStepsToDeliver(map: string[][]): number {
	const rows = map.length
	const cols = map[0].length

	const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
	const isValidCell = (
		x: number,
		y: number,
		rowLength: number,
		colLength: number
	) => x >= 0 && x < colLength && y >= 0 && y < rowLength
	const DIRECTIONS = [
		[0, -1],
		[0, 1],
		[1, 0],
		[-1, 0]
	]

	let startX: number | null = null
	let startY: number | null = null

	for (let y = 0; y < rows; y++) {
		for (let x = 0; x < cols; x++) {
			if (map[y][x] === 'S') {
				startX = x
				startY = y
			}
		}
	}
	const src = [startX, startY, 0]
	const [x, y, d] = src
	const queue = [src]
	let result = 0

	visited[y][x] = true

	while (queue.length) {
		const [x, y, d] = queue.shift()
		const cell = map[y][x]

		if (cell === 'G') {
			result += d
		}

		for (const [dx, dy] of DIRECTIONS) {
			const nx = x + dx
			const ny = y + dy

			if (
				isValidCell(nx, ny, rows, cols) &&
				!visited[ny][nx] &&
				map[ny][nx] !== '#'
			) {
				visited[ny][nx] = true
				queue.push([nx, ny, d + 1])
			}
		}
	}

	return result || -1
}

console.log(
	minStepsToDeliver([
		['S', '.', 'G'],
		['.', '#', '.'],
		['G', '.', '.']
	])
)
// Result: 4

console.log(
	minStepsToDeliver([
		['S', '#', 'G'],
		['#', '#', '.'],
		['G', '.', '.']
	])
)
// Result: -1

console.log(minStepsToDeliver([['S', 'G']]))
// Result: 1
const mat = [
	[1, 1, 1, 1],
	[1, 1, 0, 1],
	[1, 1, 1, 1],
	[1, 1, 0, 0],
	[1, 0, 0, 1]
]
