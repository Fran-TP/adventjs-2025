import assert from 'node:assert'
import { describe, it } from 'node:test'
import manufactureGifts from './manufactore-the-toys'

describe('manufactore the toys', () => {
	it('type expected array', () => {
		const expected = true
		const actual = Array.isArray(
			manufactureGifts([
				{ toy: 'car', quantity: 2 },
				{ toy: 'ball', quantity: 3 }
			])
		)

		assert.strictEqual(actual, expected)
	})

	it("should return '[]'", () => {
		const expected: string[] = []
		const actual = manufactureGifts([])

		assert.deepStrictEqual(actual, expected)
	})

	it("should return '['car', 'car', 'car', 'doll', 'ball', 'ball']", () => {
		const expected = ['car', 'car', 'car', 'doll', 'ball', 'ball']
		const actual = manufactureGifts([
			{ toy: 'car', quantity: 3 },
			{ toy: 'doll', quantity: 1 },
			{ toy: 'ball', quantity: 2 }
		])

		assert.deepStrictEqual(actual, expected)
	})
})
