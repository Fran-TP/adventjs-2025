import { describe, expect, it } from 'bun:test'
import filterGifts from './filter-defective-gifts'

describe('filter defective gifts', () => {
	it('type expected array', () => {
		const actual = filterGifts(['book', 'game', '#puzzle', 'puzzle#', 'puzzle'])

		expect(actual).toBeArray()
	})

	it('should return a empty array', () => {
		const actual = filterGifts([])

		expect(actual).toBeEmpty()
	})

	it("should return '['car', 'ball']'", () => {
		const expected = ['car', 'ball']
		const actual = filterGifts(['car', 'doll#arm', 'ball', '#train'])

		expect(actual).toEqual(expected)
	})

	it("should return '['car', 'ball']", () => {
		const expected = ['car', 'ball']
		const actual = filterGifts(['#bad', 'car', '#oops', 'ball'])

		expect(actual).toEqual(expected)
	})
})
