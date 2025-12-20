export default function dropGifts(
	warehouse: string[][],
	drops: number[]
): string[][] {
	for (const col of drops) {
		for (let y = warehouse.length - 1; y >= 0; y--) {
			const cell = warehouse[y]![col]!
			if (cell === '.') {
				warehouse[y]![col] = '#'
				break
			}
		}
	}

	return warehouse
}

console.log(
	dropGifts(
		[
			['.', '.', '.'],
			['.', '#', '.'],
			['#', '#', '.']
		],
		[0, 2]
	)
)
console.log(
	dropGifts(
		[
			['.', '.', '.'],
			['.', '#', '.'],
			['#', '#', '.']
		],
		[0]
	)
)
/*
[
  ['.', '.', '.'],
  ['#', '#', '.'],
  ['#', '#', '.']
]
*/

console.log(
	dropGifts(
		[
			['.', '.', '.'],
			['#', '#', '.'],
			['#', '#', '#']
		],
		[0, 2]
	)
)
/*
[
  ['#', '.', '.'],
  ['#', '#', '#'],
  ['#', '#', '#']
]
*/

console.log(
	dropGifts(
		[
			['.', '.', '.'],
			['.', '.', '.'],
			['.', '.', '.']
		],
		[0, 1, 2]
	)
)
/*
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#']
]
*/
console.log(
	dropGifts(
		[
			['#', '#'],
			['#', '#']
		],
		[0, 0]
	)
)
/*
[
  ['#', '#']
  ['#', '#']
  ]*/
