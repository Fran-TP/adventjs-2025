export default function drawTable<T extends Record<string, string | number>>(
	data: T[],
	sortBy: keyof T
): string {
	const widths: Record<string, number> = {}
	const headers = Object.keys(data[0]!)

	let body = ''

	for (const row of data) {
		for (const key in row) {
			const value = String(row[key]).length

			widths[key] ??= value
			widths[key] = Math.max(widths[key], value)
		}
	}

	const sortedData = data.toSorted((a, b) => {
		const va = a[sortBy]
		const vb = b[sortBy]

		return typeof va === 'string'
			? va.localeCompare(String(vb))
			: Number(va) - Number(vb)
	})

	let divider = '+'
	let header = '|'

	for (const [i, head] of headers.entries()) {
		const width = Number(widths[head])

		divider += `${'-'.repeat(width + 2)}+`
		header += ` ${String.fromCharCode(65 + i).padEnd(width)} |`
	}

	for (const item of sortedData) {
		let row = '|'
		for (const key in widths) {
			const val = String(item[key])
			const size = Number(widths[key])

			row += ` ${val.padEnd(size)} |`
		}

		body += `${row}\n`
	}

	return `${divider}\n${header}\n${divider}\n${body}${divider}`
}
