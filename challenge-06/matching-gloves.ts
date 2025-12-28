type Glove = { hand: 'L' | 'R'; color: string }

export default function matchGloves(gloves: Glove[]): string[] {
	const unpairedCounts = new Map<string, number>()
	const pairedColors: string[] = []

	for (const glove of gloves) {
		const { hand, color } = glove

		const currentColorCount = unpairedCounts.get(color) || 0

		if (hand === 'L') {
			if (currentColorCount > 0) {
				pairedColors.push(color)
				unpairedCounts.set(color, currentColorCount - 1)
			} else {
				unpairedCounts.set(color, currentColorCount - 1)
			}
		} else {
			if (currentColorCount < 0) {
				pairedColors.push(color)
				unpairedCounts.set(color, currentColorCount + 1)
			} else {
				unpairedCounts.set(color, currentColorCount + 1)
			}
		}
	}

	return pairedColors
}
