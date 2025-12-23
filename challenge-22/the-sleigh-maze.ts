export default function canEscape(maze: string[][]): boolean {
	const rows = maze.length
	const cols = maze[0].length
	const DIRECTIONS = [
		[0, -1],
		[0, 1],
		[1, 0],
		[-1, 0]
	]
	const isValidCell = (
		x: number,
		y: number,
		rowLength: number,
		colLength: number
	) => x >= 0 && x < colLength && y >= 0 && y < rowLength

	const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
	const src = [0, 0]
	const [x, y] = src
	const queue = [src]

	visited[y][x] = true

	while (queue.length) {
		const [x, y] = queue.shift()
		const cell = maze[y][x]

		if (cell === 'E') return true

		for (const [dx, dy] of DIRECTIONS) {
			const nx = x + dx
			const ny = y + dy

			if (
				isValidCell(nx, ny, rows, cols) &&
				!visited[ny][nx] &&
				maze[ny][nx] !== '#'
			) {
				visited[ny][nx] = true
				queue.push([nx, ny])
			}
		}
	}

	return false
}
