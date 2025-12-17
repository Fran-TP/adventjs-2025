import { describe, expect, it } from 'bun:test'
import packGifts from './packing-gifts-for-santa'

describe('packing gifts for santa', () => {
	describe('with a valid weight of gifts', () => {
		it('should return a number', () => {
			const actual = packGifts([2, 3, 4, 1], 5)

			expect(actual).toBeNumber()
		})

		it('should correctly return the min number of sleighs', () => {
			const expected = 3
			const actual = packGifts([3, 3, 2, 1], 3)

			expect(actual).toBe(expected)
		})
	})

	describe('with a invalid weight of gifts', () => {
		it('should return a null', () => {
			const actual = packGifts([5, 6, 1], 5)

			expect(actual).toBeNull()
		})

		it('should return 0', () => {
			const actual = packGifts([], 10)

			expect(actual).toBe(0)
		})
	})
})
