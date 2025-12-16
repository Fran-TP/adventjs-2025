type Data = Record<string, string | number>[]
type SortBy = string

export default function drawTable(data: Data, sortBy: SortBy): string {
	const sizes: Record<string, number> = {}
	const sortedData = data.toSorted((a, b) =>
		typeof a[sortBy] === 'string'
			? String(a[sortBy]).localeCompare(String(b[sortBy]))
			: Number(a[sortBy]) - Number(b[sortBy])
	)
	let body = ''

	for (const item of sortedData) {
		for (const key in item) {
			const value =
				typeof item[key] === 'string'
					? item[key].length
					: String(item[key]).length

			sizes[key] ??= value
			sizes[key] = Math.max(sizes[key], value)
		}
	}

	let divider = '+'
	let header = '|'
	let firstTitle = 65

	for (const key in sizes) {
		const size = Number(sizes[key])

		divider += `${'-'.repeat(size + 2)}+`
		header += ` ${String.fromCharCode(firstTitle).padEnd(size)} |`

		firstTitle++
	}

	for (const item of sortedData) {
		let row = '|'
		for (const key in sizes) {
			const val = String(item[key])
			const size = Number(sizes[key])

			row += ` ${val.padEnd(size)} |`
		}

		body += `${row}\n`
	}

	return `${divider}\n${header}\n${divider}\n${body}${divider}`
}

console.log(
	drawTable(
		[
			{ name: 'Charlie', city: 'New York' },
			{ name: 'Alice', city: 'London' },
			{ name: 'Bob', city: 'Paris' }
		],
		'name'
	)
)
console.log(
	drawTable(
		[
			{ gift: 'Book', quantity: 5 },
			{ gift: 'Music CD', quantity: 1 },
			{ gift: 'Doll', quantity: 10 }
		],
		'quantity'
	)
)
