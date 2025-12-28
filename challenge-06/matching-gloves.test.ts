import { describe, expect, it } from 'bun:test'
import matchGloves from './matching-gloves'

describe('matching gloves', () => {
	it('should return a array of string', () => {
		const actual = matchGloves([
			{ hand: 'L', color: 'red' },
			{ hand: 'R', color: 'red' },
			{ hand: 'R', color: 'green' },
			{ hand: 'L', color: 'blue' },
			{ hand: 'L', color: 'green' }
		])

		expect(actual).toBeArray()
	})

	it('should return a list with the colors red and green', () => {
		const actual = matchGloves([
			{ hand: 'L', color: 'red' },
			{ hand: 'R', color: 'red' },
			{ hand: 'R', color: 'green' },
			{ hand: 'L', color: 'blue' },
			{ hand: 'L', color: 'green' }
		])
		const expected = ['red', 'green']

		expect(actual).toEqual(expected)
	})

	it('should return a list with the color gold twice', () => {
		const actual = matchGloves([
			{ hand: 'L', color: 'gold' },
			{ hand: 'R', color: 'gold' },
			{ hand: 'L', color: 'gold' },
			{ hand: 'L', color: 'gold' },
			{ hand: 'R', color: 'gold' }
		])
		const expected = ['gold', 'gold']

		expect(actual).toEqual(expected)
	})

	it('should return a empty list', () => {
		const actual = matchGloves([
			{ hand: 'L', color: 'red' },
			{ hand: 'R', color: 'green' },
			{ hand: 'L', color: 'blue' }
		])

		expect(actual).toBeEmpty()
	})
})
