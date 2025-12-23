import { describe, expect, it } from 'bun:test'
import canEscape from './the-sleigh-maze'

describe('the sleigh maze', () => {
	it('should return a boolean', () => {
		const actual = canEscape([
			['S', '.', '.'],
			['.', '.', '.'],
			['#', '#', '#'],
			['.', '.', 'E']
		])

		expect(actual).toBeBoolean()
	})

	describe('with an exit in the maze', () => {
		it('should return true', () => {
			const actual = canEscape([
				['S', '.', '.', '.', '.'],
				['#', '#', '#', '#', '.'],
				['.', '.', '.', '.', '.'],
				['.', '#', '#', '#', '#'],
				['.', '.', '.', '.', 'E']
			])

			expect(actual).toBeTrue()
		})

		it('should return true', () => {
			const actual = canEscape([['S', 'E']])

			expect(actual).toBeTrue()
		})
	})

	describe('without an exit in the maze', () => {
		it('should return false', () => {
			const actual = canEscape([
				['S', '.', '.'],
				['.', '.', '.'],
				['#', '#', '#'],
				['.', '.', 'E']
			])

			expect(actual).toBeFalse()
		})

		it('should return false', () => {
			const actual = canEscape([
				['S', '#', '#'],
				['.', '#', '.'],
				['.', '#', 'E']
			])

			expect(actual).toBeFalse()
		})
	})
})
