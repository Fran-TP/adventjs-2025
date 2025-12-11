type Board = string
type Moves = string
type Result = 'fail' | 'crash' | 'success'

export default function moveReno(board: Board, moves: Moves): Result {
	const boardToArr = board.trim().split(/\n/)
	const movesMap: Record<string, { x: number; y: number }> = {
		U: { x: 0, y: -1 },
		D: { x: 0, y: 1 },
		R: { x: 1, y: 0 },
		L: { x: -1, y: 0 }
	}

	let robotPosition: { x: number; y: number } | null = null

	for (let y = 0; y < boardToArr.length; y++) {
		const row = boardToArr[y]
		const x = row!.indexOf('@')

		if (x !== -1) {
			robotPosition = { x, y }
			break
		}
	}

	if (robotPosition === null) return 'fail'

	for (const move of moves) {
		const { x, y } = movesMap[move]!
		const { x: currX, y: currY } = robotPosition

		const nextMoveX = x + currX
		const nextMoveY = y + currY
		const nextMove = boardToArr[nextMoveY]?.[nextMoveX]

		if (!nextMove || nextMove === '#') {
			return 'crash'
		}

		if (nextMove === '*') {
			return 'success'
		}

		robotPosition.x = nextMoveX
	}

	return 'fail'
}
