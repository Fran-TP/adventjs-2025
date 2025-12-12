export default function findUnsafeGifts(warehouse: string[]): number {
	const DIRECTIONS = {
		UP: { x: 0, y: -1 },
		DOWN: { x: 0, y: 1 },
		LEFT: { x: -1, y: 0 },
		RIGHT: { x: 1, y: 0 }
	}
	let countUnsafeGifts = 0

	for (let y = 0; y < warehouse.length; y++) {
		for (let x = 0; x < warehouse[y]?.length; x++) {
			const item = warehouse[y]?.[x]
			if (item === '*') {
				const { UP, DOWN, LEFT, RIGHT } = DIRECTIONS
				const isSurveillance = [
					warehouse[y + UP.y]?.[x + UP.x],
					warehouse[y + DOWN.y]?.[x + DOWN.x],
					warehouse[y + LEFT.y]?.[x + LEFT.x],
					warehouse[y + RIGHT.y]?.[x + RIGHT.x]
				].includes('#')

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
