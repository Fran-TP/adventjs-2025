export default function hasFourInARow(board: string[][]): boolean {
	const hasFourFrom = ({
		board,
		row,
		col,
		dx,
		dy
	}: {
		board: string[][]
		row: number
		col: number
		dx: number
		dy: number
	}) => {
		const cell = board[row][col]

		if (cell === '.') return false

		for (let i = 1; i < 4; i++) {
			const r = row + dy * i
			const c = col + dx * i

			if (
				r < 0 ||
				r >= board.length ||
				c < 0 ||
				c >= board[0].length ||
				cell !== board[r][c]
			) {
				return false
			}
		}

		return true
	}

	const rows = board.length
	const cols = board[0].length
	const DIRECTIONS: Array<[number, number]> = [
		[1, 0],
		[0, 1],
		[1, 1],
		[-1, 1]
	]

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			for (const [dx, dy] of DIRECTIONS) {
				if (hasFourFrom({ board, row: r, col: c, dx, dy })) return true
			}
		}
	}

	return false
}
