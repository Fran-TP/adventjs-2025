import assert from 'node:assert'
import { describe, it } from 'node:test'
import drawTree from './decorating-the-tree'

describe('decorating the tree', () => {
	it('drawTree function should be defined', () => {
		assert.strictEqual(typeof drawTree, 'function')
	})
	it('should return a tree with ornaments at the correct frequency', () => {
		const result = drawTree(5, 'o', 3)
		const expected =
			'    *    \n' +
			'   **o   \n' +
			'  *o* *  \n' +
			' * *o* * \n' +
			'*o* * *o*\n' +
			'    #    '
		assert.strictEqual(result, expected)
	})
	it('should return a tree with different ornament and frequency', () => {
		const result = drawTree(4, '@', 2)
		const expected =
			'   *   \n' + '  *@*  \n' + ' *@*@* \n' + '*@*@*@*\n' + '   #   '
		assert.strictEqual(result, expected)
	})
	it('should return a tree with no ornaments when frequency is larger than tree size', () => {
		const result = drawTree(3, 'x', 10)
		const expected = '  *  \n' + ' *** \n' + '*****\n' + '  #  '
		assert.strictEqual(result, expected)
	})

	it('should return a tree with ornaments on every position when frequency is 1', () => {
		const result = drawTree(2, '+', 1)
		const expected = ' + \n' + '+++ \n' + ' # '
		assert.strictEqual(result, expected)
	})
})
