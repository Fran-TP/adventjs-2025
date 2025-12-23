export default function minStepsToDeliver(map: string[][]): number {
	const rows = map.length
	const cols = map[0].length

	const DIRECTIONS = [
		[0, -1],
		[0, 1],
		[1, 0],
		[-1, 0]
	]

	let startX: number | null = null
	let startY: number | null = null

	for (const [y, row] of map.entries()) {
		const x = row.indexOf('S')
		if (x !== -1) {
			startX = x
			startY = y

			break
		}
	}

	const distances = Array.from({ length: rows }, () => Array(cols).fill(-1))
	const src = [startX, startY]
	const [x, y] = src
	const queue = [src]

	distances[y][x] = 0

	while (queue.length) {
		const [x, y] = queue.shift()

		for (const [dx, dy] of DIRECTIONS) {
			const nx = x + dx
			const ny = y + dy

			if (
				nx >= 0 &&
				nx < cols &&
				ny >= 0 &&
				ny < rows &&
				map[ny][nx] !== '#' &&
				distances[ny][nx] === -1
			) {
				distances[ny][nx] = distances[y][x] + 1
				queue.push([nx, ny])
			}
		}
	}

	let total = 0

	for (let y = 0; y < rows; y++) {
		for (let x = 0; x < cols; x++) {
			const cell = map[y][x]
			if (cell === 'G') {
				if (distances[y][x] === -1) return -1

				total += distances[y][x]
			}
		}
	}

	return total
}
