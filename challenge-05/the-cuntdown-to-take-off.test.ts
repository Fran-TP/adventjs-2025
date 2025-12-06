import assert from 'node:assert'
import { describe, it } from 'node:test'
import timeUntilTakeOff from './the-cuntdown-to-take-off'

describe('The countdown to take off', () => {
	it("return type should 'number'", () => {
		const expected = 'number'
		const actual = typeof timeUntilTakeOff(
			'2025*12*24@15|30|00 NP',
			'2025*12*24@15|45|00 NP'
		)

		assert.strictEqual(
			actual,
			expected,
			`Expected type to be '${expected}' but got '${actual}'`
		)
	})

	it('should return 30 seconds until take off', () => {
		const expected = 30
		const actual = timeUntilTakeOff(
			'2025*12*24@23|59|30 NP',
			'2025*12*25@00|00|00 NP'
		)

		assert.strictEqual(actual, expected)
	})

	it('should return 0 seconds for simultaneous times', () => {
		const expected = 0
		const actual = timeUntilTakeOff(
			'2025*12*25@00|00|00 NP',
			'2025*12*25@00|00|00 NP'
		)

		assert.strictEqual(actual, expected)
	})

	it('should return negative seconds for take off already passed', () => {
		const expected = -60
		const actual = timeUntilTakeOff(
			'2025*12*25@00|01|00 NP',
			'2025*12*25@00|00|00 NP'
		)

		assert.strictEqual(actual, expected)
	})
})
