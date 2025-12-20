import { describe, expect, it } from 'bun:test'
import hasFourInARow from './lights-in-line-with-diagonals'

describe('lights in line with diagonals', () => {
	it('should return a boolean', () => {
		const actual = hasFourInARow([
			['.', '.', '.', 'G'],
			['.', '.', 'G', '.'],
			['.', 'G', '.', '.'],
			['G', '.', '.', '.']
		])

		expect(actual).toBeBoolean()
	})

	it('should correctly return if has four lights vertically', () => {
		const actual = hasFourInARow([
			['.', 'G', '.', '.'],
			['.', 'G', '.', '.'],
			['.', 'G', '.', '.'],
			['.', 'G', '.', '.']
		])

		expect(actual).toBeTrue()
	})

	it('should return true if has four lights horizontally', () => {
		const actual = hasFourInARow([
			['.', '.', '.', '.', '.'],
			['R', 'R', 'R', 'R', '.'],
			['G', 'G', '.', '.', '.']
		])

		expect(actual).toBeTrue()
	})

	describe('with diagonals', () => {
		it('should return true if has four lights on the main diagonal', () => {
			const actual = hasFourInARow([
				['R', '.', '.', '.'],
				['.', 'R', '.', '.'],
				['.', '.', 'R', '.'],
				['.', '.', '.', 'R']
			])

			expect(actual).toBeTrue()
		})

		it('should return true if has four lights on the secondary diagonal', () => {
			const actual = hasFourInARow([
				['.', '.', '.', 'G'],
				['.', 'R', 'G', '.'],
				['.', 'G', 'R', '.'],
				['G', '.', '.', 'R']
			])

			expect(actual).toBeTrue()
		})

		it('should return true if has four lights on any diagonals', () => {
			const actual = hasFourInARow([
				['.', 'G', '.', 'G', '.'],
				['.', 'R', 'G', '.', '.'],
				['.', 'G', 'R', 'G', '.'],
				['.', '.', '.', 'R', 'G'],
				['.', '.', '.', 'R', '.']
			])

			expect(actual).toBeTrue()
		})
	})

	it('should return false if there are no 4 consecutive lights of same color', () => {
		const actual = hasFourInARow([
			['R', 'G', 'R'],
			['G', 'R', 'G'],
			['G', 'R', 'G']
		])

		expect(actual).toBeFalse()
	})
})
