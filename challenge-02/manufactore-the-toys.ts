export default function manufactureGifts(
	giftsToProduce: Array<{ toy: string; quantity: number }>
) {
	const result: string[] = []

	for (const { toy, quantity } of giftsToProduce) {
		if (quantity > 0) {
			const totalToys = Array(quantity).fill(toy)

			result.push(...totalToys)
		}
	}

	return result
}
