import { describe, expect, it } from 'bun:test'
import drawTable from './drawing-tables'

const DATA = [
	{ name: 'Charlie', city: 'New York' },
	{ name: 'Alice', city: 'London' },
	{ name: 'Bob', city: 'Paris' }
]

describe('drawing tables', () => {
	it('return type should be string', () => {
		const expected = 'string'
		const actual = typeof drawTable(DATA, 'name')

		expect(actual).toBe(expected)
	})

	it('should return the correct table', () => {
		const expected = `+---------+----------+
| A       | B        |
+---------+----------+
| Alice   | London   |
| Bob     | Paris    |
| Charlie | New York |
+---------+----------+`
		const actual = drawTable(DATA, 'name')

		expect(actual).toBe(expected)
	})

	it('should return a table of 3 cols', () => {
		const expected = `+---+---+---+
| A | B | C |
+---+---+---+
| 1 | Z | W |
| 2 | Y | X |
| 3 | A | B |
+---+---+---+`
		const actual = drawTable(
			[
				{ a: 2, b: 'Y', c: 'X' },
				{ a: 1, b: 'Z', c: 'W' },
				{ a: 3, b: 'A', c: 'B' }
			],
			'a'
		)

		expect(actual).toBe(expected)
	})
})
