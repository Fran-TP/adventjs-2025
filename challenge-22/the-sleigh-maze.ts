export default function canEscape(maze: string[][]): boolean {
	const rows = maze.length
	const cols = maze[0].length

	const src = { x: 0, y: 0 }
	const DIRECTIONS = [
		{ dx: 0, dy: -1 },
		{ dx: 0, dy: 1 },
		{ dx: -1, dy: 0 },
		{ dx: 1, dy: 0 }
	]
	const isValidCell = ({
		x,
		y,
		rowLength,
		colLength
	}: {
		x: number
		y: number
		rowLength: number
		colLength: number
	}) => x >= 0 && x < colLength && y >= 0 && y < rowLength

	const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
	const queue = [src]

	visited[src.y][src.x] = true

	while (queue.length) {
		const { x, y } = queue.shift()
		const cell = maze[y][x]

		if (cell === 'E') return true

		for (const { dx, dy } of DIRECTIONS) {
			const nx = x + dx
			const ny = y + dy

			if (
				isValidCell({ x: nx, y: ny, rowLength: rows, colLength: cols }) &&
				!visited[ny][nx] &&
				maze[ny][nx] !== '#'
			) {
				visited[ny][nx] = true
				queue.push({ x: nx, y: ny })
			}
		}
	}

	return false
}

console.log(
	canEscape([
		['S', '#', '#'],
		['.', '#', '.'],
		['.', '#', 'E']
	])
)
// → false

console.log(canEscape([['S', 'E']]))
// → true

console.log(
	canEscape([
		['S', '.', '.', '.', '.'],
		['#', '#', '#', '#', '.'],
		['.', '.', '.', '.', '.'],
		['.', '#', '#', '#', '#'],
		['.', '.', '.', '.', 'E']
	])
)
// → true

console.log(
	canEscape([
		['S', '.', '.'],
		['.', '.', '.'],
		['#', '#', '#'],
		['.', '.', 'E']
	])
)
// → false
