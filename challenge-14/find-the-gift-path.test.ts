import { describe, expect, it } from 'bun:test'
import findGiftPath from './find-the-gift-path'

const WORKSHOP = {
	storage: {
		shelf: {
			box1: 'train',
			box2: 'switch'
		},
		box: 'car'
	},
	gift: 'doll'
}

describe('find the gift path', () => {
	it('return type should be array of string', () => {
		const expected = true
		const actual = findGiftPath(WORKSHOP, 'train').every(
			item => typeof item === 'string'
		)

		expect(actual).toBe(expected)
	})

	it("should return the correct path when the search gift is 'train'", () => {
		const expected = ['storage', 'shelf', 'box1']
		const actual = findGiftPath(WORKSHOP, 'train')

		expect(actual).toEqual(expected)
	})

	it("should return the correct path for the search gift is 'car'", () => {
		const expected = ['storage', 'box']
		const actual = findGiftPath(WORKSHOP, 'car')

		expect(actual).toEqual(expected)
	})

	it("should return a empty array when the search gift is not found in the 'workshop'", () => {
		const actual = findGiftPath(WORKSHOP, 'plane')

		expect(actual).toBeEmpty()
	})
})
