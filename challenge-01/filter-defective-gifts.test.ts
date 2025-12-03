import assert from 'node:assert'
import { describe, it } from 'node:test'
import filterGifts from './filter-defective-gifts'

describe('filter defective gifts', () => {
	it('type expected array', () => {
		const expected = true
		const actual = Array.isArray(
			filterGifts(['book', 'game', '#puzzle', 'puzzle#', 'puzzle'])
		)

		assert.strictEqual(actual, expected)
	})

	it("should return '[]'", () => {
		const expected: string[] = []
		const actual = filterGifts([])

		assert.deepStrictEqual(actual, expected)
	})

	it("should return '['car', 'ball']'", () => {
		const expected = ['car', 'ball']
		const actual = filterGifts(['car', 'doll#arm', 'ball', '#train'])

		assert.deepStrictEqual(actual, expected)
	})

	it("should return '['car', 'ball']", () => {
		const expected = ['car', 'ball']
		const actual = filterGifts(['#bad', 'car', '#oops', 'ball'])

		assert.deepStrictEqual(actual, expected)
	})
})
