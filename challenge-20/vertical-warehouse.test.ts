import { describe, expect, it } from 'bun:test'
import dropGifts from './vertical-warehouse'

describe('vertical warehouse', () => {
	it('should return a matrix of strings', () => {
		const actual = dropGifts(
			[
				['.', '.', '.'],
				['.', '#', '.'],
				['#', '#', '.']
			],
			[0, 2]
		)

		expect(actual).toBeArray()

		actual.forEach(row => {
			expect(row).toBeArray()

			row.forEach(item => {
				expect(item).toBeString()
			})
		})
	})

	it('gifts should be dropped in cols 0 and 2', () => {
		const expected = [
			['.', '.', '.'],
			['#', '#', '.'],
			['#', '#', '#']
		]
		const actual = dropGifts(
			[
				['.', '.', '.'],
				['.', '#', '.'],
				['#', '#', '.']
			],
			[0, 2]
		)

		expect(actual).toEqual(expected)
	})

	it('gifts should be dropped in cols 0, 1 and 2', () => {
		const actual = dropGifts(
			[
				['.', '.', '.'],
				['.', '.', '.'],
				['.', '.', '.']
			],
			[0, 1, 2]
		)

		const expected = [
			['.', '.', '.'],
			['.', '.', '.'],
			['#', '#', '#']
		]

		expect(actual).toEqual(expected)
	})

	it('gifts should not be dropped in full cols', () => {
		const actual = dropGifts(
			[
				['#', '#'],
				['#', '#']
			],
			[0, 0]
		)
		const expected = [
			['#', '#'],
			['#', '#']
		]

		expect(actual).toEqual(expected)
	})
})
