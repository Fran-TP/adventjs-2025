export default function filterGifts(gifts: string[]) {
	return gifts.filter(gift => !gift.includes('#'))
}
