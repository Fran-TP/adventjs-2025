export default function manufactureGifts(
	giftsToProduce: Array<{ toy: string; quantity: number }>
) {
	const result = giftsToProduce
		.filter(({ quantity }) => quantity > 0)
		.flatMap(({ toy, quantity }) => Array(quantity).fill(toy))

	return result
}
