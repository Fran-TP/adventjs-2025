type Gifts = number[]
type MaxWeight = number
type Result = number | null

export default function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result {
	let currentWeight = 0
	let sleighs = 1

	for (const gift of gifts) {
		if (gift > maxWeight) return null

		if (currentWeight + gift <= maxWeight) {
			currentWeight += gift
		} else {
			sleighs++
			currentWeight = gift
		}
	}

	return gifts.length ? sleighs : 0
}
