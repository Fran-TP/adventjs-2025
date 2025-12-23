import { describe, expect, it } from 'bun:test'
import minStepsToDeliver from './gift-route'

describe('gift route', () => {
	it('should return a number', () => {
		const actual = minStepsToDeliver([
			['S', '.', 'G'],
			['.', '#', '.'],
			['G', '.', '.']
		])

		expect(actual).toBeNumber()
	})

	it('should return 4 for a 3x3 map with obstacles', () => {
		const actual = minStepsToDeliver([
			['S', '.', 'G'],
			['.', '#', '.'],
			['G', '.', '.']
		])
		const expected = 4

		expect(actual).toBe(expected)
	})

	it('should return -1 for 3x3 map with unreachable Gs', () => {
		const actual = minStepsToDeliver([
			['S', '#', 'G'],
			['#', '#', '.'],
			['G', '.', '.']
		])
		const expected = -1

		expect(actual).toBe(expected)
	})

	it('should return 4 for a map with S in another position that (0, 0)', () => {
		const actual = minStepsToDeliver([
			['.', 'S', '.'],
			['#', '#', '.'],
			['G', 'G', '.']
		])
		const expected = 9

		expect(actual).toBe(expected)
	})
})
