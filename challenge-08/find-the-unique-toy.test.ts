import { describe, expect, it } from 'bun:test'
import findUniqueToy from './find-the-unique-toy'

describe('find the unique toy', () => {
	it('should return a string', () => {
		const actual = findUniqueToy('sS')

		expect(actual).toBeString()
	})

	it("should return a empty string for repeated letter is in toy's name", () => {
		const actual = findUniqueToy('aabb')

		expect(actual).toBeEmpty()
	})

	describe('with case sensitive', () => {
		it('should return t', () => {
			const actual = findUniqueToy('sotarsof')
			const expected = 't'

			expect(actual).toBe(expected)
		})

		it('should return d', () => {
			const actual = findUniqueToy('drone')
			const expected = 'd'

			expect(actual).toBe(expected)
		})
	})

	describe('with case insensitive', () => {
		it('should return i', () => {
			const actual = findUniqueToy('reindeeR')
			const expected = 'i'

			expect(actual).toBe(expected)
		})

		it('should return r', () => {
			const actual = findUniqueToy('sarstAN')
			const expected = 'r'

			expect(actual).toBe(expected)
		})
	})
})
