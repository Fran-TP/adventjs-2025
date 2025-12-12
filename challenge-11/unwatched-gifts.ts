export default function findUnsafeGifts(warehouse: string[]): number {
	const DIRECTIONS = {
		UP: { x: 0, y: -1 },
		DOWN: { x: 0, y: 1 },
		LEFT: { x: -1, y: 0 },
		RIGHT: { x: 1, y: 0 }
	}
	let countUnsafeGifts = 0

	for (const [row, value] of warehouse.entries()) {
		for (const [col, item] of [...value].entries()) {
			if (item === '*') {
				const { UP, DOWN, LEFT, RIGHT } = DIRECTIONS
				const isSurveillance = [
					warehouse[row + UP.y]?.[col + UP.x],
					warehouse[row + DOWN.y]?.[col + DOWN.x],
					warehouse[row + LEFT.y]?.[col + LEFT.x],
					warehouse[row + RIGHT.y]?.[col + RIGHT.x]
				].some(v => v === '#')

				if (!isSurveillance) {
					countUnsafeGifts++
				}
			}
		}
	}

	return countUnsafeGifts
}

console.log(findUnsafeGifts(['.*.', '*#*', '.*.'])) // 0
console.log(findUnsafeGifts(['...', '.*.', '...'])) // 1
console.log(findUnsafeGifts(['*.*', '...', '*#*'])) // 2
console.log(findUnsafeGifts(['.....', '.*.*.', '..#..', '.*.*.', '.....'])) // 4
