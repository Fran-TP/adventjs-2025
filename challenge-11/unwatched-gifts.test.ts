import { describe, expect, it } from 'bun:test'
import findUnsafeGifts from './unwatched-gifts'

describe('unwatched gifts', () => {
	it('return type should be number', () => {
		const expected = 'number'
		const actual = findUnsafeGifts(['.*.', '*#*', '.*.'])

		expect(typeof actual).toBe(expected)
	})

	it('should return the correct number of unwatched gifts', () => {
		const expected = 0
		const actual = findUnsafeGifts(['.*.', '*#*', '.*.'])

		expect(actual).toBe(expected)
	})

	it('should return the correct number of unwatched gifts', () => {
		const expected = 4
		const actual = findUnsafeGifts([
			'.....',
			'.*.*.',
			'..#..',
			'.*.*.',
			'.....'
		])

		expect(actual).toBe(expected)
	})
})
