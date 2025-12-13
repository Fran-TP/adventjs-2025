type Factory = string[]
type Result = 'completed' | 'broken' | 'loop'

export default function runFactory(factory: Factory): Result {
	const MOVEMENTS: Record<string, { x: number; y: number }> = {
		'>': { x: 1, y: 0 },
		'<': { x: -1, y: 0 },
		'^': { x: 0, y: -1 },
		v: { x: 0, y: 1 }
	}

	const visited = new Set<string>()
	const CURRENT_POSITION = { x: 0, y: 0 }

	while (true) {
		const { x, y } = CURRENT_POSITION

		const cell = factory[y]?.[x]
		if (!cell) {
			return 'broken'
		}

		if (cell === '.') {
			return 'completed'
		}

		const key = `${x},${y}`
		if (visited.has(key)) {
			return 'loop'
		}

		visited.add(key)

		const movement = MOVEMENTS[cell]
		CURRENT_POSITION.x += movement.x
		CURRENT_POSITION.y += movement.y
	}
}

console.log(runFactory(['>>.'])) // 'completed'
console.log(runFactory(['>>>'])) // 'broken'
console.log(runFactory(['>><'])) // 'loop'
console.log(runFactory(['>>v', '..<'])) // 'completed'
console.log(runFactory(['>>v', '<<<'])) // 'broken'
console.log(runFactory(['>v.', '^..'])) // 'completed'
console.log(runFactory(['v.', '^.'])) // 'loop'
