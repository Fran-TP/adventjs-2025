import assert from 'node:assert'
import { describe, it } from 'node:test'
import wrapGifts from './help-the-intern'

describe('help the intern', () => {
	it("return type should be 'string'", () => {
		const expected = 'string'
		const actual = typeof wrapGifts(3, '*')

		assert.strictEqual(
			actual,
			expected,
			`Expected type to be '${expected}' but got '${actual}'`
		)
	})

	it("should return an empty string for a 'size' of 1", () => {
		const expected = ''
		const actual = wrapGifts(1, '+')

		assert.strictEqual(actual, expected)
	})

	it("should successfully wrap the gift for size 3 and the '#' symbol", () => {
		const expected = `###\n# #\n###`
		const actual = wrapGifts(3, '#')

		assert.strictEqual(actual, expected)
	})

	it("should successfully wrap the gift for size 5 and the '*' symbol", () => {
		const expected = `*****\n*   *\n*   *\n*   *\n*****`
		const actual = wrapGifts(5, '*')

		assert.strictEqual(actual, expected)
	})
})
