export default function hasFourInARow(board: string[][]): boolean {
	if (!board.length) return false

	const rows = board.length
	const cols = board[0]!.length

	for (let row = 0; row < rows; row++) {
		let prev: string | null = null
		let count = 0

		for (let col = 0; col < cols; col++) {
			const cell = board[row]![col]!

			if (cell === '.' || cell !== prev) {
				count = cell === '.' ? 0 : 1
			} else {
				count++
			}

			prev = cell

			if (count === 4) return true
		}
	}

	for (let col = 0; col < cols; col++) {
		let prev: string | null = null
		let count = 0

		for (let row = 0; row < rows; row++) {
			const cell = board[row]![col]!

			if (cell === '.' || cell !== prev) {
				count = cell === '.' ? 0 : 1
			} else {
				count++
			}

			prev = cell

			if (count === 4) return true
		}
	}

	let countA = 0
	let prevA: string | null = null

	let countB = 0
	let prevB: string | null = null

	for (let i = 0; i < rows; i++) {
		const cellA = board[i]![i]!
		const cellB = board[i]![cols - 1 - i]!

		if (cellA === '.' || cellA !== prevA) {
			countA = cellA === '.' ? 0 : 1
		} else {
			countA++
		}
		if (cellB === '.' || cellB !== prevB) {
			countB = cellB === '.' ? 0 : 1
		} else {
			countB++
		}
		prevB = cellB
		prevA = cellA

		if (countA === 4 || countB === 4) return true
	}

	return false
}

console.log(
	hasFourInARow([
		['R', '.', '.', '.'],
		['.', 'R', '.', '.'],
		['.', '.', 'R', '.'],
		['.', '.', '.', 'R']
	])
)

console.log(
	hasFourInARow([
		['.', '.', '.', 'G'],
		['.', '.', 'G', '.'],
		['.', 'G', '.', '.'],
		['G', '.', '.', '.']
	])
)
