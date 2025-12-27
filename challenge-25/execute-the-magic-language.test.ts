import { describe, expect, it } from 'bun:test'
import execute from './execute-the-magic-language'

describe('execute the magic language', () => {
	it('should return a number', () => {
		const actual = execute('+++')

		expect(actual).toBeNumber()
	})

	it('should return 3 with a plus instruction', () => {
		const actual = execute('+++')

		expect(actual).toBe(3)
	})

	it('should return 0 with a loop instruction', () => {
		const actual = execute('>+++[-]')

		expect(actual).toBe(0)
	})
})
