import { describe, expect, it } from 'bun:test'
import clearGifts from './the-cleaning-robot'

describe('the cleaning robot', () => {
	it('should return a matrix(array of array)', () => {
		const actual = clearGifts(
			[
				['.', '.', '#'],
				['#', '.', '#'],
				['#', '.', '#']
			],
			[0, 1, 2]
		)

		expect(actual).toBeArray()

		actual.forEach(row => {
			expect(row).toBeArray()

			row.forEach(item => {
				expect(item).toBeString()
			})
		})
	})

	it('should remove the las row if is full', () => {
		const actual = clearGifts(
			[
				['.', '.', '.'],
				['.', '.', '.'],
				['#', '.', '#']
			],
			[1]
		)

		const expected = [
			['.', '.', '.'],
			['.', '.', '.'],
			['.', '.', '.']
		]

		expect(actual).toEqual(expected)
	})
})
