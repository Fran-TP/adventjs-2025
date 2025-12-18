import { describe, expect, it } from 'bun:test'
import hasFourLights from './the-christmas-light-panel'

describe('the christmas light panel', () => {
	it('should return a boolean', () => {
		const actual = hasFourLights([
			['.', 'G', '.', '.'],
			['.', 'G', '.', '.'],
			['.', 'G', '.', '.'],
			['.', 'G', '.', '.']
		])

		expect(actual).toBeBoolean()
	})

	it('should correctly return if has four lights vertically', () => {
		const actual = hasFourLights([
			['.', 'G', '.', '.'],
			['.', 'G', '.', '.'],
			['.', 'G', '.', '.'],
			['.', 'G', '.', '.']
		])

		expect(actual).toBeTrue()
	})

	it('should correctly return if has four lights horizontally', () => {
		const actual = hasFourLights([
			['.', '.', '.', '.', '.'],
			['R', 'R', 'R', 'R', '.'],
			['G', 'G', '.', '.', '.']
		])

		expect(actual).toBeTrue()
	})

	it('should return false if there are not four lights vertically or horizontally', () => {
		const actual = hasFourLights([
			['R', 'G', 'R'],
			['G', 'R', 'G'],
			['G', 'R', 'G']
		])

		expect(actual).toBeFalse()
	})
})
