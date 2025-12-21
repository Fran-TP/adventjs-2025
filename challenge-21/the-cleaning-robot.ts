export default function clearGifts(
	warehouse: string[][],
	drops: number[]
): string[][] {
	const newRow: string[] = Array(warehouse[0]?.length).fill('.')
	for (const col of drops) {
		for (let y = warehouse.length - 1; y >= 0; y--) {
			const cell = warehouse[y]![col]!
			if (cell === '.') {
				warehouse[y]![col] = '#'

				const isFullRow = !warehouse[y]?.includes('.')
				if (isFullRow) {
					warehouse.pop()
					warehouse.unshift(newRow)
				}

				break
			}
		}
	}

	return warehouse
}
