import assert from 'node:assert'
import { describe, it } from 'node:test'
import decodeSantaPin from './decipher-the-santa-pin'

describe('Decipher the Santa Pin', () => {
	it("return type should 'string'", () => {
		const expected = 'string'
		const actual = typeof decodeSantaPin('[1++][2-][3+][<]')
		assert.strictEqual(
			actual,
			expected,
			`Expected type to be '${expected}' but got '${actual}'`
		)
	})

	it('should return the correct deciphered pin', () => {
		const expected = '3144'
		const actual = decodeSantaPin('[1++][2-][3+][<]')
		assert.strictEqual(actual, expected)
	})

	it("should return 'null' for incorrect encode pin", () => {
		const expected = null
		const actual = decodeSantaPin('[1++][2-][3+]')

		assert.strictEqual(actual, expected)
	})

	it('should handle multiple increments and decrements', () => {
		const expected = '0222'
		const actual = decodeSantaPin('[2--][0++][0++][1+]')
		assert.strictEqual(actual, expected)
	})

	it('should handle wrap-around from 9 to 0 and vice versa', () => {
		const expected = '9099'
		const actual = decodeSantaPin('[0-][9+][0-][8+]')
		assert.strictEqual(actual, expected)
	})

	it('should return an empty string for all backspaces', () => {
		const expected = '2333'
		const actual = decodeSantaPin('[1+][2+][<][<]')
		assert.strictEqual(actual, expected)
	})
})
