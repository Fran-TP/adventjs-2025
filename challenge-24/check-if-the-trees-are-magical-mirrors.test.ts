import { describe, expect, it } from 'bun:test'
import isTreesSynchronized from './check-if-the-trees-are-magical-mirrors'

const tree1 = {
	value: '🎄',
	left: { value: '⭐' },
	right: { value: '🎅' }
}

const tree2 = {
	value: '🎄',
	left: { value: '🎅' },
	right: { value: '⭐' }
}

const tree3 = {
	value: '🎄',
	left: { value: '🎅' },
	right: { value: '🎁' }
}

describe('check if the trees are magical mirror', () => {
	it('should return a tuple [boolean, string]', () => {
		const [b, s] = isTreesSynchronized(tree1, tree2)

		expect(b).toBeBoolean()
		expect(s).toBeString()
	})

	it("should return [false, '🎄'] if the trees are not mirrors", () => {
		const actual = isTreesSynchronized(tree1, tree3)
		const expected = [false, '🎄'] as [boolean, string]

		expect(actual).toEqual(expected)
	})

	it("should return [true, '🎄'] if the trees are mirrors", () => {
		const actual = isTreesSynchronized(tree1, tree2)
		const expected = [true, '🎄'] as [boolean, string]

		expect(actual).toEqual(expected)
	})
})
