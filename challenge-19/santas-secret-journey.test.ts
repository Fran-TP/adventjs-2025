import { describe, expect, it } from 'bun:test'
import revealSantaRoute from './santas-secret-journey'

describe("santa's secret journey", () => {
	it('should return an array of strings', () => {
		const actual = revealSantaRoute([
			['USA', 'BRA'],
			['JPN', 'PHL'],
			['BRA', 'UAE'],
			['UAE', 'JPN'],
			['CMX', 'HKN']
		])

		expect(actual).toBeArray()
	})

	it("should return the correct santa's route", () => {
		const expected = ['MEX', 'CAN', 'UK', 'GER']
		const actual = revealSantaRoute([
			['MEX', 'CAN'],
			['UK', 'GER'],
			['CAN', 'UK']
		])

		expect(actual).toEqual(expected)
	})

	it('should return the correct route', () => {
		const expected = ['USA', 'BRA', 'UAE', 'JPN', 'PHL']
		const actual = revealSantaRoute([
			['USA', 'BRA'],
			['JPN', 'PHL'],
			['BRA', 'UAE'],
			['UAE', 'JPN'],
			['CMX', 'HKN']
		])

		expect(actual).toEqual(expected)
	})
})
