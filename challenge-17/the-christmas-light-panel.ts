export default function hasFourLights(board: string[][]): boolean {
	for (const row of board) {
		let count = 0
		let prev: string | null = null
		for (const cell of row) {
			if (cell === '.' || cell !== prev) {
				count += cell === '.' ? 0 : 1
			} else {
				count++
			}

			prev = cell
		}

		if (count === 4) return true
	}

	for (const col of board[0].keys()) {
		let count = 0
		let prev: string | null = null
		for (const row of board.keys()) {
			const cell = board[row][col]

			if (cell === '.' || cell !== prev) {
				count += cell === '.' ? 0 : 1
			} else {
				count++
			}

			prev = cell
		}

		if (count === 4) return true
	}

	return false
}
